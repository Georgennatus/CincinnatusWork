# JavaScript: desde lo básico hasta el DOM

> Esta es una **documentación práctica escrita en código JavaScript comentado**, pensada para aprender leyendo ejemplos reales. Va **desde fundamentos del lenguaje hasta manipulación del DOM**.

---

## 1. Variables y tipos de datos

```js
// Variables
var nombre = "Geo";      // ❌ vieja forma (scope global)
let edad = 20;            // ✅ variable mutable (scope de bloque)
const PI = 3.1416;        // ✅ constante (no reasignable)

// Tipos de datos primitivos
let texto = "Hola";      // string
let numero = 42;          // number
let decimal = 3.14;       // number
let activo = true;        // boolean
let indefinido;           // undefined
let nulo = null;          // null

// Tipo especial
let simbolo = Symbol("id");
```

---

## 2. Operadores

```js
// Aritméticos
let suma = 5 + 3;
let resta = 5 - 3;
let multi = 5 * 3;
let div = 5 / 3;
let modulo = 5 % 2;

// Comparación
5 == "5";   // true  (compara valor)
5 === "5";  // false (compara valor y tipo)
5 !== "5";  // true

// Lógicos
true && false; // AND
true || false; // OR
!true;         // NOT
```

---

## 3. Condicionales

```js
let edad = 18;

if (edad >= 18) {
  console.log("Mayor de edad");
} else if (edad >= 16) {
  console.log("Casi adulto");
} else {
  console.log("Menor de edad");
}

// Operador ternario
let mensaje = edad >= 18 ? "Adulto" : "Menor";
```

---

## 4. Bucles

```js
// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do while
do {
  console.log(i);
  i++;
} while (i < 5);
```

---

## 5. Funciones

```js
// Función clásica
function saludar(nombre) {
  return `Hola ${nombre}`;
}

// Función flecha
const saludarArrow = (nombre) => {
  return `Hola ${nombre}`;
};

// Retorno implícito
const sumar = (a, b) => a + b;
```

---

## 6. Arrays

```js
let numeros = [1, 2, 3, 4];

numeros.push(5);      // agrega al final
numeros.pop();        // elimina el último
numeros.shift();      // elimina el primero
numeros.unshift(0);   // agrega al inicio

// Recorrer arrays
numeros.forEach((num) => {
  console.log(num);
});

// Métodos importantes
let dobles = numeros.map(n => n * 2);
let pares = numeros.filter(n => n % 2 === 0);
let suma = numeros.reduce((acc, n) => acc + n, 0);
```

---

## 7. Objetos

```js
let persona = {
  nombre: "Geo",
  edad: 20,
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
};

// Acceso
persona.nombre;
persona["edad"];

// Modificar
persona.edad = 21;

// Desestructuración
const { nombre, edad } = persona;
```

---

## 8. Scope y Hoisting

```js
let global = "Soy global";

function ejemplo() {
  let local = "Soy local";
  console.log(global);
}

// Hoisting
console.log(x); // undefined
var x = 10;
```

---

## 9. JSON

```js
let objeto = { nombre: "Geo", edad: 20 };

// Convertir a JSON
let json = JSON.stringify(objeto);

// Convertir a objeto
let objetoNuevo = JSON.parse(json);
```

---

## 10. Manejo de errores

```js
try {
  let resultado = JSON.parse("{");
} catch (error) {
  console.error("Error:", error.message);
} finally {
  console.log("Fin del intento");
}
```

---

## 11. Asincronía

```js
// setTimeout
setTimeout(() => {
  console.log("Hola después de 1s");
}, 1000);

// Promesas
const promesa = new Promise((resolve, reject) => {
  resolve("Todo bien");
});

promesa.then(res => console.log(res));

// Async / Await
async function obtenerDatos() {
  try {
    let res = await fetch("https://api.example.com");
    let data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
```

---

## 12. Introducción al DOM

> El DOM (Document Object Model) representa el HTML como un árbol de nodos.

```html
<button id="btn">Click</button>
<p class="texto">Hola</p>
```

```js
// Selección de elementos
const boton = document.getElementById("btn");
const texto = document.querySelector(".texto");

// Cambiar contenido
texto.textContent = "Nuevo texto";
texto.innerHTML = "<strong>Texto en negrita</strong>";

// Estilos
texto.style.color = "red";
texto.style.fontSize = "20px";
```

---

## 13. Eventos del DOM

```js
boton.addEventListener("click", () => {
  console.log("Botón presionado");
});

// Evento con objeto event
boton.addEventListener("click", (event) => {
  console.log(event.target);
});
```

---

## 14. Crear y eliminar elementos

```js
// Crear elemento
const div = document.createElement("div");
div.textContent = "Soy nuevo";

// Agregar al DOM
document.body.appendChild(div);

// Eliminar
div.remove();
```

---

## 15. Manipular clases

```js
div.classList.add("activo");
div.classList.remove("activo");
div.classList.toggle("activo");
```

---

## 16. Formularios

```js
const input = document.querySelector("input");

input.addEventListener("input", () => {
  console.log(input.value);
});
```

---

## 17. Resumen mental

- JS controla **lógica**
- DOM controla **HTML y CSS**
- Eventos conectan usuario ↔ código

---

📌 **Siguiente pasos recomendados**:
- LocalStorage / SessionStorage
- Fetch API real
- Módulos (import / export)
- Clean Code y patrones

Si quieres, puedo:
- convertir esto en **chuleta rápida**
- adaptarlo a **nivel novato / intermedio / pro**
- o llevarlo a **JS moderno + proyectos reales**

