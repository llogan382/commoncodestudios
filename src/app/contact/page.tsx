import type { Metadata } from "next";
import Image from "next/image";
import { Container, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell me about your project. I usually reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project."
        intro="Share a few details about what you're building and where you could use help. I usually reply within one business day."
      />
      <section>
        <Container className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_20rem]">
          <ContactForm />
          <aside className="h-fit space-y-8 rounded-2xl border border-border bg-surface p-6 text-sm">
            <div>
              <div className="flex items-center gap-3">
                <Image
                  src="/luke-logan.jpg"
                  alt=""
                  width={96}
                  height={96}
                  className="size-12 rounded-full border border-border object-cover"
                />
                <div>
                  <h2 className="font-medium">{site.founder}</h2>
                  <p className="text-muted">Founder, {site.name}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-medium">Email</h2>
              <a href={`mailto:${site.email}`} className="mt-1 block text-accent hover:text-accent-hover">
                {site.email}
              </a>
            </div>
            {site.schedulingUrl && (
              <div>
                <h2 className="font-medium">Prefer a call?</h2>
                <p className="mt-1 text-muted">Book a free 30-minute intro call.</p>
                <a
                  href={site.schedulingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-medium text-accent hover:text-accent-hover"
                >
                  Schedule a call →
                </a>
              </div>
            )}
            <div>
              <h2 className="font-medium">What happens next</h2>
              <ol className="mt-3 space-y-3 text-muted">
                {[
                  "I review your message and reply with any questions.",
                  "We have a short call to discuss scope and fit.",
                  "I send a proposal with timeline and pricing.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent-soft font-mono text-xs text-accent">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
