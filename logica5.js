//Debe pedirle al usuario que intente adivinar el número secreto por prompt o por input, dicho número será del 1 al 100     
// Generar un número secreto aleatorio del 1 al 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = [];
let adivinado = false;

while (!adivinado) {
    // Solicitar un número al usuario
    let entrada = prompt("Adivina el número secreto (del 1 al 100):");

    // Verificar si la entrada es un número
    let numeroIngresado = Number(entrada);
    
    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100) {
        console.log("Error: Por favor, introduce un número válido entre 1 y 100.");
        continue; // Volver a solicitar la entrada
    }

    // Agregar el intento a la lista de intentos
    intentos.push(numeroIngresado);

    // Comparar el número ingresado con el número secreto
    if (numeroIngresado === numeroSecreto) {
        adivinado = true;
        console.log("Felicidades, adivinaste el número secreto.");
        console.log("Lista de números introducidos: ", intentos);
    } else {
        console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
    }
}
