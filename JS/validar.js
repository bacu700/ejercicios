/*Vamos a ver otra bondad de js que es ulitizar
 eventos y expresiones regulares wiiii PD.
  hace calor T_T*/
 function validarn(e) {
  	// evento por parte del teclado
  	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[0-9]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);


  } 
function interes() {
	var valor = document.formulario.cantidad.value;
	var cantidad = parseInt(valor);
	var interes = 0.089*cantidad;
	var total = cantidad+interes;

  if (document.formulario.cantidad.value == "") {
    alert('no puede haber campos vacios');
  }
  else{


	document.formulario.interesi.value="$"+interes;
	document.formulario.sueldo.value="$"+total;
}

  }  

/*
2.- 13.8%
debera ingresar cada una de las ventas no seran 3 seran 5 ventas
el sueldo se ingresa

3.- el descuento va a ser del 7%

4.-tal cual

5.- talasnhiocfasin bg

*/ 