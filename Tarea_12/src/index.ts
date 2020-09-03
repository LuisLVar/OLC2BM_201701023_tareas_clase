const parser = require('./Gramatica/gramatica');

let entrada = "10+8*3/(4-2)"
const ast = parser.parse(entrada);

let resultado = ast.ejecutar();

console.log(resultado.cd3);
