/*  
  Ejercicio 1: 
  Implementar la función 'extractValues' que toma un objeto y retorna un array con todos los valores del objeto.
  Ejemplo: 
  extractValues({a: 1, b: 2, c: 3}) debería retornar [1, 2, 3]
*/

function extractValues(data) {

  

  for (let nombre in data) {
    console.log(data[nombre]);
  }


  // Tu código aquí
}

/*  
  Ejercicio 2: 
  Implementar la función 'arrayToLengthCounters' que toma un array de strings y retorna un objeto donde cada elemento
  del array se convierte en una clave del objeto y el valor es la longitud de cada string.
  Ejemplo: 
  arrayToLengthCounters(['gato', 'perro', 'elefante']) debería retornar {gato: 4, perro: 5, elefante: 8}
*/

function arrayToLengthCounters(array) {
   // Tu código aquí
    
    var objetoss={};
    
   for(let i=0; i<array.length; i++) {
    var clave = array[i];
    var valor = clave.length;
    objetoss[clave] = valor;
  }
  return objetoss;
    
}


/*  
  Ejercicio 3: 
  Implementar la función 'findKeysInCommon' que toma dos objetos y retorna un array con los nombres de las 
  propiedades que tienen en común.
  Ejemplo:
  findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}) debería retornar ['b', 'c']
*/

function findKeysInCommon(objeto1, objeto2) {
  // Tu código aquí
}

// Llamamos a las funciones y mostramos los resultados

function main() {
   
  const punto = {
    a: 1,
    b: 2,
    c: 3,
  }
  console.log('EJERCICIO 1');

 extractValues(punto);

 console.log('EJERCICIO 2');
 
 const arraystring=['gato', 'perro', 'elefante'];

 const objetoss=arrayToLengthCounters(arraystring);
 console.log(objetoss);

 // console.log(findKeysInCommon({a: 1, b: 2, c: 3}, {b: 4, c: 5, d: 6}));
}

main();
