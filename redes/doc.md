# Documentación de Redes Informáticas

Guía práctica para comprender redes, protocolos y conceptos fundamentales orientados a uso real en sistemas Linux y servidores.

---

## 1. Conceptos básicos

### Red informática

Conjunto de dispositivos conectados que comparten información mediante reglas llamadas protocolos.

### Nodo

Cualquier dispositivo conectado: PC, servidor, router, impresora, móvil, IoT.

### Paquete

Unidad de datos enviada a través de la red.

### Ancho de banda

Cantidad máxima de datos transmitidos por segundo (Mbps / Gbps).

### Latencia

Tiempo que tarda un paquete en llegar al destino (ms).

---

## 2. Modelos de red

### Modelo OSI (7 capas)

1. Física → cables, señales
2. Enlace → MAC, switches
3. Red → IP, routers
4. Transporte → TCP / UDP
5. Sesión → conexión entre hosts
6. Presentación → cifrado / formato
7. Aplicación → HTTP, FTP, DNS

### Modelo TCP/IP (real)

1. Acceso a red
2. Internet
3. Transporte
4. Aplicación

---

## 3. Direccionamiento IP

### IPv4

Formato:

```
192.168.1.10
```

32 bits → 4 octetos (0–255)

### IPv6

Formato:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

128 bits → reemplaza IPv4

### Tipos de IP

* Pública → visible en internet
* Privada → red local
* Estática → fija
* Dinámica → asignada por DHCP

### Rangos privados IPv4

```
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16
```

---

## 4. Máscara de red y subredes

Define qué parte es red y qué parte host.

Ejemplo:

```
IP: 192.168.1.10
Mascara: 255.255.255.0 (/24)
```

Significa:

* Red → 192.168.1.0
* Hosts → 192.168.1.1 – 192.168.1.254
* Broadcast → 192.168.1.255

---

## 5. Puertos

Identifican servicios dentro de un equipo.

Rangos:

* 0–1023 → conocidos
* 1024–49151 → registrados
* 49152–65535 → dinámicos

Ejemplos:

```
80   HTTP
443  HTTPS
22   SSH
21   FTP
25   SMTP
53   DNS
3306 MySQL
```

---

## 6. Protocolos principales

### Capa Red

#### ARP

Obtiene la dirección MAC a partir de una IP dentro de la red local.

#### IP

Encargado de direccionar paquetes entre redes.

#### ICMP

Diagnóstico y control (ping, errores de red).

---

### Capa Transporte

#### TCP

* Orientado a conexión
* Fiable
* Ordena paquetes
* Más lento

Usos: web, ssh, correo

#### UDP

* No orientado a conexión
* Rápido
* Sin confirmación

Usos: streaming, juegos, DNS

---

### Capa Aplicación

#### HTTP / HTTPS

Transferencia de páginas web
HTTPS usa TLS para cifrado

#### DNS

Convierte dominios en IP

#### DHCP

Asigna IP automáticamente

#### FTP

Transferencia de archivos

#### SMTP

Envío de correo

#### POP3 / IMAP

Recepción de correo

#### SSH

Acceso remoto seguro

---

## 7. Dispositivos de red

### Router

Conecta redes distintas y enruta paquetes.

### Switch

Conecta dispositivos dentro de una LAN mediante MAC.

### Access Point

Proporciona red inalámbrica.

### Firewall

Filtra tráfico según reglas.

---

## 8. NAT (Network Address Translation)

Permite que múltiples dispositivos privados compartan una IP pública.

Tipos:

* SNAT
* DNAT
* PAT (NAT sobrecargado)

---

## 9. VLAN

Segmenta una red física en varias redes lógicas aisladas.

Ventajas:

* Seguridad
* Organización
* Reducción de broadcast

---

## 10. Wi‑Fi conceptos

Bandas:

* 2.4 GHz → mayor alcance
* 5 GHz → mayor velocidad

Seguridad:

* WPA2
* WPA3

---

## 11. Seguridad en red

### TLS/SSL

Cifrado de comunicaciones

### VPN

Túnel seguro sobre internet

### IDS / IPS

Detecta o bloquea intrusiones

### Buenas prácticas

* No exponer puertos innecesarios
* Usar firewall
* Actualizar servicios
* Usar claves fuertes

---

## 12. Herramientas de red en Linux

### Información de red

```
ip a
ip r
```

### Conectividad

```
ping host
traceroute host
```

### DNS

```
dig dominio
nslookup dominio
```

### Puertos

```
ss -tulpn
lsof -i
```

### Captura de paquetes

```
tcpdump -i interfaz
```

### Escaneo

```
nmap host
```

---

## 13. Flujo típico de una conexión web

1. Cliente pide dominio al DNS
2. DNS responde IP
3. Cliente abre TCP
4. Se negocia TLS
5. Servidor responde HTTP
6. Se transfieren datos

---

## 14. Conceptos importantes para desarrollo

* CORS
* Cookies y sesiones
* WebSockets
* Load balancers
* Reverse proxy
* Cache

---

Fin de la documentación.
