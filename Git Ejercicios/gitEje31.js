/*31. Distancia entre dos strings
Escribir una función llamada distancia que reciba dos strings y retorne el número de caracteres 
diferentes (comparando posición por posición).

Nota: Puedes asumir que los strings siempre tienen la misma longitud. 
Sin embargo, si quieres agregarle más dificultad puedes pensar cómo solucionarlo si un string es más 
largo que el otro (la diferencia entre las longitudes agregaría al resultado).*/

// escribe tu función acá
const distancia = (cadena1, cadena2) => {
    let result = 0;
    if (cadena1 === cadena2) {
        return result;
    } else {
        let recorrer = Math.max(cadena1.length, cadena2.length);
        for (let i = 0; i < recorrer; i++) {
            if (cadena1[i] != cadena2[i]) {
                result++;
            }
        }
        return result;
    }
}

// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3