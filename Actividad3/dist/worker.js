"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
function hilo() {
    try {
        const { nombre, numero } = worker_threads_1.workerData;
        // Validaciones
        if (typeof nombre !== "string") {
            throw new Error("El parámetro 'nombre' debe ser un string");
        }
        if (typeof numero !== "number") {
            throw new Error("El parámetro 'numero' debe ser un number");
        }
        console.log(`Hola ${nombre} 👋`);
        const resultado = numero * 2;
        worker_threads_1.parentPort?.postMessage({
            status: "success",
            data: resultado,
        });
    }
    catch (error) {
        // Manejo de errores
        worker_threads_1.parentPort?.postMessage({
            status: "error",
            message: error.message,
        });
    }
}
hilo();
