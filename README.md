# Common Code Studios

Marketing site: Next.js (App Router) + TypeScript + Tailwind CSS, hosted on Vercel.
There's no database, CMS, or auth. The only server code is the contact form's Server Action.

## Pages

| Route       | File                          |
| ----------- | ----------------------------- |
| `/`         | `src/app/page.tsx`            |
| `/services` | `src/app/services/page.tsx`   |
| `/about`    | `src/app/about/page.tsx`      |
| `/contact`  | `src/app/contact/page.tsx`    |

Site name, email, nav, and the service list are in `src/lib/site.ts`.
Colors are CSS variables in `src/app/globals.css`, with light and dark themes.

## Develop

```bash
cp .env.example .env.local   # fill in values
npm install
npm run dev
```

## Contact form

`src/app/contact/actions.ts` sends inquiries through the [Resend](https://resend.com) HTTP API.
It has no SDK dependency. Set these variables:

- `RESEND_API_KEY`: required. Without it the form tells visitors to email you directly.
- `CONTACT_TO_EMAIL`: your inbox.
- `CONTACT_FROM_EMAIL`: a sender address on a domain you've verified in Resend.

## Deploy

1. Push to GitHub.
2. Import the repo in Vercel. The framework is detected automatically.
3. Add the environment variables from `.env.example`.
4. Add your domain under Project → Settings → Domains. HTTPS is set up automatically.
