let cedula = prompt("Ingrese su cédula:");
let monto = parseInt(prompt("Ingrese el monto de su compra:"));
let saldo = 100;
let puntosOtorgados = 0;

if (monto <= 100000) {
    puntosOtorgados = 100;
} else if (monto > 100000 && monto <= 500000) {
    puntosOtorgados = 250;
} else if (monto > 500000) {
    puntosOtorgados = 400;
}

saldo += puntosOtorgados;

console.log ("Cédula: " + cedula);
console.log ("Monto de compra: " + monto);
console.log ("Puntos otorgados: " + puntosOtorgados);
console.log ("Nuevo saldo: " + saldo);

if (saldo >= 500) {
    let descuento = monto * 0.20;
    console.log("¡Felicidades! Tienes un descuento pendiente de $" + descuento + " para tu próxima compra (20%)");
} else {
    let faltan = 500 - saldo;
    console.log("Sigue acumulando. Te faltan " + faltan + " puntos para llegar a 500");
}