"use strict";
var parser = require('./Gramatica/gramatica');
var entrada = "10+8*3/(4-2)";
var ast = parser.parse(entrada);
var resultado = ast.ejecutar();
console.log(resultado.cd3);
