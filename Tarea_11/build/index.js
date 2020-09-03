"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser = require('./Gramatica/gramatica');
var fs = require("fs");
var entrada = fs.readFileSync('./entrada.txt');
var resultado = parser.parse(entrada.toString());
//Se imprime el codigo resultante.
console.log(resultado.C3D);
