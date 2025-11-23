// ===== a) Manipulación de Arreglos =====

// a. Crear un arreglo llamado verduras con al menos 4 elementos
let verduras = ["zanahoria", "papa", "cebolla", "tomate"];
alert("Arreglo inicial:", verduras);

// b. Operaciones con el arreglo
verduras.push("lechuga");        // Agrega al final
alert("Después de push():", verduras);

verduras.pop();                  // Elimina el último
alert("Después de pop():", verduras);

verduras.unshift("espinaca");    // Agrega al inicio
alert("Después de unshift():", verduras);

verduras.shift();                // Elimina el primero
alert("Después de shift():", verduras);
