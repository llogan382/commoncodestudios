// Central place for site-wide copy and settings. Edit here, not in components.

export const site = {
  name: "Common Code Studios",
  founder: "Luke Logan",
  tagline: "Experienced engineering. Practical solutions.",
  description:
    "Independent senior software engineering for software companies: full-stack development, SaaS features, API integrations, and modernization, without the overhead of another full-time hire.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://commoncodestudios.com",
  // Public business email shown on the Contact page and used as a fallback.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@commoncodestudios.com",
  linkedin: "https://www.linkedin.com/in/luke-logan-6bb3164b/",
  location: "North Carolina",
  // Optional: a Cal.com / Calendly link. Leave empty to hide the scheduling option.
  schedulingUrl: process.env.NEXT_PUBLIC_SCHEDULING_URL ?? "",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const engagements = [
  {
    title: "Contract engineering",
    body: "Join your team to deliver features, work through backlogs, or provide additional engineering capacity.",
  },
  {
    title: "Project-based development",
    body: "Take ownership of a defined project, integration, or technical initiative from planning through delivery.",
  },
  {
    title: "Ongoing consulting",
    body: "Provide continued engineering support and technical guidance as your needs evolve.",
  },
  {
    title: "Technical problem-solving",
    body: "Help untangle complex bugs, performance issues, architecture concerns, or challenging development work.",
  },
] as const;

export const highlights = [
  {
    title: "SaaS product development",
    body: "Rebuilt a legacy service used by 16,000 realtors and relaunched it as a nationwide SaaS product on serverless AWS.",
    stat: "16,000",
    statLabel: "users on the rebuilt platform",
  },
  {
    title: "Reliability & performance",
    body: "Improved integrations and test coverage after launch, and cut turnaround time on client systems in banking and payments.",
    stat: "24%",
    statLabel: "fewer production errors",
  },
  {
    title: "System modernization",
    body: "Migrated legacy apps to modern frameworks and rolled out SSO and MFA across five products without disrupting users.",
    stat: "5",
    statLabel: "products secured with SSO & MFA",
  },
] as const;

export type Service = {
  title: string;
  summary: string;
  details: string[];
};

export const services: Service[] = [
  {
    title: "Product & Feature Development",
    summary:
      "Build new products, deliver features, and turn product ideas into reliable, production-ready software.",
    details: [
      "Feature development",
      "MVPs",
      "SaaS applications",
      "End-to-end implementation",
      "Product enhancements",
    ],
  },
  {
    title: "React & TypeScript development",
    summary:
"Create fast, intuitive, and maintainable web applications that deliver a great experience for users.",
    details: [
      "Next.js and single-page applications",
      "Component libraries and design-system work",
      "Performance and accessibility improvements",
    ],
  },
  {
    title: "Backend Development & Integrations",
    summary:
"Build dependable backend services, APIs, and integrations that keep applications and systems connected.",
    details: [
      "REST and GraphQL API design",
      "Third-party integrations: payments, CRMs, webhooks",
      "Background jobs, queues, and data pipelines",
    ],
  },
  {
    title: "Modernization & Technical Consulting",
    summary:
"Improve existing systems, resolve technical challenges, and make confident engineering decisions without unnecessary rewrites.",
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
