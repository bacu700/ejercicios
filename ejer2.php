<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Ejercicio 2</title>
	<link rel="stylesheet" type="text/css" href="CSS/estilo.css">
</head>
<body>
	<div>
	<h1>Programa para calcular un salario</h1>
	</div>
	<script src="JS/ejercicio2.js"></script>
	<form name="formulario2" method="post">
	<table border="1" align="center">
		<tr>
			<th colspan="3">Calcular sueldo</th>

		</tr>
		<tr>
			<th colspan="1"></th>
			<th>Datos</th>
			<th>Resultado</th>
		</tr>
		<tr>
			<td>Sueldo</td>
			<td colspan="2"> <input class="input" type="text" name="Sueldo" onkeypress="return validarn(event)"></td>
		</tr>
		<tr>
			<td>Venta 1</td>
			<td> <input class="input" type="text" name="vent1" onkeypress="return validarn(event)"></td>
			<td><input type="text"  id="ventaa" readonly="readonly" class="input1"></td>

		</tr>
		<tr>
			<td>Venta 2</td>
			<td> <input class="input" type="text" name="vent2" onkeypress="return validarn(event)"></td>
			<td><input type="text"  id="ventae" readonly="readonly" class="input1"></td>

		</tr>
		<tr>
			<td>Venta 3</td>
			<td> <input class="input" type="text" name="vent3" onkeypress="return validarn(event)"></td>
			<td><input type="text"  id="ventai" readonly="readonly" class="input1"></td>

		</tr>
		<tr>
			<td>Venta 4</td>
			<td> <input class="input" type="text" name="vent4" onkeypress="return validarn(event)"></td>
			<td><input type="text"  id="ventao" readonly="readonly" class="input1"></td>

		</tr>
		<tr>
			<td>Venta 5</td>
			<td> <input class="input" type="text" name="vent5" onkeypress="return validarn(event)"></td>
			<td><input type="text"  id="ventau" readonly="readonly" class="input1"></td>

		</tr>
		<tr>
			<td colspan="2"><input type="button" name="enviar" value="calcula el total" onclick="ventas()"></td>
			<td><input type="text"  id="final" readonly="readonly" class="input1"></td>
		</tr>
		





	</table>
	</form>
</body>
</html>