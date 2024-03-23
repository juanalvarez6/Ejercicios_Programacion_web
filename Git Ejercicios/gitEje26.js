/* 26. Imprimir una matriz
Escribir una función llamada imprimirMatriz que reciba una matriz (un arreglo de arreglos) e imprima todos los elementos del arreglo.*/

// escribe tu función acá
const imprimirMatriz = (matriz) => {
    for (arrelo of matriz) {
        for (num of arrelo) {
            console.log(num);
        }
    }
}

// código de prueba
imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);