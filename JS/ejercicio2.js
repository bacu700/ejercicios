 function validarn(e) {
  	// evento por parte del teclado
  	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[0-9]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);


  } 



function ventas(){
	var venta1 = document.formulario2.vent1.value;
	var VENTA1 = parseFloat(venta1);
	var total1 = VENTA1+VENTA1*.10
	

	var venta2 = document.formulario2.vent2.value;
	var VENTA2 = parseFloat(venta2);
	var total2 = VENTA2+VENTA2*.10
	

	var venta3 = document.formulario2.vent3.value;
	var VENTA3 = parseFloat(venta3);
	var total3 = VENTA3+VENTA3*.10
	

	var venta4 = document.formulario2.vent4.value;
	var VENTA4 = parseFloat(venta4);
	var total4 = VENTA4+VENTA4*.10
	

	var venta5 = document.formulario2.vent5.value;
	var VENTA5 = parseFloat(venta5);
	var total5 = VENTA5+VENTA5*.10


	var Sueldo1 = document.formulario2.Sueldo.value;
	var final = parseFloat(Sueldo1);

	var total = final + total1 + total2 + total3 + total4 + total5

	if (document.formulario2.vent1.value == "" || document.formulario2.vent2.value == "" || document.formulario2.vent3.value == "" || document.formulario2.vent4.value == "" || document.formulario2.vent5.value == "" || document.formulario2.Sueldo.value == "") {
		alert('no puede haber campos vacios');
	}
	else{
		document.formulario2.ventaa.value = "$"+total1;
		document.formulario2.ventae.value = "$"+total2;
document.formulario2.ventai.value = "$"+total3;
document.formulario2.ventao.value = "$"+total4;
	document.formulario2.ventau.value = "$"+total5;
	document.formulario2.final.value = "$"+total;
}
}