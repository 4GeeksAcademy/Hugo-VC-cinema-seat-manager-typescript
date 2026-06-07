// inicializa matriz de asientos con 0 (disponible) y 1 (ocupado). Por defecto todos disponibles
function inicializarMatrizAsientos(
	filas: number = 8,
	asientos: number = 10
): number[][] {
	return Array.from({ length: filas }, () => Array(asientos).fill(0));
}

// devulve formateada la matriz de asientos, con "X" para ocupado y "L" para libre
function mostrarEstadoAsientos(matrizAsientos: number[][]): void {
    const estadoAsientos = matrizAsientos.map((fila, i) => 
        {
        const filaFormateada = fila
            .map((asiento, j) => {
            const simbolo = asiento === 1 ? "X" : "L";
            return simbolo;
            })
            .join(" ");

        return `Fila ${i + 1}: ${filaFormateada}`;
        })
        .join("\n");

    console.log(estadoAsientos);
}

// función para reservar un asiento, recibe la matriz de asientos, el número de fila y el número de asiento. 
function reservarAsiento(matrizAsientos: number[][], fila: number, asiento: number): boolean {
    // Validar que los números de fila y asiento estén dentro del rango. Si no, mostrar un mensaje de error y devolver false
    if (fila < 1 || fila > matrizAsientos.length || asiento < 1 || asiento > matrizAsientos[0].length) {
        console.error("Número de fila o asiento fuera de rango.");
        return false;
    }
    // comprobar si el asiento está disponible (0) u ocupado (1). Si está disponible, marcarlo como ocupado (1) y devolver true.
    if (matrizAsientos[fila - 1][asiento - 1] === 0) {
        matrizAsientos[fila - 1][asiento - 1] = 1; // Marcar como ocupado
        console.log(`Asiento reservado: Fila ${fila}, Asiento ${asiento}`);
        return true;
    } else { // si esta ocupado imprimir un mensaje de advertencia y devolver false
        console.warn(`El asiento ${asiento} de la fila ${fila} ya está ocupado.`);
        return false;
    }
}

// cuenta y devuelve cuántos asientos están ocupados y disponibles
function contarEstadoAsientos(matrizAsientos: number[][]): {
    ocupados: number;
    disponibles: number;
} {
    let ocupados = 0;
    let disponibles = 0;

    for (const fila of matrizAsientos) {
        for (const asiento of fila) {
            if (asiento === 1) {
                ocupados++;
            } else {
                disponibles++;
            }
        }
    }

    return { "ocupados": ocupados, "disponibles": disponibles };
}






// Ejemplo de uso
const matrizAsientos = inicializarMatrizAsientos();
reservarAsiento(matrizAsientos, 1, 5);
reservarAsiento(matrizAsientos, 2, 4);
reservarAsiento(matrizAsientos, 3, 3);
reservarAsiento(matrizAsientos, 4, 86);
reservarAsiento(matrizAsientos, 5, 3);
reservarAsiento(matrizAsientos, 6, 9);
reservarAsiento(matrizAsientos, 7, 6);
reservarAsiento(matrizAsientos, 7, 6);

mostrarEstadoAsientos(matrizAsientos);

console.log(contarEstadoAsientos(matrizAsientos));