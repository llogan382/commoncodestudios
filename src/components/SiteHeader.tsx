"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { Container } from "./ui";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-md bg-accent font-mono text-xs text-accent-foreground"
          >
            {"</>"}
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-sm">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 transition-colors hover:text-foreground ${
                  active ? "text-foreground font-medium" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}
