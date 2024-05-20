const prompt = require("prompt-sync")();
const persona = {
  nombre: prompt("Ingrese nombre:", null),
  apellido: prompt("Ingrese apellido:", null),
  anionacimiento: prompt("Ingrese año de nacimiento:", null),
  edad: function calcularEdad() {
    this.edad = 2024 - this.anionacimiento;
  }
};
persona.edad();

console.log("Datos de la Persona: ", persona);
