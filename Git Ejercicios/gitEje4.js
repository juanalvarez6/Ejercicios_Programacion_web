/*4. Imprimir un arreglo
Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:
*/
// escribe tu respuesta acá

const imprimirArreglo = (areglo) => {
    for (const dato of areglo) console.log(dato);
}
// código de prueba
imprimirArreglo([1, "Hola", 2, "Mundo"]);
// 1
// Hola
// 2
// Mundo