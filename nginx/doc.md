# Documentación de Nginx

Guía práctica para comprender, configurar y usar Nginx como servidor web, reverse proxy y balanceador de carga en entornos reales.

---

## 1. ¿Qué es Nginx?

Servidor web y proxy inverso de alto rendimiento basado en arquitectura asíncrona (event‑driven).

Características principales:

* Alta concurrencia
* Bajo consumo de memoria
* Excelente para contenido estático
* Ideal como frontend de aplicaciones backend

Usos comunes:

* Servir páginas web
* Reverse proxy
* Balanceo de carga
* Terminación SSL
* Caché HTTP

---

## 2. Arquitectura interna

### Master process

Gestiona configuración y workers

### Worker processes

Atienden conexiones simultáneamente sin crear un hilo por usuario

Modelo:

```
Evento → Worker → Respuesta
```

No bloqueante → miles de usuarios concurrentes

---

## 3. Archivos importantes

Configuración principal:

```
/etc/nginx/nginx.conf
```

Sitios:

```
/etc/nginx/sites-available/
/etc/nginx/sites-enabled/
```

Logs:

```
/var/log/nginx/access.log
/var/log/nginx/error.log
```

---

## 4. Estructura de configuración

Bloques principales:

```
events { }
http { }
server { }
location { }
```

Jerarquía:

```
http → server → location
```

---

## 5. Servidor básico

Ejemplo mínimo:

```
server {
    listen 80;
    server_name midominio.com;

    root /var/www/html;
    index index.html;
}
```

---

## 6. Virtual Hosts

Permite múltiples sitios en una misma máquina.

```
server {
    listen 80;
    server_name ejemplo.com;
    root /var/www/ejemplo;
}

server {
    listen 80;
    server_name api.ejemplo.com;
    root /var/www/api;
}
```

---

## 7. Location block

Controla rutas específicas.

```
location / {
    try_files $uri $uri/ =404;
}

location /images/ {
    autoindex on;
}

location ~ \.php$ {
    include fastcgi_params;
}
```

Tipos:

* Exacto (=)
* Prefijo (/ruta)
* Regex (~)

---

## 8. Archivos estáticos

Muy eficiente sirviendo contenido directo:

```
location /assets/ {
    root /var/www/site;
}
```

---

## 9. Reverse Proxy

Enviar tráfico a backend:

```
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

Arquitectura típica:
Cliente → Nginx → Backend

---

## 10. PHP (FastCGI)

```
location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/run/php/php8.2-fpm.sock;
}
```

---

## 11. HTTPS (SSL/TLS)

```
server {
    listen 443 ssl;
    ssl_certificate /etc/ssl/cert.pem;
    ssl_certificate_key /etc/ssl/key.pem;
}
```

Redirección HTTP → HTTPS:

```
server {
    listen 80;
    return 301 https://$host$request_uri;
}
```

---

## 12. Compresión

```
gzip on;
gzip_types text/plain text/css application/json application/javascript;
```

---

## 13. Caché

Cache de proxy:

```
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=cache:10m inactive=60m;

location / {
    proxy_cache cache;
    proxy_pass http://backend;
}
```

---

## 14. Seguridad básica

Ocultar versión:

```
server_tokens off;
```

Limitar tamaño de subida:

```
client_max_body_size 10M;
```

Rate limiting:

```
limit_req_zone $binary_remote_addr zone=one:10m rate=5r/s;
```

---

## 15. Balanceo de carga

```
upstream backend {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
}

server {
    location / {
        proxy_pass http://backend;
    }
}
```

Modos:

* round robin
* least connections
* ip hash

---

## 16. Comandos útiles

Probar config:

```
nginx -t
```

Recargar:

```
sudo systemctl reload nginx
```

Reiniciar:

```
sudo systemctl restart nginx
```

Estado:

```
systemctl status nginx
```

---

## 17. Errores comunes

### 403 Forbidden

Permisos incorrectos en carpeta

### 404 Not Found

Ruta mal configurada

### 502 Bad Gateway

Backend apagado o mal proxy_pass

### 504 Gateway Timeout

Backend tardando demasiado

---

## 18. Flujo típico con backend

1. Cliente solicita página
2. Nginx recibe petición
3. Decide location
4. Sirve archivo o envía a backend
5. Devuelve respuesta al cliente

---

Fin de la documentación.
