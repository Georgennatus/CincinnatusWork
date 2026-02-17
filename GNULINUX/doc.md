# Documentación de Linux (Terminal Ubuntu)

Guía práctica enfocada en el uso real de la terminal Bash en Ubuntu. Incluye comandos esenciales, explicación conceptual y uso típico.

---

## 1. Conceptos básicos

### Terminal

Interfaz de texto que permite comunicarse con el sistema operativo mediante comandos.

### Shell

Programa que interpreta los comandos. En Ubuntu normalmente es **Bash**.

### Estructura general de un comando

```
comando [opciones] [argumentos]
```

Ejemplo:

```
ls -l /home
```

---

## 2. Navegación por el sistema de archivos

### Saber dónde estás

```
pwd
```

### Listar archivos

```
ls
ls -l
ls -a
ls -lh
```

### Cambiar de directorio

```
cd carpeta
cd ..
cd ~
cd /
cd -
```

---

## 3. Manipulación de archivos y carpetas

### Crear

```
touch archivo.txt
mkdir carpeta
mkdir -p ruta/completa/carpeta
```

### Copiar

```
cp archivo destino
cp -r carpeta destino
```

### Mover / Renombrar

```
mv archivo nuevo_nombre
mv archivo carpeta/
```

### Eliminar

```
rm archivo
rm -r carpeta
rm -rf carpeta
```

---

## 4. Visualización de contenido

### Mostrar contenido

```
cat archivo
less archivo
more archivo
```

### Ver inicio o final

```
head archivo
head -n 20 archivo

tail archivo
tail -n 20 archivo
tail -f archivo
```

---

## 5. Búsqueda

### Buscar archivos

```
find /ruta -name "archivo.txt"
find . -type f -name "*.png"
```

### Buscar texto dentro de archivos

```
grep "texto" archivo
grep -r "texto" carpeta
grep -i "texto" archivo
grep -n "texto" archivo
```

---

## 6. Permisos y propietarios

### Ver permisos

```
ls -l
```

### Cambiar permisos

```
chmod 755 archivo
chmod +x script.sh
chmod -w archivo
```

### Cambiar propietario

```
sudo chown usuario archivo
sudo chown usuario:grupo archivo
```

---

## 7. Procesos

### Ver procesos activos

```
ps
ps aux
```

### Monitor en tiempo real

```
top
htop
```

### Terminar procesos

```
kill PID
kill -9 PID
pkill nombre
```

---

## 8. Gestión de paquetes (APT)

### Actualizar repositorios

```
sudo apt update
```

### Actualizar sistema

```
sudo apt upgrade
```

### Instalar

```
sudo apt install paquete
```

### Eliminar

```
sudo apt remove paquete
sudo apt purge paquete
```

### Buscar paquetes

```
apt search nombre
apt show paquete
```

---

## 9. Usuarios y grupos

### Crear usuario

```
sudo adduser usuario
```

### Eliminar usuario

```
sudo deluser usuario
```

### Cambiar contraseña

```
passwd
sudo passwd usuario
```

### Grupos

```
groups
sudo usermod -aG grupo usuario
```

---

## 10. Red

### Ver IP

```
ip a
hostname -I
```

### Conectividad

```
ping direccion
```

### Puertos abiertos

```
ss -tulpn
netstat -tulpn
```

### Descargas

```
wget url
curl url
```

---

## 11. Disco y almacenamiento

### Espacio en disco

```
df -h
```

### Tamaño de carpetas

```
du -h carpeta
du -sh carpeta
```

### Montar unidades

```
lsblk
mount
umount
```

---

## 12. Redirecciones y tuberías

### Redirecciones

```
comando > archivo
comando >> archivo
comando < archivo
```

### Tuberías

```
comando1 | comando2
ls | grep txt
cat archivo | sort | uniq
```

---

## 13. Variables de entorno

### Ver variables

```
env
printenv
```

### Crear temporal

```
VAR=valor
```

### Exportar

```
export VAR=valor
```

### Permanentes

Editar:

```
~/.bashrc
```

---

## 14. Servicios (systemd)

### Estado

```
systemctl status servicio
```

### Iniciar / detener

```
sudo systemctl start servicio
sudo systemctl stop servicio
```

### Habilitar al arrancar

```
sudo systemctl enable servicio
sudo systemctl disable servicio
```

---

## 15. Tareas programadas (cron)

### Editar cron

```
crontab -e
```

Formato:

```
* * * * * comando
- - - - -
| | | | |
| | | | +---- día semana
| | | +------ mes
| | +-------- día mes
| +---------- hora
+------------ minuto
```

---

## 16. SSH

### Conectarse

```
ssh usuario@ip
```

### Copiar archivos

```
scp archivo usuario@ip:/ruta
scp usuario@ip:/ruta archivo
```

---

## 17. Compresión

### Tar

```
tar -cvf archivo.tar carpeta
tar -xvf archivo.tar
```

### Gzip

```
gzip archivo
gunzip archivo.gz
```

### Zip

```
zip -r archivo.zip carpeta
unzip archivo.zip
```

---

## 18. Scripts Bash

### Crear script

```
touch script.sh
chmod +x script.sh
```

### Cabecera

```
#!/bin/bash
```

### Variables

```
nombre="Geo"
echo $nombre
```

### Condicional

```
if [ $edad -gt 18 ]; then
  echo adulto
fi
```

### Bucle

```
for i in {1..5}; do
  echo $i
done
```

---

## 19. Ayuda integrada

```
man comando
comando --help
```

---

Fin de la documentación.
