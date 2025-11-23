// ===== d) Arreglo de Objetos (Integración) =====

// a. Arreglo llamado inventario con 3 objetos
let inventario = [
    {
        nombre: "Cuaderno",
        uso: "Escribir apuntes",
        cantidad: 5
    },
    {
        nombre: "Teclado",
        uso: "Escribir en computadora",
        cantidad: 2
    },
    {
        nombre: "Audífonos",
        uso: "Escuchar audio",
        cantidad: 3
    }
];

// c. Recorrer con for...of e imprimir una propiedad (por ejemplo, "nombre")
console.log("\n--- Inventario (nombres) ---");
for (let item of inventario) {
    console.log(item.nombre);
}