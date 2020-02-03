/*
  We will define our own Array methods (as functions),
  to confirm we truly understand how they operate:
        .map()  x  myMap()
     .filter()  x  myFilter()
     .reduce()  x  myReduce()
    .forEach()  x  myForEach()
*/

let numerosPares = [2, 4, 6, 8, 10];

function dobro(number){ return 2 * number; }

function myMap(array, callback){
  let mappedArray = [];
  for (let i = 0; i < array.length; i++){
    mappedArray.push(callback(array[i]));
  }
  return mappedArray;
}

let dobroNumerosPares = numerosPares.map(function(valor) {
  return 2 * valor;  
});
/*
console.log(".map() x myMap()");
console.log(numerosPares);
console.log(dobroNumerosPares);
console.log(myMap(numerosPares, dobro));
*/

let numerosFiltrados = numerosPares.filter(function(valor) {
  return valor < 6;
});

function funcaoFiltro(number){ return number < 6; }

function myFilter(array, callback){
  let mappedArray = [];
  for (let i = 0; i < array.length; i++){
    if (callback(array[i])){ mappedArray.push(array[i]); }
  }
  return mappedArray;
}
/*
console.log(".filter() x myFilter()");
console.log(numerosPares);
console.log(numerosFiltrados);
console.log(myFilter(numerosPares, funcaoFiltro));
*/

let vetorReduzido = numerosPares.reduce(function(acum, valor) {
  return acum + valor;
});

function funcaoRedutora(acumulador, numero){ return acumulador + numero; }

function myReduce(array, callback){
  let acumulador = 0;
  for (let i = 0; i < array.length; i++){
    acumulador = callback(acumulador, array[i]);
    //console.log(acumulador);
  }
  return acumulador;
}
/*
console.log(".reduce() x myReduce()");
console.log(numerosPares);
console.log(vetorReduzido);
console.log(myReduce(numerosPares, funcaoRedutora));
*/


console.log(".forEach() x myForEach()");
console.log(numerosPares);

// Using the .forEach() Method
numerosPares.forEach(function(valor, indice) {
  //Ação do forEach();
  console.log("Na posição " + indice + " temos o valor: " + valor);
});


// Using the myForEach() Function
function myForEach(array){
  for (let i = 0; i < array.length; i++){
    //Ação do forEach();
    console.log("Na posição " + i + " temos o valor: " + array[i]);
  }
}

//console.log(myForEach(numerosPares));  // => undefined
myForEach(numerosPares);

//Since myForEach returns nothing, console.log(myForEach)
//will result in "undefined", once there's nothing to print



