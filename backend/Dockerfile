# Multi-stage build : on separe la construction et la production.
# Ca permet d'avoir une image finale plus legere (pas de devDependencies)
# et plus securisee (moins de fichiers = moins de surface d'attaque).
# En gros, le premier stage sert a tester, le deuxieme a deployer.

# --- Stage 1 : builder (on installe tout et on teste) ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test

# --- Stage 2 : production (image finale legere) ---
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install --only=production
COPY --from=builder /app/server.js .
EXPOSE 3000
CMD ["node", "server.js"]
