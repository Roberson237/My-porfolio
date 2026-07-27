# backend-portfolio

Site portfolio fullstack basé sur une application React/Vite et un serveur Express minimal pour la production.

## Présentation

Ce projet fournit une interface front-end moderne avec React 19, Vite et Tailwind CSS, ainsi qu'un serveur Node/Express léger pour servir le build de production.

## Fonctionnalités principales

- Application single-page React avec routing client (`wouter`)
- UI construite avec des composants Radix UI et animations Framer Motion
- Formulaires gérés avec React Hook Form et Zod
- Support des thèmes via `next-themes`
- Build de production servi par un serveur Express statique
- Conteneurisation Docker avec `docker-compose`

## Stack technique

- Frontend: React 19, Vite, TypeScript, Tailwind CSS 4
- Backend: Node.js, Express
- Outils: pnpm, esbuild, Prettier
- Dépendances UI: Radix UI, Framer Motion, Recharts, Lucide, Sonner

## Prérequis

- Node.js 20+ installé
- pnpm 10+ recommandé
- Docker / Docker Compose si vous utilisez la version conteneurisée

## Installation

```bash
pnpm install
```

## Développement

```bash
pnpm dev
```

Le site est alors accessible sur `http://localhost:5173` par défaut.

## Build et production

```bash
pnpm build
pnpm start
```

Le build de production est généré par Vite et le serveur Express sert ensuite le contenu statique depuis `dist/public`. Le serveur écoute sur le port `3000` par défaut.

## Docker

### Avec docker-compose (recommandé)

```bash
docker-compose up --build
```

Puis ouvrir `http://localhost:3000`.

### Avec Docker directement

```bash
docker build -t backend-portfolio .
docker run --rm -p 3000:3000 backend-portfolio
```

## Structure du projet

- `client/` : code source du front-end React
- `server/` : serveur Express de production
- `Dockerfile` : image Docker multi-étape
- `docker-compose.yml` : composition pour le développement / déploiement
- `package.json` : scripts et dépendances

## Scripts utiles

- `pnpm dev` : lance Vite en mode développement
- `pnpm build` : compile le front-end et bundle le serveur
- `pnpm start` : lance le serveur Express en production
- `pnpm preview` : lance un aperçu Vite du build
- `pnpm check` : vérifie les types TypeScript
- `pnpm format` : formate le code avec Prettier

## Notes

- Le serveur Express sert `index.html` pour toutes les routes afin d’assurer le support du routing client.
- Le projet est conçu pour être déployé en mode production à partir du dossier `dist`.

## Licence

Ce projet est sous licence MIT.
