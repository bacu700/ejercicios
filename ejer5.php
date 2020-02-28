<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Ejercicio 4</title>
	<link rel="stylesheet" type="text/css" href="CSS/estilo.css">
</head>
<body>
	Programa para calcular el porcentaje de alumnos
	<script src="JS/ejercicio5.js"></script>
	<form name="formulario5" method="post">
	<table border="1" align="center">
		<tr>
			<th colspan="3">Calcular calificacion final</th>

		</tr>
		<tr>
			<th></th>
			
			<th>No.</th>
		</tr>
		<tr>
			<th>Alumnos totales</th>
			<td><input class="input" type="text" name="total" onkeypress="return validarn(event)"></td>
			
		</tr>
		<tr>
			<th>Hombres</th>
			<td><input class="input" type="text" name="hombres" onkeypress="return validarn(event)"></td>

		</tr>
		<tr>
			<th>Mujeres</th>
			<td><input class="input" type="text" name="mujeres" onkeypress="return validarn(event)"></td>
		</tr>
		<tr>
			<td colspan="2" width="300" height="500"><input size="100" type="text"  id="final" readonly="readonly" class="input1"></td>
			<td></td>

		</tr>
		<td colspan="2"><input type="button" name="enviar" value="Calcular porcentaje de hombres y mujeres" onclick="Contar()"></td>
		<td></td>
	</table>
</form>
</body>
</html>
