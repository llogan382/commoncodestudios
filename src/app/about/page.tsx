import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, CtaBand, Eyebrow, PageHeader } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.founder} is an independent senior software engineer in ${site.location} with 10+ years of experience helping software companies ship, modernize, and scale.`,
};

const facts = [
  { label: "Experience", value: "10+ years building production software" },
  { label: "Based in", value: `${site.location} · Eastern Time` },
  { label: "Core stack", value: "TypeScript, React, Next.js, Node.js, GraphQL, AWS" },
  { label: "Industries", value: "SaaS, healthcare billing, real estate tech, banking & payments" },
];

const experience = [
  {
    company: "Bright MLS",
    role: "Senior Full Stack Engineer",
    body: "Rebuilt a legacy React service used by 16,000 realtors on GraphQL, then packaged it as a Node.js SaaS product on serverless AWS for nationwide use. Cut post-launch errors by 24% with better integrations and Jest and Cypress test coverage.",
  },
  {
    company: "Storable",
    role: "Senior Software Engineer",
    body: "Built custom SSO and MFA across five products, strengthened integration testing in the CI pipeline with Docker, and mentored new engineers on a TypeScript, MongoDB, and PostgreSQL stack.",
  },
  {
    company: "Apple",
    role: "Software Engineer",
    body: "Rebuilt internal web tooling, replaced legacy dependencies using test-driven development, and migrated a legacy Gatsby application to Next.js for faster builds and deployments.",
  },
  {
    company: "Levvel",
    role: "Engineering Consultant",
    body: "Consulted on client projects in banking and payment systems. Reduced turnaround time by 20%, cut machine setup time by 25%, and shipped root-cause fixes to production within 24 hours.",
  },
];

const steps = [
  {
    title: "Intro call",
    body: "A short conversation about what you're building, where you're stuck, and whether I'm the right fit.",
  },
  {
    title: "Scope & plan",
    body: "A clear written proposal: what I'll deliver, how we'll work together, and what it will cost.",
  },
  {
    title: "Get to work",
    body: "I join your repo, tools, and team rituals, and start shipping, with regular written updates along the way.",
  },
  {
    title: "Clean handoff",
    body: "Tested, documented code your team can own and build on long after the engagement ends.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={`Hi, I'm ${site.founder}.`}
        intro={`I'm a senior full-stack engineer with 10+ years of experience at companies like Apple, Storable, and Bright MLS. Through ${site.name}, I help software teams ship features, modernize aging systems, and solve hard technical problems, working directly in your codebase.`}
      />

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-[14rem_1fr] md:gap-12">
            <div className="relative h-fit w-48 md:w-full">
              <div aria-hidden className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand/30 to-transparent blur-xl" />
              <Image
                src="/luke-logan.jpg"
                alt={`Headshot of ${site.founder}`}
                width={352}
                height={352}
                priority
                className="relative aspect-square w-full rounded-2xl border border-border object-cover"
              />
            </div>
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-pretty">
              <p>
                Most teams bring me in when the roadmap is bigger than the team, a project has
                stalled, or an older system has become slow and risky to change. I&apos;ve worked
                through those situations many times, at companies from global names to
                fast-growing SaaS businesses.
              </p>
              <p className="text-muted">
                My work covers the full stack: React and Next.js interfaces, Node.js and GraphQL
                APIs, authentication and SSO, AWS infrastructure, and the testing that keeps it all
                reliable. I care most about code that works in production and that your team can
                understand and maintain after I&apos;m gone.
              </p>
              <p className="text-muted">
                As an independent engineer, you work with me directly. There&apos;s no account
                manager, no handoff to a junior team, and no rotating cast of contractors.
              </p>
              <p className="flex flex-wrap gap-x-6 gap-y-2 text-base">
                <Link href="/contact" className="font-medium text-accent hover:text-accent-hover">
                  Have a project in mind? Get in touch →
                </Link>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-accent hover:text-accent-hover"
                >
                  View my LinkedIn →
                </a>
              </p>
            </div>
          </div>
          <dl className="mt-16 grid gap-x-6 gap-y-8 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="border-l-2 border-brand pl-5">
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="mt-1 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <Container className="relative py-20 sm:py-24">
          <p className="text-sm font-medium tracking-wide text-brand-light uppercase">Background</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            Selected roles and results from the past decade.
          </p>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {experience.map((e) => (
              <li key={e.company} className="rounded-2xl border border-ink-border bg-ink-surface p-7">
                <h3 className="text-xl font-semibold tracking-tight">{e.company}</h3>
                <p className="mt-1 text-sm text-brand-light">{e.role}</p>
                <p className="mt-4 text-sm text-ink-muted">{e.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section>
        <Container className="py-20 sm:py-24">
          <Eyebrow>Process</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            What working with me looks like
          </h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title}>
                <p className="grid size-10 place-items-center rounded-full bg-accent-soft font-mono text-sm text-accent">
                  0{i + 1}
                </p>
                <h3 className="mt-4 font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
