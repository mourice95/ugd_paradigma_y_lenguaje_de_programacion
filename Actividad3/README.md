## Requisitos

Antes de comenzar, asegurate de tener instalado:

* Node.js (versión 18 o superior recomendada)
* npm (incluido con Node)

---

## Instalación

Clonar el repositorio o copiar los archivos del proyecto y luego ejecutar:

```bash
npm install
```

Esto instalará las dependencias necesarias:

* typescript
* @types/node

---

## Compilar el proyecto

TypeScript necesita compilarse a JavaScript antes de ejecutarse.

Ejecutar:

```bash
npm run build
```

Esto generará la carpeta `dist/` con los archivos compilados.

---

## Ejecutar el proyecto

Una vez compilado:

```bash
npm start
```

---

## Flujo de trabajo (IMPORTANTE)

Cada vez que hagas cambios en archivos `.ts`:

1. Volver a compilar:

```bash
npm run build
```

2. Ejecutar nuevamente:

```bash
npm start
```

---

## Estructura del proyecto

```
src/
├── main.ts      # Hilo principal
└── worker.ts    # Hilo secundario (Worker)

dist/
├── main.js
└── worker.js
```

---

## Conceptos utilizados

* Concurrencia (Async / Event Loop)
* Paralelismo (Worker Threads)
* Comunicación entre hilos (`postMessage`)
* Manejo de eventos (`worker.on`)

---

## Notas importantes

* Los archivos `.ts` no se ejecutan directamente → deben compilarse
* El worker siempre debe apuntar al archivo `.js` en `dist/`
* Los hilos no comparten memoria → se comunican por mensajes

---

## Ejemplo de salida esperada

```
Inicio del hilo principal
Mensaje del worker 2: {
  status: 'error',
  message: "El parámetro 'nombre' debe ser un string"
}
Worker 2 finalizado
Hola Mauricio 👋
Mensaje del worker 1: { status: 'success', data: 10 }
Worker 1 finalizado
```