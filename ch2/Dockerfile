# Utiliser une image Node.js légère
FROM node:18-alpine

# Créer le répertoire de l'application
WORKDIR /app

# Copier les fichiers de dépendances
COPY challenge/package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY challenge/ ./

# Exposer les ports
EXPOSE 3000 8080

# Démarrer les deux serveurs
CMD ["sh", "-c", "npm start & npx http-server -p 8080 --cors -c-1"]
