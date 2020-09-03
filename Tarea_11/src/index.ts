const parser = require('./Gramatica/gramatica');
import fs = require('fs');


const entrada = fs.readFileSync('./entrada.txt');
const resultado = parser.parse(entrada.toString());

//Se imprime el codigo resultante.
console.log(resultado.C3D);