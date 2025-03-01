/*
6. Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto movements donde cada caracter representa 
la dirección del movimiento del reno:

> = Avanza a la derecha
< = Avanza a la izquierda
* = Puede avanzar o retroceder
Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir 
a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a 
la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar 
todos los movimientos.

En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha 
dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la 
distancia +1 y luego va a la izquierda -1.

Crea una función maxDistance que reciba la cadena de texto movements y devuelva 
la máxima distancia que puede recorrer el reno en cualquier dirección:
*/

function maxDistance(movements) {
    // Code here
    let result = 0;
    let DistanceRight = 0;
    let DistanceLeft = 0;
    for(movements of movements){
        if(movements === '>'){
            DistanceRight++;
            result++;
        }else if(movements === '<'){
            DistanceLeft--;
            result--;
        }else if(movements === '*'){
            if(Math.max(DistanceRight, DistanceLeft) === DistanceRight || DistanceRight === DistanceLeft){
                result++;
            }else if(Math.max(DistanceRight, DistanceLeft) === DistanceLeft){
                result--;
            }
        }
    }
    if(result < 0){
        return result*(-1);
    }else{
        return result;
    }
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

const movements4 = '>><>>*>>'
const result4 = maxDistance(movements4)
console.log(result4) // -> 