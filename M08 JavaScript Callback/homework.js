/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

   // return nombre[0].toUpperCase() + nombre.slice(1);

   let mayusName = '';

   for (let i = 0; i < nombre.length; i++) {

      if (i === 0) mayusName += nombre[i].toUpperCase()
      else mayusName += nombre[i]

   }

   return mayusName

}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:

   return cb(num1 + num2);

}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   // let suma = 0;

   // for (let i = 0; i < arrayOfNumbers.length; i++) {

   //    suma+= arrayOfNumbers[i]   

   // }

   // cb(suma);

   // for (let i of arrayOfNumbers) {

   //    suma += i;

   // }

   // cb(suma)

   let suma = arrayOfNumbers.reduce((acumulador, valor) => acumulador + valor)

   cb(suma)
}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:


   // array.forEach(element => {
   //    cb(element)
   // });

   // for (let i = 0; i < array.length; i++) {

   //    cb(array[i])
   // }

   // for (let i of array) {
   //    cb(i)
   // }

   array.forEach(elem => cb(elem));

}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:


   // let nuevoArray = [];

   // for (let i of array) {
   //    nuevoArray.push(cb(i))
   // }


   // for (let i = 0; i < array.length; i++) {
      
   //    nuevoArray.push(cb(array[i]))
      
   // }

   // array.forEach(i => {
   //    nuevoArray.push(cb(i))
   // });

   // return nuevoArray

   return array.map( i => cb(i))


}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   // let newArray = [];

   // arrayOfStrings.forEach(i => {
      
   //    if (i[0] === "a" || i[0] === "A") {
   //       newArray.push(i)
   //    }

   // });

   // return newArray

   return arrayOfStrings.filter(elem => elem[0] === 'a' || elem[0] === 'A')


   

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
