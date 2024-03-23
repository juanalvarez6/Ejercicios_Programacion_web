/*
2. En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/

function manufacture(gifts, materials) {
    let result = [];
    for (gifts of gifts) {
        let cont = 0;
        for (let i = 0; i < gifts.length; i++) {
            if (!materials.includes(gifts[i])) {
                cont++;
            }
        }
        if (cont === 0) {
            result.push(gifts);
        }
    }
    return result;
}

let gifts = ['tren', 'oso', 'pelota'];
let materials = 'tronesa';

console.log(manufacture(gifts, materials));
// ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ['juego', 'puzzle'];
materials = 'jlepuz';

console.log(manufacture(gifts, materials)); // ["puzzle"]

gifts = ['libro', 'ps5'];
materials = 'psl5i';

console.log(manufacture(gifts, materials));