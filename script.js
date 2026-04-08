// Variables de estado
let vidaJugador = 100;
let vidaEnemigo = 100;

// Tu idea: La función Random para reutilizar factores del 1 al 10
function generarAzar(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ejecutarTurno() {
    // 1. TURNO DEL JUGADOR
    let factorAtaque = generarAzar(1, 10);
    let mensaje = "";

    if (factorAtaque === 1) {
        mensaje = "¡El enemigo esquivó el ataque! ";
    } else {
        vidaEnemigo -= 15; // Bajamos vida
        mensaje = "¡Le diste al enemigo! (-15 vida) ";
    }

    // 2. TURNO DEL ENEMIGO (Lógica automática)
    let factorEnemigo = generarAzar(1, 10);
    if (factorEnemigo > 2) {
        vidaJugador -= 10;
        mensaje += " El enemigo te golpeó.";
    } else {
        mensaje += " ¡Esquivaste el golpe enemigo!";
    }

    // Actualizar la pantalla (El DOM)
    actualizarInterfaz(mensaje);
}

function actualizarInterfaz(msg) {
    document.getElementById("vida-jugador").innerText = vidaJugador;
    document.getElementById("vida-enemigo").innerText = vidaEnemigo;
    document.getElementById("mensaje").innerText = msg;

    if (vidaEnemigo <= 0) alert("¡Ganaste!");
    if (vidaJugador <= 0) alert("Game Over");
}
