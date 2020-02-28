 function validarn(e) {
  	// evento por parte del teclado
  	var teclado = (document.all) ? e.keycode : e.which;
  		var patron = /[0-9]/;
  		var tec = String.fromCharCode(teclado);
  		return patron.test(tec);


  }

 function Contar(){
 	var totalde = document.formulario5.total.value;
 	var alumnos = parseInt(totalde);

 	var alumnosh = document.formulario5.hombres.value;
 	var alumh = parseInt(alumnosh);

 	var alumnosm = document.formulario5.mujeres.value;
 	var alumm = parseInt(alumnosm);

 	var porcentajeh = (100*alumh)/alumnos;
 	var porcentajem = (100*alumm)/alumnos;

 	if (document.formulario5.total.value == "" || document.formulario5.hombres.value == "" || document.formulario5.mujeres.value == "") {
 		alert('no puede haber campos vacios');
 	}
 	if (alumh + alumm != alumnos) {
 		alert('Los datos no cuadran');
 	}
 	else{
 	document.formulario5.final.value = "Hombres:%  "+porcentajeh+"\n"+"     Mujeres:%"+porcentajem;
 	}


 }