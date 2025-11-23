// c. Mostrar la cantidad de elementos
alert("Número de elementos:", verduras.length);

// ===== c) Construcción y Lectura de Objetos =====

// Elegimos: una libreta
let libreta = {
    marca: "Oxford",
    color: "azul",
    hojas: 100,
    tipo: "rayada"
};

// Mostrar cada propiedad individualmente
console.log("\n--- Propiedades de la libreta ---");
console.log("Marca:", libreta.marca);
console.log("Color:", libreta.color);
console.log("Número de hojas:", libreta.hojas);
console.log("Tipo de hojas:", libreta.tipo);

// Reflexión (como comentario)
/*
i. Un objeto representa mejor a la libreta porque guarda datos con nombre
   (propiedades como "marca", "color", etc.), lo que describe claramente sus características.
   Un arreglo solo guarda una lista sin contexto: no sabrías qué es cada valor.
*/