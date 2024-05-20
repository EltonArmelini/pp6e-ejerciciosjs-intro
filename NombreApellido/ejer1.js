// installar prompt: npm install prompt-sync
// usar prompt
const prompt = require('prompt-sync')();
const PI =  3.14159; 
let radio = prompt("Ingrese el radio del Circulo: ",1);
let area = calcularArea(radio);

console.log("El area es: ",area);

function calcularArea(r){
    return PI *(r * r);
}