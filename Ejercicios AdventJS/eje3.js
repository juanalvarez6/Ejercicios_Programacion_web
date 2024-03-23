/*
3. En el taller de Santa, un elfo travieso ha estado jugando en la cadena de 
fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación 
original y la secuencia modificada modified que puede incluir 
un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso 
extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay 
ninguna diferencia entre las secuencias, devuelve una cadena vacía.
*/

function findNaughtyStep(original, modified) {
    // Code here
    if(original === modified){
        return '';
    }else {
        if(original.length < modified.length){
            for(mod of modified){
                if(!original.includes(mod)){
                    return mod;
                }
            }
        }else{
            for(ori of original){
                if(!modified.includes(ori)){
                    return ori;
                }
            }
        }
        return '';
    }
}


let original = 'abcd';
let modified = 'abcde';
console.log(findNaughtyStep(original, modified)); // 'e'

original = 'stepfor';
modified = 'stepor';
console.log(findNaughtyStep(original, modified)); // 'f'

original = 'abcde';
modified = 'abcde';
console.log(findNaughtyStep(original, modified)); // ''