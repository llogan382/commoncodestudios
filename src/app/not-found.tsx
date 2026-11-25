import { ButtonLink, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div aria-hidden className="glow absolute -top-40 left-[calc(50%-16rem)] size-[32rem] rounded-full" />
      <Container className="relative py-32 text-center">
        <p className="font-mono text-sm text-brand-light">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-4 text-ink-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
        <ButtonLink href="/" variant="brand" className="mt-8">
          Back to home
        </ButtonLink>
      </Container>
    </section>
  );
}
