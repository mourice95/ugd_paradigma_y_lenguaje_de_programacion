import { parentPort, workerData } from "worker_threads";

function hilo() {
  try {
    const { nombre, numero } = workerData;

    // Validaciones
    if (typeof nombre !== "string") {
      throw new Error("El parámetro 'nombre' debe ser un string");
    }

    if (typeof numero !== "number") {
      throw new Error("El parámetro 'numero' debe ser un number");
    }

    console.log(`Hola ${nombre} 👋`);

    const resultado = numero * 2;

    parentPort?.postMessage({
      status: "success",
      data: resultado,
    });

  } catch (error: any) {
    // Manejo de errores
    parentPort?.postMessage({
      status: "error",
      message: error.message,
    });
  }
}

hilo();