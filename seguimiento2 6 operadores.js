let operador = prompt("Ingrese el operador (Claro, Tigo, Movistar):").toLowerCase();
let tipo = prompt ("¿Desea hacer recarga o comprar un paquete?").toLowerCase();

if (tipo === "recarga") {
    let monto = parseInt(prompt("Ingrese el monto de la recarga:"));
    if (monto > 10000) {
        console.log("Recarga exitosa");
        console.log("Operado: " + operador);
        console.log("Tipo: Recarga");
        console.log("Monto: $" + monto);
    } else {
        console.log("Error: El monto debe ser mayor a 10000");
    }
} else if (tipo === "paquete") {
    if (operador === "movistar") {
        console.log("Paquetes suspendido para Movistar. Intente con recarga");
    } else {
        let paquete = prompt("Ingrese el código del paquete (CV o CA para Claro, TA o TB para Tigo):").toUpperCase();
        let precio = 0;

        if (operador === "claro") {
            if (paquete === "CV") {
                precio = 12000;
            } else if (paquete === "CA") {
                precio = 20000;
            }
        } else if (operador === "tigo") {
            if (paquete === "TA") {
                precio = 22000;
            } else if (paquete === "TB") {
                precio = 30000;
            }
        }
        
        if (precio > 0) {
            console.log("Compra de paquete exitosa");
            console.log("Operador:" + operador);
            console.log("Código" + paquete);
            console.log("Precio: $" + precio);
        } else {
            console.log("Código de paquete inválido");
        }
    }
} else {
    console.log("Tipo de operación inválido");
} 