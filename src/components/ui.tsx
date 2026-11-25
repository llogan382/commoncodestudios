import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-5xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

const buttonBase =
  "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: "primary" | "secondary" | "brand" | "outline-dark" }) {
  const styles = {
    primary: "bg-accent text-accent-foreground hover:bg-accent-hover",
    secondary: "border border-border bg-surface text-foreground hover:border-muted",
    brand: "bg-brand text-ink hover:bg-brand-light",
    "outline-dark": "border border-ink-border text-ink-foreground hover:bg-white/5",
  }[variant];
  return <Link className={`${buttonBase} ${styles} ${className}`} {...props} />;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-medium tracking-wide text-accent uppercase">{children}</p>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div aria-hidden className="glow absolute -top-48 -left-40 size-[32rem] rounded-full" />
      <Container className="relative py-20 sm:py-24">
        <p className="rise text-sm font-medium tracking-wide text-brand-light uppercase">{eyebrow}</p>
        <h1 className="rise rise-1 mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <div className="rise rise-2 mt-6 max-w-2xl text-lg text-ink-muted text-pretty">{intro}</div>
      </Container>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-ink px-6 py-14 text-ink-foreground sm:px-14 sm:py-16">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <div aria-hidden className="glow absolute -top-1/2 -right-1/4 size-[28rem] rounded-full" />
        <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-wide text-brand-light uppercase">Get in touch</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Let&apos;s talk about what you&apos;re building.
            </h2>
            <p className="mt-4 text-ink-muted">
              Whether you need another experienced engineer on your team, help delivering a project,
              or someone to work through a difficult technical challenge, I&apos;d like to hear
              about it.
            </p>
          </div>
          <ButtonLink href="/contact" variant="brand" className="shrink-0">
            Discuss your project
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
