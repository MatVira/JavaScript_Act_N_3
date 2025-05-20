//Actividad 3: IF + FOR - Tablas pares o impares

//Enunciado:
//Crea un programa en un archivo .js externo que le pida al usuario si
// quiere ver las tablas de multiplicar de números pares o impares entre 1 y 10.
//Usa if para decidir qué tipo mostrar,
//y for para imprimir las tablas del 1 al 10 según lo que el usuario elija.

//Ejemplo:

//Si el usuario escribe "pares", mostrar tablas del 2, 4, 6, 8, 10.
//Si el usuario escribe "impares", mostrar tablas del 1, 3, 5, 7, 9.


//Solicitamos si el usuario quiere ver la tabla par o impar
const solicitar = prompt("¿Quieres ver la tabla de pares o impares?:")

//fucuncion if para verificar si son pares o impares
if (solicitar === "pares") {
    for ( let i = 2; i <= 10; i += 2){
        console.log("Numeros pares: " + i);
    }
} else if (solicitar ==="impares") {
    for (let i = 3; i <= 9; i += 2) {
        console.log("Numeros impares: " + i);
    }
} else {
    console.log ("Solo puede escribir la parabra ( pares o impares)")
}