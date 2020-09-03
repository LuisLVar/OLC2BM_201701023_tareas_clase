# Tarea 12
Escriba un esquema de traducción dirigido por la sintaxis posfijo, para un analizador ascendente que reciba como entrada una expresión aritmética (*,+,-,/ y paréntesis) y genere a traves del recorrido de un AST construido el codigo de tres direcciones.


## Entrada:
10+8*3/(4-2)

## Salida:
T1=8*3;

T2=4-2;

T3=T1/T2;

T4=10+T3;
