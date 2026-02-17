# Sistemas Operativos 1 — Documentación

---

## 1. ¿Qué es un Sistema Operativo?

Un **Sistema Operativo (SO)** es el programa que administra el hardware y ofrece servicios a los programas.

Usuario → Aplicaciones → Sistema Operativo → Hardware

### Funciones principales
- Administrar CPU
- Administrar memoria
- Administrar archivos
- Administrar dispositivos
- Seguridad
- Multitarea

### Tipos de sistemas operativos
- Batch (por lotes)
- Tiempo compartido
- Tiempo real
- Distribuidos
- Multiprocesador

---

## 2. Estructura del Sistema Operativo

### Kernel
El núcleo del sistema. Controla todo el hardware y los recursos.

### Modos de ejecución
| Modo | Uso |
|----|----|
| Usuario | Programas |
| Kernel | Sistema operativo |

Las aplicaciones no pueden acceder al hardware directamente.

### Llamadas al sistema (syscalls)
Funciones para pedir servicios al SO:
- Abrir archivo
- Leer disco
- Crear proceso

---

## 3. Procesos

### ¿Qué es un proceso?
Un programa en ejecución: programa + memoria + estado + recursos

### Estados de un proceso
Nuevo → Listo → Ejecutando → Bloqueado → Terminado

### PCB — Process Control Block
Estructura donde el SO guarda:
- PID
- Registros CPU
- Memoria
- Archivos abiertos
- Estado

### Cambio de contexto
Guardar estado actual → Cargar estado nuevo → Continuar

---

## 4. Hilos (Threads)

| Proceso | Hilo |
|------|------|
| Memoria propia | Memoria compartida |
| Pesado | Ligero |
| Seguro | Rápido |

---

## 5. Planificación de CPU

### Objetivos
- Maximizar uso CPU
- Minimizar espera
- Ser justo

### Algoritmos
- FCFS
- SJF
- Round Robin
- Prioridades

---

## 6. Concurrencia y Sincronización

Problema: múltiples procesos acceden al mismo dato (condición de carrera)

### Sección crítica
Código donde se usa un recurso compartido

### Soluciones
**Mutex**: acceso exclusivo

**Semáforos**:
- wait()
- signal()

**Monitores**: sincronización de alto nivel

---

## 7. Deadlocks (Interbloqueos)

Procesos se bloquean mutuamente esperando recursos.

### Condiciones necesarias
1. Exclusión mutua
2. Retención y espera
3. No expropiación
4. Espera circular

### Soluciones
- Prevención
- Evitación (Algoritmo del banquero)
- Detección
- Recuperación

---

## 8. Administración de Memoria

El SO decide qué parte de RAM usa cada proceso.

### Técnicas
**Particiones**: memoria dividida

**Paginación**: páginas y marcos

**Segmentación**: memoria por secciones lógicas

**Memoria virtual**: usar disco como RAM

### Reemplazo de páginas
- FIFO
- LRU
- Óptimo

---

## 9. Sistemas de Archivos

Organizan datos en almacenamiento.

### Conceptos
- Archivo
- Directorio
- Permisos
- Metadatos

### Operaciones
- Crear
- Leer
- Escribir
- Borrar

### Métodos de asignación
- Contigua
- Enlazada
- Indexada

---

## 10. Entrada / Salida (I/O)

Comunicación con dispositivos.

### Métodos
- Programado
- Interrupciones
- DMA

### Drivers
Software que controla hardware

---

## 11. Almacenamiento secundario

Discos y SSD

### Planificación de disco
- FCFS
- SSTF
- SCAN

---

## 12. Protección y Seguridad

### Objetivos
- Confidencialidad
- Integridad
- Disponibilidad

### Mecanismos
- Usuarios
- Permisos
- Autenticación
- Control de acceso

---

## 13. Virtualización

Ejecutar múltiples sistemas en una máquina

