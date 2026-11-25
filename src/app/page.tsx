import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Container, CtaBand, Eyebrow } from "@/components/ui";
import { engagements, highlights, services, site } from "@/lib/site";

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

const companies = ["Apple", "Storable", "Bright MLS", "Levvel"];

const stats = [
  { value: "10+", label: "years building production software" },
  { value: "16k", label: "users on a platform I rebuilt" },
  { value: "24%", label: "fewer errors after relaunch" },
  { value: "<24h", label: "root-cause fixes shipped to production" },
];

export default function Home() {
  return (
    <>
      {/* Hero: dark, personal, with credentials up front */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <div aria-hidden className="glow absolute -top-40 -left-40 size-[36rem] rounded-full" />
        <Container className="relative grid items-center gap-14 py-20 sm:py-28 lg:grid-cols-[1fr_20rem]">
          <div>
            <p className="rise inline-flex items-center gap-2 rounded-full border border-ink-border bg-white/5 px-3 py-1 text-sm text-ink-muted">
              <span aria-hidden className="size-2 rounded-full bg-brand" />
              Hi, I&apos;m {site.founder.split(" ")[0]}, an independent software engineer
            </p>
            <h1 className="rise rise-1 mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
              Senior-level engineering{" "}
              <span className="text-brand-light">when you need it.</span>
            </h1>
            <p className="rise rise-2 mt-6 max-w-2xl text-lg text-ink-muted text-pretty sm:text-xl">
              I help SaaS companies ship features, improve existing systems, and tackle complex
              technical challenges, with hands-on senior support for teams that need extra capacity
              without adding a full-time hire.
            </p>
            <div className="rise rise-3 mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="brand">
                Discuss your project
              </ButtonLink>
              <ButtonLink href="/services" variant="outline-dark">
                View services
              </ButtonLink>
            </div>
          </div>

          <div className="rise rise-2 relative mx-auto w-64 lg:w-full">
            <div aria-hidden className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-brand/40 to-transparent blur-xl" />
            <Image
              src="/luke-logan.jpg"
              alt={`Headshot of ${site.founder}`}
              width={352}
              height={352}
              priority
              className="relative aspect-square w-full rounded-2xl border border-ink-border object-cover"
            />
            <div className="absolute -bottom-5 -left-4 rounded-xl border border-ink-border bg-ink-surface/95 px-4 py-3 shadow-xl backdrop-blur">
              <p className="text-2xl font-semibold">10+ yrs</p>
              <p className="text-xs text-ink-muted">full-stack experience</p>
            </div>
            <div className="absolute -top-4 -right-3 rounded-full border border-ink-border bg-ink-surface/95 px-3 py-1.5 text-xs text-ink-muted shadow-xl backdrop-blur">
              {site.location} · ET
            </div>
          </div>
        </Container>

        {/* Credentials strip */}
        <div className="relative border-t border-ink-border">
          <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:gap-10">
            <p className="shrink-0 text-xs font-medium tracking-wide text-ink-muted uppercase">
              Experience includes
            </p>
            <ul className="flex flex-wrap gap-x-10 gap-y-3 text-lg font-semibold tracking-tight text-ink-foreground/70">
              {companies.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <Container className="grid grid-cols-2 gap-y-10 py-14 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-brand pr-4 pl-5">
              <p className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Services */}
      <section>
        <Container className="py-20 sm:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Services</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">What I do</h2>
              <p className="mt-4 text-muted">
                From new SaaS features and frontend development to API integrations and technical
                modernization, I bring hands-on experience building and improving real-world
                software.
              </p>
            </div>
            <Link href="/services" className="text-sm font-medium text-accent hover:text-accent-hover">
              All services →
            </Link>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <li
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
                />
                <p className="font-mono text-xs text-accent">0{i + 1}</p>
                <h3 className="mt-3 font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.summary}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Ways to work together */}
      <section className="border-t border-border bg-surface">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-[20rem_1fr]">
          <div>
            <Eyebrow>Engagements</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ways to work together
            </h2>
            <p className="mt-4 text-muted">Flexible engagement, built around your team.</p>
            <ButtonLink href="/contact" variant="secondary" className="mt-8">
              Find the right fit
            </ButtonLink>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
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

      {/* Selected work: dark contrast band */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <Container className="relative py-20 sm:py-24">
          <p className="text-sm font-medium tracking-wide text-brand-light uppercase">Results</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-2xl text-ink-muted">
            A few examples of the results I&apos;ve helped teams deliver.
          </p>
          <ul className="mt-12 grid gap-4 lg:grid-cols-3">
            {highlights.map((h) => (
              <li
                key={h.title}
                className="flex flex-col rounded-2xl border border-ink-border bg-ink-surface p-7"
              >
                <p className="text-4xl font-semibold tracking-tight text-brand-light">{h.stat}</p>
                <p className="mt-1 text-sm text-ink-muted">{h.statLabel}</p>
                <div className="mt-6 border-t border-ink-border pt-6">
                  <h3 className="font-medium">{h.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{h.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-10 inline-block text-sm font-medium text-brand-light hover:text-ink-foreground"
          >
            More about my background →
          </Link>
        </Container>
      </section>

      {/* How I work */}
      <section>
        <Container className="py-20 sm:py-24">
          <Eyebrow>Approach</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">How I work</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {approach.map((a, i) => (
              <div key={a.title}>
                <p className="grid size-10 place-items-center rounded-full bg-accent-soft font-mono text-sm text-accent">
                  0{i + 1}
                </p>
                <h3 className="mt-4 font-medium">{a.title}</h3>
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
