import Link from "next/link";
import { ButtonLink, Container, CtaBand, Eyebrow } from "@/components/ui";
import { services, site } from "@/lib/site";

const approach = [
  {
    title: "Senior from day one",
    body: "No ramp-up of a junior team or account managers in the middle. You work directly with the engineer writing the code.",
  },
  {
    title: "Fits your team",
    body: "I work inside your repo, your tools, and your process, and leave the code better documented than I found it.",
  },
  {
    title: "Practical over clever",
    body: "Boring, proven technology and clear trade-offs, so what ships is easy for your team to own after the engagement.",
  },
];

export default function Home() {
  return (
    <>
      <section>
        <Container className="py-20 sm:py-28">
          <Eyebrow>{site.tagline}</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Senior-level engineering when you need it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted text-pretty sm:text-xl">
            I&apos;m {site.founder}, an independent software engineer. I help software companies build better products, ship features faster, and solve
            complex engineering problems without the overhead of hiring another full-time
            engineer.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Discuss your project</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              View services
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">What I do</h2>
              <p className="mt-3 text-muted">
                From new SaaS features and frontend development to API integrations and technical
                modernization, I bring hands-on experience building and improving real-world
                software.
              </p>
            </div>
            <Link href="/services" className="text-sm font-medium text-accent hover:text-accent-hover">
              All services →
            </Link>
          </div>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.title} className="bg-surface p-6">
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.summary}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How I work</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {approach.map((a, i) => (
              <div key={a.title}>
                <p className="font-mono text-sm text-accent">0{i + 1}</p>
                <h3 className="mt-2 font-medium">{a.title}</h3>
                <p className="mt-2 text-sm text-muted">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
