function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if(creditCardNumber == null || creditCardNumber == undefined) {
     return "Ingresa un numero";
   }

   if(typeof creditCardNumber != "number"){
    	return "Error de dato";
    }

    if (validarLongitudNums != true){
      return "Faltan numeros";
    }

}

function validarLongitudNums(creditCardNumber) {
	var number = creditCardNumber.toString;

  if (number.length == 16){
		return true;
	}
}




// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}



/*
suma de los dígitos (toma los valores de los índices)
suma de valor de los índices impares 1,3,5,7,9 etc. y los guardas en una variable.
suma de los valores de los índices pares: pero...
primero lo multiplican por 2 y sumamos la cifras, sumas y lo guardas en variable
Ahora tenemos 2 variables.  Dividimos las variables impar/par…. si el resultado es divisible entre 10 (módulo) y el resultado es igual a 0 … tarjeta es REAL!!


*/
