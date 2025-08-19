let codigo;
let letra;

codigo = prompt("Ingrese su código alfanumérico (ej: O12345, T67890)");

codigo = codigo.toUpperCase();

if (codigo.length === 6 && isNaN(codigo[0]) && !isNaN(codigo.substring(1))) {

    let letra = codigo [0];

    if (letra === "O") {
        console.log("Bienvenido, dirijase a la zona Oriental");
    } else if (letra === "T") {
        console.log("Bienvenido, dirijase a la zona occidental");
    } else if (letra === "S") {
        console.log("Bienvenido, dirijase a la zona sur");
    } else if (letra === "N") {
        console.log("Bienvenido, dirijase a la zona norte");
    } else {
        console.log("Código inválido. Por favor verifique e intente nuevamente");
    }
} else {
    console.log("Código inválido. Por favor verifique e intente nuevamente");
}