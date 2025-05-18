// Actividad 2: FOR - Tabla de multiplicar

// Enunciado:
// Crea un programa en un archivo .js externo que muestre la tabla de multiplicar 
// el número que el usuario escriba, desde el 1 hasta el 12. Usa un bucle for.

//Ejemplo de salida si el usuario escribe 5:

//5 x 1 = 5 

//5 x 2 = 10 

//... ...........

//5 x 12 = 60


//Solicitar el numero
let numero = prompt('Escribe un número del 1 al 12: ');


//fucuncion if para verificar que el número este dentro del rango
if ((numero >= 0 && numero <= 12)){
    // blucle for para recorrer los numeros del 1 al 12
    for (let i = 1; i <= 12; i++) {
        console.log(numero + ' x ' + i + ' = ' + (numero * i));
    }
} else {
    console.log('Escribe número del 1 al 12');
}