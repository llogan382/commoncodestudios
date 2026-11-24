// Central place for site-wide copy and settings. Edit here, not in components.

export const site = {
  name: "Common Code Studios",
  tagline: "Experienced engineering. Practical solutions.",
  description:
    "Independent senior software engineering for software companies: full-stack development, SaaS features, API integrations, and modernization, without the overhead of another full-time hire.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://commoncodestudios.com",
  // Public business email shown on the Contact page and used as a fallback.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@commoncodestudios.com",
  // Optional: a Cal.com / Calendly link. Leave empty to hide the scheduling option.
  schedulingUrl: process.env.NEXT_PUBLIC_SCHEDULING_URL ?? "",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  title: string;
  summary: string;
  details: string[];
};

export const services: Service[] = [
  {
    title: "Full-stack application development",
    summary:
      "End-to-end delivery of features and products, from database schema to polished UI.",
    details: [
      "New features scoped, built, tested, and shipped",
      "Clean handoff with documentation your team can maintain",
      "Comfortable joining an existing codebase and conventions",
    ],
  },
  {
    title: "React & TypeScript development",
    summary:
      "Fast, accessible, maintainable frontends built with modern React and strict TypeScript.",
    details: [
      "Next.js and single-page applications",
      "Component libraries and design-system work",
      "Performance and accessibility improvements",
    ],
  },
  {
    title: "Node.js & API development",
    summary:
      "Reliable backend services and integrations that connect your product to the tools your customers use.",
    details: [
      "REST and GraphQL API design",
      "Third-party integrations: payments, CRMs, webhooks",
      "Background jobs, queues, and data pipelines",
    ],
  },
  {
    title: "SaaS product development",
    summary:
      "Help taking a SaaS product from idea to launch, or growing one that is already in production.",
    details: [
      "Multi-tenant architecture, billing, and permissions",
      "MVPs built to grow rather than be rewritten",
      "Pragmatic trade-offs between speed and quality",
    ],
  },
  {
    title: "Legacy system modernization",
    summary:
      "Incremental upgrades that reduce risk and keep the business running while the code improves.",
    details: [
      "Framework and dependency upgrades",
      "Untangling and testing critical code paths",
      "Step-by-step migrations instead of big-bang rewrites",
    ],
  },
  {
    title: "Technical consulting & architecture",
    summary:
      "A senior second opinion on the decisions that are expensive to get wrong.",
    details: [
      "Architecture and code reviews",
      "Build-vs-buy and technology selection",
      "Roadmaps for paying down technical debt",
    ],
  },
];
