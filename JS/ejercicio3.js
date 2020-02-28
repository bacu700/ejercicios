function Calcular(){
	var compra = document.formulario3.Total.value;
	var total = parseInt(compra);
	var descuento = compra - compra*.07;

  if (document.formulario3.Total.value == "") {
    alert('no puede haber campos vacios');
  }
  else{
	document.formulario3.descuento.value = "$"+descuento;
}

}
 function validarn(e) {
  	// evento por parte del teclado
  	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[0-9]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);


  } 