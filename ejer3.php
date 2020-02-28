<!DOCTYPE html>
<html>
<head>
	<title>Ejercicio 3</title>
</head>
<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="CSS/estilo.css">
<body>Programa para calcular un total con descuento
	<script src="JS/ejercicio3.js"></script>
	<form name="formulario3" method="post">
	<table border="1" align="center">
		<tr>
			<th colspan="3">Calcular Total</th>

		</tr>
		<tr>
			<th>Ingrese la compra total</th>
			<th>Total con descuento</th>
		</tr>
		<tr>
			<td><input type="text" name="Total" onkeypress="return validarn(event)"></td>
			<td><input type="text"  id="descuento" readonly="readonly" class="input1"></td>
		</tr>
		<tr>
			<td colspan="2"><input type="button" name="enviar" value="calcula el total" onclick="Calcular()"></td>
			<td></td>
		</tr>	

	</table>
	</form>



</body>
</html>