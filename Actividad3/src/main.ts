import { Worker } from "worker_threads";
import path from "path";

console.log("Inicio del hilo principal");

const worker = new Worker(
  path.resolve(__dirname, "worker.js"),
  {
    workerData: {
      nombre: "Mauricio",
      numero: 5
    }
  }
);

const workerE = new Worker(
  path.resolve(__dirname, "worker.js"),
  {
    workerData: {
      nombre: 2,
      numero: "Hola"
    }
  }
);

worker.on("message", (msg) => {
  console.log("Mensaje del worker 1:", msg);
});

workerE.on("message", (msg) => {
    console.log("Mensaje del worker 2:", msg)
})

worker.on("exit", () => {
  console.log("Worker 1 finalizado");
});

workerE.on("exit", () => {
    console.log("Worker 2 finalizado");
})

