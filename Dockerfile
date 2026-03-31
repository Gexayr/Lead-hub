FROM node:24-slim AS base
RUN npm install -g pnpm@10
ENV PNPM_HOME=/usr/local/bin

# ─── Install all deps (incl. dev) ─────────────────────────────────────────────
FROM base AS deps
WORKDIR /app

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY lib/                     ./lib/
COPY artifacts/api-server/    ./artifacts/api-server/
COPY artifacts/lead-obsidian/ ./artifacts/lead-obsidian/
COPY scripts/                 ./scripts/
COPY tsconfig.base.json tsconfig.json ./

RUN pnpm install --frozen-lockfile

# ─── Build frontend ───────────────────────────────────────────────────────────
FROM deps AS build-frontend
WORKDIR /app

# BASE_PATH must be "/" for production docker deployment
ENV BASE_PATH=/
ENV PORT=3000
ENV NODE_ENV=production

RUN pnpm --filter @workspace/lead-obsidian run build

# ─── Build API server ─────────────────────────────────────────────────────────
FROM deps AS build-api
WORKDIR /app

ENV NODE_ENV=production

RUN pnpm --filter @workspace/api-server run build

# ─── Production runtime ───────────────────────────────────────────────────────
FROM base AS runtime

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy full monorepo skeleton so drizzle-kit push works in the entrypoint
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY lib/db/       ./lib/db/
COPY lib/api-zod/  ./lib/api-zod/
COPY lib/api-spec/ ./lib/api-spec/
COPY scripts/      ./scripts/
COPY tsconfig.base.json tsconfig.json ./

# Install all deps (including devDeps — needed for drizzle-kit in entrypoint)
RUN pnpm install --frozen-lockfile

# Copy built artifacts
COPY --from=build-api      /app/artifacts/api-server/dist ./artifacts/api-server/dist
COPY --from=build-frontend /app/artifacts/lead-obsidian/dist/public ./public

# Copy entrypoint
COPY docker-entrypoint.sh ./docker-entrypoint.sh
RUN chmod +x ./docker-entrypoint.sh

ENV NODE_ENV=production
ENV PORT=8080

EXPOSE 8080

ENTRYPOINT ["dumb-init", "--"]
CMD ["./docker-entrypoint.sh"]
