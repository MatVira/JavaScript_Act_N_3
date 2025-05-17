//Actividad 1: IF anidados - Clasificación de edades

// Crea un programa en un archivo .js externo
// que le pida al usuario (usando prompt) 
// su edad y muestre en la consola una 
// categoría según la siguiente tabla:

//Menor de 0: "Edad no válida"
//0 a 12 años: "Niño"
//13 a 17 años: "Adolescente"
//18 a 59 años: "Adulto"
//60 años o más: "Adulto mayor"


//Solicitar la edad25
const edad =prompt("Ingresa tu edad");


//Funcion if anidado para verificar su edad
if (edad <= 0) {
    console.log("Edad no válida");
} else if ( edad >= 1 && edad <=12 ){
    console.log("Niño");
} else if ( edad >= 13 && edad <=17 ){
    console.log("Adolecente");
} else if ( edad >= 18 && edad <=59 ){
    console.log("Adulto");
} else if (  edad >=60 ){
    console.log("Adulto mayor");
}

