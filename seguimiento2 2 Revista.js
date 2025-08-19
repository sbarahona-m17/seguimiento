let revista;
let tiempo;
let operador;
let costo = 0;

revista = prompt("¿A qué revista desea suscribirse? (Dinero, National Geographich, American Journal)");
tiempo = parseInt(prompt("Ingrese el tiempo de suscripción que desea (3, 6, 12) meses"));
operador = prompt("Ingrese el nombre de su operador de celuar");

if (revista.toLowerCase() === "dinero") {
    if (tiempo === 3) {
        costo = 6;
    } else if (tiempo === 6) {
        costo = 11;
    } else if (tiempo === 12) {
          costo = 20;
    }
} else if (revista.toLowerCase () === "national geographic") {
    if (tiempo === 3) {
        costo = 5;
    } else if (tiempo === 6) {
        costo = 9
    } else if (tiempo === 12) {
        costo = 17;
    }
} else if (revista.toLowerCase () === "american journal") {
    if (tiempo === 3) {
        costo = 7;
    } else if (tiempo === 6) {
        costo = 13;
    } else if (tiempo === 12) {
        costo = 24;
    }
}

if (operador.toLowerCase () === "claro") {
    costo = costo * 0.95;
}

console.log("El costo total de la suscripcción es: " + costo + " dólares")