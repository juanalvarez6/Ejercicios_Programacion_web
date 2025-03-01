/*13. Remover ceros
Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).*/

// escribe tu respuesta acá
const removerCeros = (numeros) => {
    let result = [];
    for (num of numeros) {
        if (num != 0) {
            result.push(num);
        }
    }
    return result;
}

// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])); // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])); // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])); // []