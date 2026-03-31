# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (ESM bundle)
- **Frontend**: React 19 + Vite + Tailwind CSS v4
- **Animations**: Framer Motion
- **Notifications**: Telegram Bot API

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── lead-obsidian/      # LeadObsidian marketing site (React + Vite)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # One-command Docker deployment
├── docker-entrypoint.sh    # Runs DB migrations then starts API
├── .env.example            # Environment variable template
├── pnpm-workspace.yaml
├── tsconfig.base.json
└── package.json
```

## LeadObsidian Site

Marketing site for an AI-powered B2B lead generation tool. Pages:
- `/` — Home/Landing
- `/features` — Features
- `/pricing` — Pricing (with annual/monthly toggle)
- `/demo` — Book a Demo / Contact form (saves leads to DB + Telegram notification)

Design system: Obsidian dark theme (#0b1326 base), gradient accents (periwinkle→electric blue), Manrope headings, Inter body, Framer Motion animations.

## API Endpoints

- `GET /api/healthz` — Health check
- `POST /api/leads` — Save a lead/demo request (also sends Telegram notification)
- `GET /api/leads` — List all leads

## Database Schema

- `leads` table: id, first_name, last_name, email, company, phone, message, created_at

## Telegram Integration

When a lead submits the demo form, a Telegram notification is sent to the configured user ID via the bot. Configured via:
- `TG_BOT_TOKEN` — from @BotFather
- `TG_CHAT_ID` — your personal Telegram user ID (from @userinfobot)

## Docker Deployment

```bash
# 1. Copy .env.example to .env and fill in values
cp .env.example .env

# 2. Start everything (DB + app)
docker-compose up -d
```

The app serves on port 3000 by default (configurable via `APP_PORT` in .env).

On startup, the entrypoint automatically runs database migrations before starting the server.

## Environment Variables (.env)

| Variable          | Description                         | Default       |
|-------------------|-------------------------------------|---------------|
| `APP_PORT`        | Host port for the web app           | `3000`        |
| `POSTGRES_USER`   | PostgreSQL username                 | `leadobsidian`|
| `POSTGRES_PASSWORD`| PostgreSQL password                | required      |
| `POSTGRES_DB`     | PostgreSQL database name            | `leadobsidian`|
| `TG_BOT_TOKEN`    | Telegram Bot token from @BotFather  | optional      |
| `TG_CHAT_ID`      | Your Telegram user ID               | optional      |

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

- **Always typecheck from the root** — run `pnpm run typecheck`
- **`emitDeclarationOnly`** — only emits `.d.ts` files during typecheck

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes in `src/routes/`.

- In production (Docker), also serves static frontend files from `./public/`

### `artifacts/lead-obsidian` (`@workspace/lead-obsidian`)

React + Vite marketing site. Uses Framer Motion for animations.

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL.

- `src/schema/leads.ts` — leads table
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`)
- Dev migrations: `pnpm --filter @workspace/db run push`

### `lib/api-spec` (`@workspace/api-spec`)

OpenAPI 3.1 spec + Orval codegen config.

Run codegen: `pnpm --filter @workspace/api-spec run codegen`
