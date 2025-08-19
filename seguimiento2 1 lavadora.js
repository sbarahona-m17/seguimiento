let horasLavadoraPequeña;
let horasLavadoraGrande;
let totalHoras;
let total;

const tarifaLavadoraPequeña = 3000;
const tarifaLavadoraGrande = 4000;

horasLavadoraPequeña = parseInt(prompt("¿Cuántas horas va a alquilar la lavadora pequeña?"));
horasLavadoraGrande = parseInt (prompt("¿Cuántas horas va a alquilar la lavadora grande?"));

if (isNaN(horasLavadoraPequeña)) horasLavadoraPequeña = 0;
if (isNaN(horasLavadoraGrande)) horasLavadoraGrande = 0;

totalHoras = horasLavadoraPequeña + horasLavadoraGrande;
total = (horasLavadoraPequeña * tarifaLavadoraPequeña) + (horasLavadoraGrande * tarifaLavadoraGrande);

if (totalHoras > 10) {
    total *= 0.97;
} else {
    total = total;
}

console.log ("Total a pagar:" + total + " pesos");
