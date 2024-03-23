/*21. Encontrar números pares en un arreglo
Escribir una función llamada pares que reciba un arreglo de números y retorne un nuevo arreglo con los números pares únicamente.*/

// escribe tu respuesta acá
const pares = (numeros) => {
    let result = [];
    for (num of numeros) {
        if (num % 2 == 0) {
            result.push(num);
        }
    }

    return result;
}

// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(pares([])); // []