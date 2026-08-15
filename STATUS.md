# ResumeForge AI — Build Status

This file exists because the brief explicitly requires distinguishing
"implemented" from "mocked" / "requires configuration." Read this before
telling anyone this is done.

## How this was verified (and how it wasn't)

This code was written in a sandbox with **no network access** — I could not
run `npm install`, `next build`, `prisma migrate`, a live dev server, or a
browser. Every file was checked with the TypeScript compiler against a loose
config (`tsconfig.check.json`) to catch real syntax/type errors independent
of missing dependencies — that check is clean except for errors that are
provably caused by absent `node_modules` (unresolved `next`, `react`,
`prisma`, `zod`, etc. — expected, resolves on `npm install`).

**What this means concretely:** the code is real, not a mock, and is
structurally sound as far as static analysis can confirm. It has **not**
been run. "Zero console errors, every button clicked" as required in the
brief can only be verified by actually running the app — do that before
calling this done. Claude Code is the right tool for that next step: it can
install dependencies, run the dev server, and iterate on real compiler/
runtime errors.

## Implemented (real code, works once configured)

- **Database schema** (`prisma/schema.prisma`) — Users, Resumes, Experience,
  Education, Skills, Projects, Subscriptions, AIUsage, ExportHistory, auth
  tables. Requires `DATABASE_URL`.
- **Authentication** — NextAuth credentials provider, bcrypt password
  hashing (never plaintext), signup/login/reset-password routes, password
  reset via single-use hashed tokens with expiry. Requires `AUTH_SECRET` +
  `DATABASE_URL`.
- **Resume CRUD** — list/create/read/update(autosave)/delete/duplicate, all
  scoped to `{ id, userId }` so one user can never read or modify another's
  resume. Free-plan resume limit enforced server-side, not trusted from the
  client.
- **AI service layer** — `lib/ai/client.ts` is the only file that touches
  `AI_API_KEY`; it's never sent to the browser. Routes: summary,
  improve-experience, improve-project, suggest-skills, rewrite,
  generate-resume. Every prompt explicitly forbids inventing employers,
  dates, metrics, or skills not present in the input.
- **Credit system** — costs defined server-side only (`lib/ai/credits.ts`),
  reserved atomically before each AI call, refunded automatically on
  failure, tracked in `AIUsage`. Client never asserts its own balance.
- **ATS scoring engine** (`lib/ats/engine.ts`) — deterministic, real checks
  against actual resume data (contact completeness, summary presence,
  experience/education/skills counts, measurable-results detection, action
  verb usage). Not AI-guessed, not hardcoded to always return a high number.
- **Rate limiting** — Upstash-backed with an in-memory fallback for local
  dev (documented single-instance limitation in the file).
- **Visual system** — Tailwind theme matching the ivory/champagne/soft-blue
  spec, Fraunces + Inter fonts, glass utility classes.
- **12 real templates** — `lib/templates/registry.ts` defines 12 distinct
  configs (layout, density, accent, heading font, section order); the
  single renderer (`ResumeTemplateRenderer.tsx`) produces genuinely
  different DOM per config — single-column vs sidebar-left vs
  sidebar-right, different section ordering, different density/spacing.
  Switching templates never touches resume content. 3 marked free / 9 Pro
  in the registry.
- **Landing page** — hero with CSS-3D floating resume + parallax (see
  design note in `FloatingResumeHero.tsx` for why CSS transforms over
  WebGL), template gallery, AI generation entry point with a real working
  modal and pipeline visual, ATS score section with real scroll-triggered
  count-up, job-match showcase, pricing section, final CTA. Respects
  `prefers-reduced-motion` throughout.
- **"Make My Resume with AI"** — real modal, real API call, structured JSON
  output validated with Zod before it ever reaches the client, hands off to
  the builder for the user to review/edit before anything saves. Not a
  fake animation.

## Requires external configuration (implemented, needs your credentials)

- AI features → `AI_API_KEY`
- Database → `DATABASE_URL`, then `npm run db:migrate`
- Auth → `AUTH_SECRET`
- Email (welcome/reset/subscription emails) → `RESEND_API_KEY` (logs to
  console instead of sending until set — this is visible in server logs,
  not a silent failure)
- Rate limiting across multiple server instances → `UPSTASH_REDIS_REST_URL`
  + `UPSTASH_REDIS_REST_TOKEN` (an in-memory fallback works for a single
  instance / local dev without these)

## Not yet built in this pass (explicitly deferred, not silently skipped)

These are real gaps, not hidden mocks:

- **Dashboard, builder, login/signup, /templates, /pricing pages** — the
  landing page and its sections exist; the authenticated app pages that
  consume the resume CRUD + AI + template renderer described above still
  need to be wired up as Next.js pages.
- **PDF export** — `@react-pdf/renderer` is in `package.json` but no export
  route/component has been written yet. It should reuse
  `ResumeTemplateRenderer`'s per-template logic so the PDF and the on-screen
  preview don't drift apart.
- **Stripe integration** — checkout, webhooks, subscription lifecycle
  (Section 10 of the brief) — not started. Do not enable a "Pay" button
  pointing at nothing.
- **Admin dashboard** — not started.
- **SEO landing pages** (`/ai-resume-builder`, `/ats-resume-builder`, etc.)
  — not started.
- **File upload / avatar storage** — not started.

## Known unresolved question from static checking

`ResumeTemplateRenderer.tsx` produces a `TS2322` type error under the
offline checker specifically about the `key` prop on dynamically-selected
components. Every plausible explanation points to this being caused by
`react`'s real type declarations being absent (TypeScript can't apply its
built-in "key isn't a regular prop" exemption without them) — every other
component using the identical `.map() => <Comp key={...} />` pattern is
silent, and this one only differs in going through a
`Record<SectionKey, Component>` lookup. I'm not fully certain, and you
should let `npm run typecheck` have the final word once `node_modules`
exists.
