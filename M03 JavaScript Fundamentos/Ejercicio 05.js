/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   if (num > 0) {
      return "Es positivo";
   } else if(num == 0) {
      return false;
   }else{
      return "Es negativo";
   }
}

function agregarSimboloExclamacion(str) {
   return str + "!";
}

function combinarNombres(nombre, apellido) {
   return nombre + (" ") + apellido;
}

function obtenerSaludo(nombre) {
   return "Hola" + (" ") + nombre + "!";
}

function obtenerAreaRectangulo(alto, ancho) {
   return alto * ancho;
}

function retornarPerimetro(lado) {
   return lado * 4;
}

function areaDelTriangulo(base, altura) {
   return base * altura / 2;
}

function deEuroAdolar(euro) {
   return euro * 1.20;
}

function esVocal(letra) {
   if (letra.length != 1) {
      return "Dato incorrecto";
   }
   var vocales = ["a", "e", "i", "o","u"];
   if (vocales.includes(letra)) {
      return "Es vocal";
   }
   return "Dato incorrecto";
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
