// =============== a) Manipulación de Arreglos ===============

let verduras = ["zanahoria", "papa", "cebolla", "tomate"];
console.log("Arreglo inicial:", verduras);

// push()
verduras.push("lechuga");
console.log("Después de push():", verduras);

// pop()
verduras.pop();
console.log("Después de pop():", verduras);

// unshift()
verduras.unshift("apio");
console.log("Después de unshift():", verduras);

// shift()
verduras.shift();
console.log("Después de shift():", verduras);

// length
console.log("Cantidad de elementos:", verduras.length);


// =============== b) Recorridos del Arreglo ===============

console.log("\n--- Recorrido con for ---");
for (let i = 0; i < verduras.length; i++) {
    console.log(`Posición ${i}: ${verduras[i]}`);
}

console.log("\n--- Recorrido con for...of ---");
for (let verdura of verduras) {
    console.log(verdura);
}


// =============== c) Construcción y Lectura de Objetos ===============

// Ejemplo: una libreta
let libreta = {
    marca: "Oxford",
    color: "azul",
    hojas: 100,
    tipo: "rayada"
};

// Mostrar cada propiedad
console.log("Marca:", libreta.marca);
console.log("Color:", libreta.color);
console.log("Hojas:", libreta.hojas);
console.log("Tipo:", libreta.tipo);


// =============== d) Arreglo de Objetos (Integración) ===============

let inventario = [
    {
        nombre: "Cuaderno",
        uso: "Tomar apuntes",
        cantidad: 5
    },
    {
        nombre: "Teclado",
        uso: "Escribir en computadora",
        cantidad: 3
    },
    {
        nombre: "Audífonos",
        uso: "Escuchar audio sin molestar",
        cantidad: 7
    }
];

console.log("\n--- Inventario: nombre de cada objeto ---");
for (let item of inventario) {
    console.log(item.nombre);
}