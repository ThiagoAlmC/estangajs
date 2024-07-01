import Calculadora from './calculadora.js';

const calc = new Calculadora();

const resultadoMultiplicacion = calc.multiplicar(6, 4);
const resultadoDivision = calc.dividir(20, 4);

console.log(`Resultado de la multiplicación: ${resultadoMultiplicacion}`); // Resultado de la multiplicación: 24
console.log(`Resultado de la división: ${resultadoDivision}`); // Resultado de la división: 5
