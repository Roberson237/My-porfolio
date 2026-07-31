# Docker Setup

## Avec docker-compose (Recommandé)

### Construire et lancer le conteneur

```bash
docker-compose up --build
```

Ouvrir dans le navigateur : `http://localhost:3000`

Pour arrêter le conteneur :
```bash
docker-compose down
```

---

## Avec Docker directement (Alternative)

### Construire l'image
```bash
docker build -t backend-portfolio .
```

### Lancer le conteneur
```bash
docker run --rm -p 3000:3000 backend-portfolio
```

Ouvrir dans le navigateur : `http://localhost:3000`

---

## Diagnostics

### Vérifier les images
```bash
docker images backend-portfolio
```

### Vérifier les conteneurs actifs
```bash
docker ps
```

### Voir les logs du conteneur
```bash
docker-compose logs -f
# ou
docker logs <container_id>
```

### Arrêter tous les conteneurs
```bash
docker-compose down
```

---

## Notes

- Le Dockerfile utilise `node:20-bullseye` comme base (Debian, meilleure résolution DNS).
- Build multi-stage : builder stage installe toutes les dépendances et compile ; runner stage ne garde que la distribution compilée.
- Port exposé : **3000** (configurable via `PORT` env var dans docker-compose.yml).
- Environnement : **production** (NODE_ENV=production).
