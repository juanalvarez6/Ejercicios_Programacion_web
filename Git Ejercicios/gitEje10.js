/*10. Número de caracteres
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). 
La función debe retornar el número de veces que aparece el caracter en el string.*/

// escribe tu respuesta acá
const numeroDeCaracteres = (cadena, letra) => {
    let result = 0;
    for (letter of cadena) {
        if (letter === letra) {
            result++;
        }
    }
    return result;
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", 'e')); // 4