# ---- Etapa 1: Build ----
FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- Etapa 2: Production ----
FROM nginx:stable-alpine AS production

# Instalamos 'gettext' que contiene la utilidad 'envsubst'
# Es una forma robusta de sustituir variables de entorno en archivos.
RUN apk --no-cache add gettext

# Copiamos la configuración de Nginx y los archivos de la app
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiamos nuestra plantilla de config.js para que el entrypoint la procese
COPY public/config.js /usr/share/nginx/html/config.template.js

# Copiamos y damos permisos de ejecución al script de entrypoint
COPY scripts/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 8080

# Usamos nuestro script como punto de entrada
ENTRYPOINT ["/entrypoint.sh"]

# El comando por defecto que se pasará a nuestro entrypoint
CMD ["nginx", "-g", "daemon off;"]