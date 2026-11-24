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
}: ComponentProps<typeof Link> & { variant?: "primary" | "secondary" }) {
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground hover:bg-accent-hover"
      : "border border-border bg-surface text-foreground hover:border-muted";
  return <Link className={`${buttonBase} ${styles} ${className}`} {...props} />;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-medium tracking-wide text-accent uppercase">{children}</p>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: ReactNode }) {
  return (
    <section className="border-b border-border">
      <Container className="py-16 sm:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <div className="mt-5 max-w-2xl text-lg text-muted text-pretty">{intro}</div>
      </Container>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="border-t border-border bg-surface">
      <Container className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Flexible engineering support for growing teams.
          </h2>
          <p className="mt-3 text-muted">
            Whether you need help delivering a project, clearing a backlog, or adding experienced
            engineering capacity, let&apos;s talk.
          </p>
        </div>
        <ButtonLink href="/contact" className="shrink-0">
          Discuss your project
        </ButtonLink>
      </Container>
    </section>
  );
}
