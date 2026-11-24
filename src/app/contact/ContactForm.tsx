"use client";

import { useActionState } from "react";
import { sendInquiry, type ContactState } from "./actions";

const inputClass =
  "mt-2 block w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-base placeholder:text-muted/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendInquiry, {
    status: "idle",
  });

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-xl border border-border bg-accent-soft p-8">
        <h2 className="text-lg font-semibold">Thanks, your message is on its way.</h2>
        <p className="mt-2 text-muted">I&apos;ll get back to you within one business day.</p>
      </div>
    );
  }

  const values = state.status === "error" ? state.fields : undefined;

  return (
    <form action={action} className="space-y-5 rounded-xl border border-border bg-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input name="name" required autoComplete="name" defaultValue={values?.name} className={inputClass} />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={values?.email}
            className={inputClass}
          />
        </label>
      </div>
      <label className="block text-sm font-medium">
        Company <span className="font-normal text-muted">(optional)</span>
        <input
          name="company"
          autoComplete="organization"
          defaultValue={values?.company}
          className={inputClass}
        />
      </label>
      <label className="block text-sm font-medium">
        How can I help?
        <textarea
          name="message"
          required
          rows={6}
          defaultValue={values?.message}
          placeholder="A bit about your project, timeline, and team."
          className={inputClass}
        />
      </label>

      {/* Honeypot field, hidden from people and assistive tech. */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p aria-live="polite" className="text-sm text-red-600 dark:text-red-400">
        {state.status === "error" ? state.message : ""}
      </p>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto"
      >
        {pending ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}
