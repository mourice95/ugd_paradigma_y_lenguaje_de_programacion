/* 
    Para probar codigo ir al siguiente link: https://www.typescriptlang.org/es/play 
    Copiar y pegar este codigo
*/

class Persona {
  private nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años`;
  }
}

const persona1 = new Persona("Mauricio", 30);

console.log(persona1.saludar());