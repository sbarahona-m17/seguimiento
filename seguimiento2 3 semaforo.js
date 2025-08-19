let estado;
let color;

estado = prompt("¿El semáforo está encendido o apagado?");

if (estado.toLowerCase() === "apagado") {
    console.log ("Semáforo apagado");
} else if (estado.toLowerCase() === "encendido") {
    color = prompt("¿De qué color está el semáforo? (verde, amarillo, rojo)");

    if (color.toLowerCase() === "verde"){
        console.log ("Puede avanzar");
    } else if (color.toLowerCase() === "amarillo") {
        console.log ("Precaución");
    } else if (color.toLowerCase() === "rojo") {
        console.log ("Deténgase")
    } else {
        console.log ("Fallo en el dispositivo");
    }
} 