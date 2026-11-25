import type { Metadata } from "next";
import { Container, CtaBand, Eyebrow, PageHeader } from "@/components/ui";
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
        <Container className="py-20 sm:py-24">
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg sm:p-8"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
                />
                <p className="font-mono text-xs text-accent">0{i + 1}</p>
                <h2 className="mt-3 text-lg font-semibold">{s.title}</h2>
                <p className="mt-2 text-muted">{s.summary}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6 text-sm">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-3">
                      <svg aria-hidden viewBox="0 0 16 16" className="mt-0.5 size-4 shrink-0 text-brand">
                        <path
                          d="M3.5 8.5l3 3 6-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[18rem_1fr]">
          <div>
            <Eyebrow>Engagements</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ways to work together
            </h2>
            <p className="mt-4 text-muted">Pick the model that fits your team and timeline.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {engagements.map((e) => (
              <li key={e.title} className="rounded-2xl border border-border bg-background p-6">
                <span aria-hidden className="mb-4 block h-1 w-8 rounded-full bg-brand" />
                <h3 className="font-medium">{e.title}</h3>
                <p className="mt-2 text-sm text-muted">{e.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
