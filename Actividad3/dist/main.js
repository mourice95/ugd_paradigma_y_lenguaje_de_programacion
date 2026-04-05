"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const path_1 = __importDefault(require("path"));
console.log("Inicio del hilo principal");
const worker = new worker_threads_1.Worker(path_1.default.resolve(__dirname, "worker.js"), {
    workerData: {
        nombre: "Mauricio",
        numero: 5
    }
});
const workerE = new worker_threads_1.Worker(path_1.default.resolve(__dirname, "worker.js"), {
    workerData: {
        nombre: 2,
        numero: "Hola"
    }
});
worker.on("message", (msg) => {
    console.log("Mensaje del worker 1:", msg);
});
workerE.on("message", (msg) => {
    console.log("Mensaje del worker 2:", msg);
});
worker.on("exit", () => {
    console.log("Worker 1 finalizado");
});
workerE.on("exit", () => {
    console.log("Worker 2 finalizado");
});
