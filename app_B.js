// ===== b) Recorridos del Arreglo =====

// a. Usando for (muestra posición y valor)
console.log("\n--- Recorrido con for ---");
for (let i = 0; i < verduras.length; i++) {
    console.log("Posición " + i + ": " + verduras[i]);
}

// b. Usando for...of (solo muestra valores)
console.log("\n--- Recorrido con for...of ---");
for (let verdura of verduras) {
    console.log(verdura);
}


// c. Conclusión (escrita como comentario)
/*
i. El bucle for es más útil cuando necesitas saber la posición (índice) del elemento,
   por ejemplo para comparar, modificar o usar números en cálculos.

ii. El bucle for...of es más útil cuando solo te interesan los valores del arreglo
    y no necesitas el índice. Es más limpio y fácil de leer.
*/