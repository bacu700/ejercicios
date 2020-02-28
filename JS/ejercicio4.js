 function validarn(e) {
  	// evento por parte del teclado
  	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[0-9]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);


  }

 function Cali(){
 	var entrada1 = document.formulario4.cali1.value;
 	var parse1 = parseInt(entrada1);

 	var entrada2 = document.formulario4.cali2.value;
 	var parse2 = parseInt(entrada2);

 	var entrada3 = document.formulario4.cali3.value;
 	var parse3 = parseInt(entrada3);
 	
 	
 	var califinalparcial = ((parse1+parse2+parse3)*5.5)/30
 	//document.formulario4.final.value = califinal;

 	var entrada4 = document.formulario4.examen.value;
 	var parse4 = parseInt(entrada4);
 	var califinalexamen = ((parse4)*3.0)/10

 	var entrada5 = document.formulario4.trabajo.value;
 	var parse5 = parseInt(entrada5);
 	var califinaltrabajo = ((parse5)*1.5)/10
 	
 	if (parse1>10 || parse2>10 || parse3>10 || parse4>10 || parse5>10) {
 		alert('no puede haber calificaciones mayores a 10');

 	}
 	else if (document.formulario4.cali1.value == "" || document.formulario4.cali2.value == "" || document.formulario4.cali3.value == "" || document.formulario4.examen.value == "" || document.formulario4.trabajo.value == "" ) {
 		alert('no puede haber campos vacios');
 	}
 	else{
 	var califinal = califinalparcial+califinaltrabajo+califinalexamen;
 	document.formulario4.final.value = califinal;
 }
 }  