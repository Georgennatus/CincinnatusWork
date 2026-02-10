# 🐍 Pythonazo — Documentación completa para humanos

Esta guía está pensada **para entender Python sin sufrir**. Desde lo básico hasta cosas más serias. Léela en orden o salta como loco.

---

## 1. ¿Qué es Python?

Python es un **lenguaje de programación interpretado**, de **alto nivel** y **tipado dinámico**.

* *Interpretado*: no se compila a binario, se ejecuta línea por línea.
* *Alto nivel*: se acerca más al lenguaje humano que al de la máquina.
* *Tipado dinámico*: no necesitas declarar tipos, pero siguen existiendo internamente.

Se usa mucho en backend porque **permite crear APIs y servicios rápido y de forma mantenible**.

Python es un **lenguaje de programación interpretado**, de **alto nivel**, muy legible y usado para:

* Desarrollo web 🌐
* Automatización 🤖
* Ciencia de datos 📊
* Inteligencia artificial 🧠
* Videojuegos 🎮
* Scripts rápidos ⚡

👉 Su filosofía: *menos código, más claridad*.

---

## 2. Instalar Python

* Descárgalo de: [https://www.python.org](https://www.python.org)
* Marca la opción **"Add Python to PATH"** al instalar

Verifica:

```bash
python --version
```

---

## 3. Primer programa

```python
print("Hola mundo")
```

* `print()` → muestra texto en consola
* Todo lo que esté entre comillas es texto (string)

---

## 4. Variables (guardar cosas)

```python
edad = 20
nombre = "Geo"
altura = 1.75
```

* Python **no necesita tipos explícitos**
* El tipo se infiere solo

Tipos básicos:

* `int` → números enteros
* `float` → decimales
* `str` → texto
* `bool` → `True` / `False`

---

## 5. Operadores

### Matemáticos

```python
+  -  *  /  //  %  **
```

```python
5 // 2   # división entera → 2
5 % 2    # residuo → 1
2 ** 3   # potencia → 8
```

### Comparación

```python
==  !=  >  <  >=  <=
```

### Lógicos

```python
and  or  not
```

---

## 6. Condicionales (if)

Los condicionales permiten **ejecutar código solo si se cumple una condición lógica**.

* `if` → condición principal
* `elif` → condición alternativa
* `else` → caso por defecto

```python
edad = 18

if edad >= 18:
    print("Eres mayor")
elif edad == 17:
    print("Casi")
else:
    print("Menor")
```

⚠️ **La indentación es ley** (espacios, no llaves)

---

## 7. Bucles (loops)

Los bucles permiten **repetir código múltiples veces**.

* `while` → repite mientras una condición sea verdadera
* `for` → itera sobre secuencias (listas, rangos, strings)

### while

```python
i = 0
while i < 5:
    print(i)
    i += 1
```

### for

```python
for i in range(5):
    print(i)
```

* `range(5)` → 0 a 4

---

## 8. Listas (arrays)

```python
numeros = [1, 2, 3, 4]
```

Acceso:

```python
numeros[0]   # 1
numeros[-1]  # último
```

Métodos útiles:

```python
append()
remove()
pop()
len()
```

---

## 9. Tuplas

```python
tupla = (1, 2, 3)
```

* Son **inmutables** (no se cambian)
* Más rápidas que listas

---

## 10. Diccionarios (JSON vibes)

```python
persona = {
    "nombre": "Geo",
    "edad": 20
}
```

Acceso:

```python
persona["nombre"]
persona.get("edad")
```

---

## 11. Sets

```python
numeros = {1, 2, 3}
```

* No duplicados
* Sin orden

---

## 12. Funciones

Las funciones permiten **encapsular lógica**, reutilizar código y organizar mejor un proyecto backend.

* Reducen duplicación
* Mejoran legibilidad
* Facilitan testing

```python
def saludar(nombre):
    return f"Hola {nombre}"
```

* `def` define
* `return` devuelve

---

## 13. Argumentos

```python
def suma(a, b=0):
    return a + b
```

* `b=0` es valor por defecto

---

## 14. Clases y Objetos (POO)

La Programación Orientada a Objetos permite **modelar entidades del sistema**.

En backend se usan para:

* Modelos de datos
* Servicios
* Lógica de negocio

```python
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def saludar(self):
        print(f"Hola, soy {self.nombre}")
```

```python
p = Persona("Geo")
p.saludar()
```

---

## 15. Herencia

```python
class Estudiante(Persona):
    pass
```

---

## 16. Módulos

Los módulos permiten **dividir el proyecto en archivos reutilizables**.

* Evitan archivos gigantes
* Mejoran mantenibilidad
* Facilitan trabajo en equipo

```python
import math
math.sqrt(9)
```

```python
from math import sqrt
```

---

## 17. Manejo de errores

```python
try:
    x = int("a")
except ValueError:
    print("Error")
finally:
    print("Fin")
```

---

## 18. Archivos

```python
with open("archivo.txt", "r") as f:
    contenido = f.read()
```

Modos:

* `r` leer
* `w` escribir
* `a` agregar

---

## 19. List Comprehension (god mode)

```python
cuadrados = [x**2 for x in range(5)]
```

---

## 20. Virtual Environments

```bash
python -m venv venv
source venv/bin/activate
```

---

## 21. Pip (instalar librerías)

```bash
pip install requests
```

---

## 22. Python para Backend / Web

Python es **uno de los lenguajes más usados en backend** por su velocidad de desarrollo y ecosistema.

### Frameworks principales

#### Flask (micro‑framework)

* Ligero
* Ideal para APIs y proyectos pequeños/medianos

```python
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({"status": "ok"})

app.run(debug=True)
```

#### Django (framework completo)

Incluye:

* ORM
* Autenticación
* Panel admin
* Seguridad

```bash
django-admin startproject mysite
```

```python
# views.py
from django.http import JsonResponse

def home(request):
    return JsonResponse({"hello": "world"})
```

#### FastAPI (moderno y rápido)

* Tipado fuerte
* Ideal para APIs REST
* Documentación automática

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"status": "ok"}
```

---

## 23. HTTP y APIs REST

HTTP es el protocolo que permite la **comunicación entre cliente y servidor**.

Una API REST expone endpoints para que otros sistemas consuman datos.

* Stateless (sin estado)
* Basado en recursos
* Usa JSON normalmente

Conceptos clave:

* GET → obtener datos
* POST → crear
* PUT / PATCH → actualizar
* DELETE → borrar

Ejemplo simple:

```python
@app.post("/users")
def create_user(user: dict):
    return user
```

---

## 24. JSON y Serialización

```python
import json

data = {"name": "Geo", "age": 20}
json_string = json.dumps(data)
json_dict = json.loads(json_string)
```

---

## 25. Bases de Datos

Las bases de datos permiten **persistir información** del backend.

* SQL → datos estructurados y relaciones
* ORM → trabajar con la BD usando objetos Python

### SQL (PostgreSQL / MySQL / SQLite)

```python
import sqlite3

conn = sqlite3.connect("db.sqlite")
cursor = conn.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER, name TEXT)")
conn.commit()
```

### ORM (SQLAlchemy)

```python
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    name = Column(String)
```

---

## 26. Autenticación

La autenticación permite **identificar usuarios**.

* Sessions → estado en servidor
* Tokens → estado en cliente
* JWT → estándar moderno para APIs

Conceptos:

* Sessions
* Tokens
* JWT

```python
import jwt

payload = {"user_id": 1}
token = jwt.encode(payload, "secret", algorithm="HS256")
```

---

## 27. Middlewares

```python
@app.middleware("http")
async def log_requests(request, call_next):
    response = await call_next(request)
    return response
```

---

## 28. Seguridad Backend

* Hash de contraseñas
* Validación de datos
* Protección CSRF

```python
from passlib.hash import bcrypt

hashed = bcrypt.hash("password")
bcrypt.verify("password", hashed)
```

---

## 29. Async y Concurrencia

Permite manejar **muchas solicitudes al mismo tiempo** sin bloquear el servidor.

* Ideal para APIs con alto tráfico
* Reduce consumo de recursos

```python
import asyncio

async def task():
    await asyncio.sleep(1)

asyncio.run(task())
```

---

## 30. Testing

```python
def test_sum():
    assert 2 + 2 == 4
```

```bash
pytest
```

---

## 31. Deploy

Opciones comunes:

* Docker
* Nginx + Gunicorn
* Railway / Render / Vercel (APIs)

```bash
docker build .
```

---

## 32. Buenas prácticas

* Estructura por módulos
* Variables de entorno
* Logs
* Tipado con `typing`

```python
from typing import List

def users(names: List[str]) -> int:
    return len(names)
```

---

