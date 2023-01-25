/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}
function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
  return array[array.length -1];
}
//array = [1, 2, 3];
//console.log(devolverUltimoElemento(array));

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
    return array.length;
}
//array = ["pene", "pito", "pipi"];
//console.log(obtenerLargoDelArray(array));

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var si = array.map(num => {return num + 1})
   return si;
   
}
//console.log(incrementarPorUno(array = [1,2,3]));

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabraunida = palabras.join(" ")
   return palabraunida;
}

 //console.log(dePalabrasAFrase(palabras = ["Hello", "world!"]));

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:
// for(i = 0; i < array.length; i++ ){
//if(array[i] > elemento) return true;
//}
//return false;    

   if(array.includes(elemento)) return true;
   else return false;
}
//console.log(arrayContiene(array = [2, 3, 4], 1 ));

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var resultado = 0;
   for(const i of arrayOfNums){
   resultado += i;

   }
   return resultado;
}

//console.log(agregarNumeros(arrayOfNums=[1,2,3,4]));

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var resultado = 0
   for(i=0; i < resultadosTest.length; i++){
      resultado += resultadosTest[i];
   }
  return resultado / resultadosTest.length;
}
//console.log(promedioResultadosTest(resultadosTest=[4,6,8,1]));

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var elmasgrande = 0;
   for(i=0; i < arrayOfNums.length; i++){
      if(elmasgrande < arrayOfNums[i]){
         elmasgrande = arrayOfNums[i];
      }
   }
   return elmasgrande;
}



function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var producto = 1
   if(arguments.length == 0) return 0;
   else if (arguments.length == 1) return arguments[0];
   else{
      for(i = 0; i < arguments.length; i++){
       producto = producto * arguments[i];
      }
      return producto;
   }

}
//console.log(multiplicarArgumentos(1,2,3,4,5));

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cantidad = [];
  for(const i of array){
    if(i > 18)
    cantidad.push(i);
  }
  return cantidad.length;
 
   // for(i = 0; i < array.length; i++){
   //  if(array [i] > 18)
   //   cantidad.push(array[i]);
   // }
   // return cantidad.length;
}


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia == 1 || numeroDeDia == 7) return "Es fin de semana";
   else return "Es dia laboral";
}


function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   var arreglo = num.toString();
   arreglo.split();
   if(arreglo[0] == 9) return true;
   else return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   for(const i of array){
   if(array[0] !== i) return false;
  
   
   }
  return true;
}


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var array2 = [];
   for(i = 0; i < array.length; i++){
     if(array[i] == "Enero") array2.push("Enero");
     else if (array[i] == "Marzo") array2.push("Marzo");
     else if (array[i] == "Noviembre") array2.push("Noviembre"); 
   } 
   if(array2.length !== 3) return "No se encontraron los meses pedidos";
   else return array2;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var arraytabladelseis = [];
   for(i = 0; i < 11; i++){
   arraytabladelseis.push(6 * i);
   }
   return arraytabladelseis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

var mayorque = [];
for(i=0; i < array.length; i++){
if(array[i] > 100) 
  mayorque.push(array[i]);
}
return mayorque;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arreglo = [];
    for(i=0; i<10;i++){
     num = num + 2;
      if(num == [i]) break;

       else arreglo.push(num);
   }
        if(arreglo.length < 10) return "Se interrumpió la ejecución";
         else return arreglo;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arreglo = [];
   for(i=0; i<10; i++){
    if(i == 5) 
     continue;
      else num = num + 2;
       arreglo.push(num);
   }
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
