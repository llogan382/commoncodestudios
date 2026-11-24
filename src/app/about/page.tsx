import type { Metadata } from "next";
import { Container, CtaBand, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    `${site.founder} is an independent senior software engineer helping software companies ship better products.`,
};

// TODO: Replace with your real background, years of experience, and notable work.
const highlights = [
  { label: "Years building software", value: "10+" },
  { label: "Core stack", value: "TypeScript, React, Node.js" },
  { label: "Engagement style", value: "Direct, hands-on" },
];

const principles = [
  {
    title: "Clear communication",
    body: "Regular, written progress updates, early warnings about risks, and honest estimates.",
  },
  {
    title: "Ownership",
    body: "I treat your product like my own: tested, documented, and production-ready, not just “done.”",
  },
  {
    title: "Leave it better",
    body: "Every engagement should leave your codebase and your team in a stronger position.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`Hi, I'm ${site.founder}.`}
        intro={`${site.name} is my independent engineering practice. When you work with me, you get a senior engineer who writes the code, not a sales team and a rotating cast of contractors.`}
      />

      <section>
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_18rem]">
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-pretty">
            {/* TODO: Personalize this section with your own story. */}
            <p>
              I&apos;ve spent my career building and maintaining production software, from
              early-stage SaaS products to established platforms with real customers and real
              constraints.
            </p>
            <p className="text-muted">
              That experience spans frontend, backend, and everything in between: designing
              APIs, building React interfaces, integrating third-party services, and modernizing
              systems that have outgrown their original design.
            </p>
            <p className="text-muted">
              I started {site.name} to give growing teams access to that experience
              when they need it, whether that&apos;s shipping a critical feature, getting a stalled
              project back on track, or getting a second opinion on a big technical decision.
            </p>
          </div>
          <dl className="h-fit divide-y divide-border rounded-xl border border-border bg-surface">
            {highlights.map((h) => (
              <div key={h.label} className="p-5">
                <dt className="text-sm text-muted">{h.label}</dt>
                <dd className="mt-1 font-medium">{h.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How I approach client work</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title}>
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
