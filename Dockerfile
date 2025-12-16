# === STAGE 1: BUILDER (The compiler) ===
FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# === STAGE 2: RUNTIME (The host server) ===
# Use a tiny, secure web server image
FROM nginx:stable-alpine AS production

# Copy the build output from the builder stage into Nginx's web root
COPY --from=builder /app/out /usr/share/nginx/html

# Copy the custom Nginx configuration for single-page apps (SPA)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]