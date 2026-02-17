# Documentación de Servidores Web

Guía práctica sobre funcionamiento, configuración y conceptos esenciales de servidores web orientada a hosting real y despliegue de aplicaciones.

---

## 1. ¿Qué es un servidor web?

Software que recibe solicitudes HTTP/HTTPS desde clientes (navegadores o apps) y responde entregando contenido:

* HTML
* CSS
* JS
* Imágenes
* APIs

Flujo básico:
Cliente → DNS → IP → Servidor → Respuesta

---

## 2. Cliente – Servidor

### Cliente

Aplicación que solicita recursos (browser, app móvil, curl)

### Servidor

Programa escuchando en un puerto (80/443) esperando peticiones

---

## 3. Ciclo de una petición web

1. Usuario escribe dominio
2. DNS devuelve IP
3. Cliente abre conexión TCP
4. Negociación TLS (HTTPS)
5. Cliente envía request HTTP
6. Servidor procesa
7. Servidor responde
8. Cliente renderiza

---

## 4. HTTP y HTTPS

### HTTP

Protocolo de transferencia de hipertexto sin cifrado
Puerto: 80

### HTTPS

HTTP + TLS (cifrado)
Puerto: 443

Métodos comunes:

```
GET
POST
PUT
DELETE
PATCH
```

Códigos de estado:

```
200 OK
301 Redirección
403 Prohibido
404 No encontrado
500 Error servidor
```

---

## 5. Tipos de servidores web

### Apache

* Basado en módulos
* Fácil configuración
* Compatible con .htaccess

### Nginx

* Event-driven
* Muy eficiente en alto tráfico
* Ideal como reverse proxy

### LiteSpeed

* Alto rendimiento
* Compatible con Apache
* Cache integrada

### Caddy

* HTTPS automático
* Configuración sencilla

---

## 6. Virtual Hosts (Hostings múltiples)

Permite alojar múltiples sitios en una misma máquina.

Ejemplo conceptual:

* dominio1.com → /var/www/site1
* dominio2.com → /var/www/site2

---

## 7. Reverse Proxy

Servidor frontal que recibe tráfico y lo envía a otros servicios.

Usos:

* Balanceo de carga
* Ocultar backend
* Cache
* SSL termination

Ejemplo:
Cliente → Nginx → Node/PHP/Python

---

## 8. TLS y certificados SSL

Proveen cifrado y autenticación.

Tipos:

* DV
* OV
* EV

Renovación automática común mediante ACME.

---

## 9. Contenido estático vs dinámico

### Estático

Archivos ya existentes:

* HTML
* Imágenes

### Dinámico

Generado por backend:

* PHP
* Node.js
* Python

Arquitectura típica:
Servidor web + runtime backend + base de datos

---

## 10. Rendimiento

### Compresión

Reduce tamaño de respuestas

* gzip
* brotli

### Caché

* Cache navegador
* Cache servidor
* Cache reverse proxy

### HTTP/2 y HTTP/3

Multiplexación y menor latencia

---

## 11. Seguridad

Buenas prácticas:

* Forzar HTTPS
* Ocultar versiones del servidor
* Limitar métodos HTTP
* Firewall
* Rate limiting
* Cabeceras de seguridad

Cabeceras comunes:

```
X-Frame-Options
Content-Security-Policy
Strict-Transport-Security
```

---

## 12. Logs

### Access log

Registra peticiones

### Error log

Registra fallos

Útiles para debugging y seguridad

---

## 13. Tipos de hosting

### Compartido

Muchos sitios en un mismo servidor

### VPS

Servidor virtual aislado

### Dedicado

Hardware exclusivo

### Cloud

Escalable bajo demanda

---

## 14. Stack comunes

### LAMP

Linux + Apache + MySQL + PHP

### LEMP

Linux + Nginx + MySQL + PHP

### Node stack

Nginx + Node.js

---

## 15. Despliegue básico

1. Apuntar dominio al servidor
2. Abrir puertos 80/443
3. Configurar virtual host
4. Instalar certificado TLS
5. Subir aplicación
6. Reiniciar servicio

---

## 16. Problemas comunes

### 502 Bad Gateway

Backend caído

### 504 Gateway Timeout

Backend lento

### 403 Forbidden

Permisos incorrectos

### 404 Not Found

Ruta inexistente

---

Fin de la documentación.
