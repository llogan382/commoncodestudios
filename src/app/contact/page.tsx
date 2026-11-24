import type { Metadata } from "next";
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
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_18rem]">
          <ContactForm />
          <aside className="space-y-8 text-sm">
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
              <ol className="mt-2 list-decimal space-y-1 pl-4 text-muted">
                <li>I review your message and reply with any questions.</li>
                <li>We have a short call to discuss scope and fit.</li>
                <li>I send a proposal with timeline and pricing.</li>
              </ol>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
