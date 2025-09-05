#!/bin/sh

# Sustituye las variables de entorno en nuestro archivo de plantilla
# y crea el config.js final que será servido por Nginx.
# El '$' en las variables de shell evita que se expandan aquí,
# permitiendo a envsubst hacer su trabajo.
envsubst '$VITE_API_BASE_URL' < /usr/share/nginx/html/config.template.js > /usr/share/nginx/html/config.js

# Imprime la configuración para depuración
echo "Generated config.js:"
cat /usr/share/nginx/html/config.js

# Ejecuta el comando que se pasó al contenedor (en nuestro caso, CMD de Dockerfile)
# Esto iniciará Nginx.
exec "$@"