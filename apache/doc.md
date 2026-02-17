# Documentación de Apache HTTP Server

Guía práctica para comprender, configurar y usar Apache como servidor web en entornos reales de hosting y despliegue.

---

## 1. ¿Qué es Apache?

Servidor web modular ampliamente utilizado para servir contenido web y ejecutar aplicaciones dinámicas.

Características:

* Basado en módulos
* Compatible con .htaccess
* Muy configurable
* Amplio soporte en hosting compartido

Usos comunes:

* Sitios web PHP
* CMS (WordPress, Joomla, Drupal)
* APIs
* Servidor de archivos

---

## 2. Arquitectura

Apache puede funcionar con distintos MPM (Multi‑Processing Module):

### prefork

Un proceso por conexión
Más estable para PHP clásico
Mayor consumo de RAM

### worker

Multihilo
Mejor rendimiento

### event

Optimizado para alta concurrencia
Recomendado actualmente

---

## 3. Archivos importantes

Configuración principal:

```
/etc/apache2/apache2.conf
```

Puertos:

```
/etc/apache2/ports.conf
```

Sitios:

```
/etc/apache2/sites-available/
/etc/apache2/sites-enabled/
```

Módulos:

```
/etc/apache2/mods-available/
/etc/apache2/mods-enabled/
```

Logs:

```
/var/log/apache2/access.log
/var/log/apache2/error.log
```

---

## 4. Virtual Hosts

Permiten alojar múltiples dominios en el mismo servidor.

Ejemplo:

```
<VirtualHost *:80>
    ServerName midominio.com
    DocumentRoot /var/www/misitio
</VirtualHost>
```

Activar sitio:

```
a2ensite misitio.conf
systemctl reload apache2
```

---

## 5. Directorios y permisos

```
<Directory /var/www/misitio>
    Options Indexes FollowSymLinks
    AllowOverride All
    Require all granted
</Directory>
```

AllowOverride permite usar .htaccess

---

## 6. .htaccess

Archivo de configuración local por carpeta.

Ejemplo redirección:

```
RewriteEngine On
RewriteRule ^(.*)$ index.php [L]
```

Ejemplo proteger carpeta:

```
AuthType Basic
AuthName "Privado"
Require valid-user
```

---

## 7. Módulos importantes

Activar módulo:

```
a2enmod nombre
systemctl restart apache2
```

Comunes:

* rewrite → URLs amigables
* ssl → HTTPS
* headers → cabeceras seguridad
* proxy → reverse proxy
* proxy_fcgi → PHP‑FPM

---

## 8. PHP con Apache

### Mod PHP (antiguo)

PHP integrado en Apache

### PHP‑FPM (recomendado)

Apache actúa como proxy

```
<FilesMatch \.php$>
    SetHandler "proxy:unix:/run/php/php8.2-fpm.sock|fcgi://localhost/"
</FilesMatch>
```

---

## 9. HTTPS (SSL/TLS)

```
<VirtualHost *:443>
    ServerName midominio.com

    SSLEngine on
    SSLCertificateFile /etc/ssl/cert.pem
    SSLCertificateKeyFile /etc/ssl/key.pem
</VirtualHost>
```

Redirección:

```
<VirtualHost *:80>
    Redirect / https://midominio.com/
</VirtualHost>
```

---

## 10. Reverse Proxy

```
ProxyPass / http://127.0.0.1:3000/
ProxyPassReverse / http://127.0.0.1:3000/
```

---

## 11. Rendimiento

### Compresión

```
AddOutputFilterByType DEFLATE text/html text/css application/javascript
```

### Cache

```
CacheEnable disk /
```

### KeepAlive

```
KeepAlive On
MaxKeepAliveRequests 100
```

---

## 12. Seguridad

Ocultar versión:

```
ServerTokens Prod
ServerSignature Off
```

Bloquear métodos:

```
<LimitExcept GET POST>
    Require all denied
</LimitExcept>
```

Cabeceras:

```
Header always set X-Frame-Options SAMEORIGIN
Header always set X-Content-Type-Options nosniff
```

---

## 13. Logs

Access log → peticiones
Error log → fallos

Formato personalizado:

```
LogFormat "%h %l %u %t \"%r\" %>s %b" custom
CustomLog logs/access.log custom
```

---

## 14. Comandos útiles

Probar config:

```
apachectl configtest
```

Reiniciar:

```
systemctl restart apache2
```

Recargar:

```
systemctl reload apache2
```

Estado:

```
systemctl status apache2
```

---

## 15. Errores comunes

### 403 Forbidden

Permisos o Directory mal configurado

### 404 Not Found

DocumentRoot incorrecto

### 500 Internal Server Error

Error en .htaccess o módulos

### 503 Service Unavailable

Backend o PHP‑FPM caído

---

## 16. Flujo de una petición

1. Cliente solicita recurso
2. Apache evalúa VirtualHost
3. Aplica reglas .htaccess
4. Ejecuta módulo (PHP/proxy/archivo)
5. Devuelve respuesta

---

Fin de la documentación.
