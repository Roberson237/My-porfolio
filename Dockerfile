# Use Node 20 for a stable production environment
FROM node:20-bullseye AS builder

WORKDIR /app

# Install pnpm directly to avoid Corepack runtime download timeouts
# Pin to the version used by the project to match lockfile expectations
RUN npm install -g pnpm@10.4.1

# Copy lockfiles first for cached dependency install
COPY package.json pnpm-lock.yaml ./

# Install all dependencies for build
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm build

# Production image
FROM node:20-bullseye AS runner
WORKDIR /app

# Install runtime pnpm (used to install prod deps)
RUN npm install -g pnpm@10.4.1

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

COPY --from=builder /app/dist ./dist

EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "dist/index.js"]
