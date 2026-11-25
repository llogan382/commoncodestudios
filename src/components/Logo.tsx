// Common Code Studios logo, drawn as SVG + text so it adapts to light and dark mode.
// The left bracket uses the text color; the right bracket keeps the brand green.

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 375 263" aria-hidden className={className}>
      <polygon
        fill="currentColor"
        points="128,3 170,28 57,117 57,170 164,230 122,260 5,173 5,88"
      />
      <polygon fill="#0a9e82" points="247,3 370,88 370,173 253,260 211,230 318,170 318,117 205,28" />
    </svg>
  );
}

export function Logo({ showWordmark = true }: { showWordmark?: boolean }) {
  return (
    <span className="flex items-center gap-3 text-foreground">
      <LogoMark className="h-7 w-auto" />
      {showWordmark && (
        <>
          <span aria-hidden className="h-8 w-px bg-muted/50" />
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight">Common Code</span>
            <span className="mt-0.5 text-xs tracking-[0.3em] text-muted">Studios</span>
          </span>
        </>
      )}
    </span>
  );
}
