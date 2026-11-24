import type { Metadata } from "next";
import { Container, CtaBand, PageHeader } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Contract full-stack development, React & TypeScript, Node.js APIs, SaaS engineering, legacy modernization, and technical consulting.",
};

const engagements = [
  {
    title: "Project delivery",
    body: "A defined scope, like a feature, integration, or MVP, delivered end to end.",
  },
  {
    title: "Embedded capacity",
    body: "Ongoing part-time or full-time hours working alongside your team to clear the backlog.",
  },
  {
    title: "Advisory",
    body: "Short engagements for architecture reviews, audits, and technical planning.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Hands-on engineering across the stack."
        intro="Contract development, SaaS engineering, integrations, and modernization for teams that need experienced help without a long hiring process."
      />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className="rounded-xl border border-border bg-surface p-6 sm:p-8">
                <h2 className="text-lg font-semibold">{s.title}</h2>
                <p className="mt-2 text-muted">{s.summary}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ways to work together</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {engagements.map((e) => (
              <div key={e.title} className="border-l-2 border-accent pl-5">
                <h3 className="font-medium">{e.title}</h3>
                <p className="mt-2 text-sm text-muted">{e.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
