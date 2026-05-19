# AGENTS.md — Countdown

A React 19 + Next.js 16 (App Router) Jamstack countdown timer. All source is **`.js`/`.jsx`** (TypeScript is a dep but unused in source).

## Commands

| Command | What it does |
|---------|-------------|
| `pnpm dev` | Dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm start` | Start prod server |
| `pnpm lint` | ESLint (`eslint .`) |

- **No tests, no formatter, no typecheck script**, no CI/CD, no pre-commit hooks.
- To typecheck: `pnpm tsc --noEmit` (runs TS compiler against JS files via tsconfig).
- ESLint is pinned to v9 — `eslint-config-next` 16's `typescript-eslint` dep isn't compatible with ESLint 10 yet.

## Package manager

**pnpm** — lockfile v9. Do not use npm or yarn.

## Architecture

- `app/` — Next.js App Router routes: `/`, `/settings`, `/about`.
- `components/` — Zustand stores (`useSettings.js`, `useTheme.js`) plus all UI components.
- `styles/globals.css` — Tailwind v4 + DaisyUI v5.
- Countdown logic in `components/calculateCountdown.js` (Luxon).

## Quirks

- **`app/layout.js` is a client component** (`"use client"`) — metadata exports are commented out, entire app is client-rendered.
- **Tailwind v4** — configured via `@tailwindcss/postcss` plugin, no `tailwind.config` file.
- **DaisyUI v5** registered as a `@plugin` in `globals.css`.
- **No test suite exists** — do not attempt to run or add tests without explicit instruction.
- **Deployment**: Vercel (metadata in `.vercel/project.json`).
