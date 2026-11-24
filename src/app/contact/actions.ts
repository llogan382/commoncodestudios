"use server";

import { site } from "@/lib/site";

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fields?: Record<string, string> };

const MAX = { name: 120, email: 200, company: 120, message: 5000 };

function field(formData: FormData, key: keyof typeof MAX) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim().slice(0, MAX[key]) : "";
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );
}

export async function sendInquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real users never fill this hidden field.
  if (formData.get("website")) return { status: "success" };

  const name = field(formData, "name");
  const email = field(formData, "email");
  const company = field(formData, "company");
  const message = field(formData, "message");
  const fields = { name, email, company, message };

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in your name, email, and message.", fields };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Please enter a valid email address.", fields };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? `${site.name} <onboarding@resend.dev>`;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact form submission was not sent.");
    return {
      status: "error",
      message: `The contact form isn't configured yet. Please email ${site.email} directly.`,
      fields,
    };
  }

  const header = [`Name: ${name}`, `Email: ${email}`, company && `Company: ${company}`];
  const text = `${header.filter(Boolean).join("\n")}\n\n${message}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
      text,
      html: `<pre style="font-family:inherit;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return {
      status: "error",
      message: `Something went wrong sending your message. Please email ${site.email} directly.`,
      fields,
    };
  }

  return { status: "success" };
}
