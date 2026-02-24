# Documentación de Docker

Guía práctica para comprender y usar Docker para desarrollo, despliegue y aislamiento de aplicaciones.

---

## 1. ¿Qué es Docker?

Plataforma de contenedores que permite empaquetar aplicaciones con todas sus dependencias en entornos aislados y reproducibles.

Ventajas:
- Funciona igual en cualquier máquina
- Aísla dependencias
- Despliegue rápido
- Ligero comparado con máquinas virtuales

---

## 2. Conceptos fundamentales

### Imagen
Plantilla inmutable que contiene sistema base + app + dependencias.

### Contenedor
Instancia en ejecución de una imagen.

### Registro (Registry)
Repositorio donde se almacenan imágenes.

### Volumen
Almacenamiento persistente fuera del contenedor.

### Red
Comunicación entre contenedores.

---

## 3. Ciclo básico de uso

1. Crear Dockerfile
2. Construir imagen
3. Ejecutar contenedor
4. Exponer puertos
5. Persistir datos

---

## 4. Comandos básicos

### Verificar instalación
```
docker --version
```

### Descargar imagen
```
docker pull imagen
```

### Listar imágenes
```
docker images
```

### Ejecutar contenedor
```
docker run imagen
```

### Ejecutar en segundo plano
```
docker run -d imagen
```

### Mapear puertos
```
docker run -p 80:80 imagen
```

### Nombrar contenedor
```
docker run --name miapp imagen
```

---

## 5. Gestión de contenedores

### Ver activos
```
docker ps
```

### Ver todos
```
docker ps -a
```

### Detener
```
docker stop contenedor
```

### Iniciar
```
docker start contenedor
```

### Eliminar
```
docker rm contenedor
```

### Logs
```
docker logs contenedor
```

### Acceder a consola
```
docker exec -it contenedor bash
```

---

## 6. Construcción de imágenes

### Dockerfile básico
```
FROM node:20
WORKDIR /app
COPY . .
RUN npm install
CMD ["node","server.js"]
```

### Construir
```
docker build -t miimagen .
```

---

## 7. Volúmenes

Persisten datos aunque el contenedor se elimine.

### Crear volumen
```
docker volume create datos
```

### Usar volumen
```
docker run -v datos:/var/lib/mysql mysql
```

### Bind mount
```
docker run -v $(pwd):/app imagen
```

---

## 8. Redes

### Crear red
```
docker network create redapp
```

### Ejecutar en red
```
docker run --network redapp app
```

Los contenedores pueden comunicarse por nombre.

---

## 9. Variables de entorno

```
docker run -e NODE_ENV=production app
```

Archivo:
```
--env-file .env
```

---

## 10. Docker Compose

Permite ejecutar múltiples servicios.

### docker-compose.yml
```
services:
  web:
    build: .
    ports:
      - "80:3000"
  db:
    image: mysql
    volumes:
      - datos:/var/lib/mysql

volumes:
  datos:
```

### Ejecutar
```
docker compose up -d
```

### Detener
```
docker compose down
```

---

## 11. Publicar imágenes

### Login
```
docker login
```

### Etiquetar
```
docker tag miimagen usuario/miimagen
```

### Subir
```
docker push usuario/miimagen
```

---

## 12. Flujo típico de desarrollo

1. Escribir código
2. Construir imagen
3. Probar localmente
4. Subir al registry
5. Desplegar en servidor

---

## 13. Problemas comunes

### Puerto ocupado
Cambiar mapeo de puertos

### Permisos en volúmenes
Ajustar UID/GID

### Cambios no reflejados
Reconstruir imagen
```
docker compose up --build
```

### Contenedor se detiene
Revisar logs
```
docker logs contenedor
```

---

## 14. Seguridad básica

- No usar root dentro del contenedor
- Usar imágenes oficiales
- Mantener imágenes actualizadas
- Limitar puertos expuestos

---

## 15. Buenas prácticas

- Una app por contenedor
- Usar variables de entorno
- Persistir bases de datos en volúmenes
- Usar compose para desarrollo
- Mantener imágenes pequeñas

---

Fin de la documentación.

