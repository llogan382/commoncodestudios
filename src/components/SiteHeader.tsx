"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Container } from "./ui";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label={`${site.name} home`} className="shrink-0">
          <span className="sm:hidden">
            <Logo showWordmark={false} />
          </span>
          <span className="hidden sm:block">
            <Logo />
          </span>
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
