/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
    var arreglo=[];
   //  var datos= [];
   //  for(const i in objeto){
   //    arreglo.push(Object.values(i));
   //     datos.push(objeto[i]);
   //  }
   //   for(var x= 0;x<arreglo.length;x++){
   //         arreglo[x].push(datos[x]);
   //  }
   //   return arreglo;
   arreglo=Object.entries(objeto);
   return arreglo;
}
//console.log(deObjetoAarray(objeto={D: 1, B: 2, C: 3}));

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arreglo = string.split("");
   arreglo.sort();
    objeto={};
    for(i=0;i<arreglo.length;i++){
       if(objeto[arreglo[i]]) objeto[arreglo[i]]++;
       else objeto[arreglo[i]]=1;
    }
    return objeto;
    
}
 //console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"));

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayuscula = "";
   var minuscula = "";
   for(i=0;i<string.length;i++){
      if(string[i] == string[i].toUpperCase())
      mayuscula = mayuscula + string[i];
      else minuscula = minuscula + string[i];
   }
   return mayuscula + minuscula;

}
//console.log(capToFront("johanesPERRA"));

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var nuevaFrase="";
     for(i=frase.length-1;i>=0;i--){
          nuevaFrase += frase[i];
   }
  

   return nuevaFrase.split(" ").reverse().join(" ");
}
//console.log(asAmirror("The Henry Challenge is close!"));

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numero = numero.toString()
   if(numero.split("").reverse().join("") == numero) return "Es capicua"
   else return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newstring = "";
   for(i=0; i<string.length; i++){
   if(string[i] == "a" || string[i] == "b" || string[i] == "c")
    continue;
    newstring+=string[i];
   }
   return newstring;
}
//console.log(deleteAbc(""));

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   nuevoArray= arrayOfStrings.sort(function(a, b) {
      return a.length - b.length
    });
   return nuevoArray;
}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   if(array1.length > array2.length){
      var nuevoArray = array1.filter(i => array2.includes(i));
   }else{
     var nuevoArray = array2.filter(i => array1.includes(i));
   }
  return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
