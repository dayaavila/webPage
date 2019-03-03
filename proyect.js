/*VALIDADCION DE FORMULARIO NUEVO CLIENTE*/

var exRg = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

function validar_nombre()
{
	var txtNombre = document.getElementById("nombre").value;
	var soloLetras = exRg.test(txtNombre);
	var cant_letras = txtNombre.length <= 3;
	if(txtNombre == null || cant_letras || !soloLetras) {
		document.getElementById("caja_nom").innerHTML ="Campo invalido, solo letras, mínimo tres letras, campos con (*) obligatorio";
		document.getElementById("caja_nom").style.color = "red";
		document.getElementById("caja_nom").style.fontSize = ".9rem";
		document.getElementById("nombre").style.border = "1px solid red";
	}else {
		document.getElementById("nombre").style.border = "1px solid lightgrey";
		document.getElementById("caja_nom").innerHTML ="";
	}
}
function validar_apellido()
{
	var txtApellido = document.getElementById("apell").value;
	var soloLetras = exRg.test(txtApellido);
	var cant_letras = txtApellido.length <= 3;
	if(txtApellido == null || cant_letras || !soloLetras) {
		document.getElementById("caja_apell").innerHTML ="Campo invalido, acepta solo letras, mínimo tres letras, los campos con (*) son obligatorio";
		document.getElementById("caja_apell").style.color = "red";
		document.getElementById("caja_apell").style.fontSize = ".9rem";
		document.getElementById("apell").style.border = "1px solid red";
	}else {
		document.getElementById("apell").style.border = "1px solid lightgrey";
		document.getElementById("caja_apell").innerHTML ="";
	}
}
function validar_dni()
{
	var dni = document.getElementById("dni").value;
	var dni_sin = parseInt(dni.substring(0, 8));
	var letra = dni.substring(8, 9).toUpperCase();
	var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
	if (letra != letras[dni_sin%23] || dni.length >=9)
	{
		document.getElementById("caja_dni").innerHTML ="El DNI introducido es invalido;debe ser de 8 numeros y una letra";
		document.getElementById("caja_dni").style.color = "red";
		document.getElementById("caja_dni").style.fontSize = ".9rem";
  		document.getElementById("dni").style.border = "1px solid red";	
	}
	else
	{
		document.getElementById("dni").style.border = "1px solid lightgrey";
  		document.getElementById("caja_dni").innerHTML ="";
	}
}
function validar_direccion()
{
	var direccion = document.getElementById("direcc").value;
	if(direccion == null || direccion.length < 3 ){
		document.getElementById("caja_direcc").innerHTML ="Debes escribir mínimo tres letras, los campos con (*) son obligatorio";
		document.getElementById("caja_direcc").style.color = "red";
		document.getElementById("caja_direcc").style.fontSize = ".9rem";
		document.getElementById("direcc").style.border = "1px solid red";
	}else {
		document.getElementById("direcc").style.border = "1px solid lightgrey";
		document.getElementById("caja_direcc").innerHTML ="";
	}
}
function validar_telefono()
{
	var telefono = document.getElementById("tlf").value;
	var primer = telefono.substring(0, 1);
	if (primer!=6 && primer!=7 && primer!=9 || telefono.length>9)
	{
		document.getElementById("caja_tlf").innerHTML ="El teléfono introducido es invalido, debe comenzar por 6,7 ó 9, máximo 9 números, los campos con (*) son obligatorio";
		document.getElementById("caja_tlf").style.color = "red";
		document.getElementById("caja_tlf").style.fontSize = ".9rem";
  		document.getElementById("tlf").style.border = "1px solid red";	
	}
	else
	{
		document.getElementById("tlf").style.border = "1px solid lightgrey";
  		document.getElementById("caja_tlf").innerHTML ="";
	}
}
function validar_email()
{
	var email = document.getElementById("email").value;
	var campo = event.target;
	if(email == null || !emailRegex.test(campo.value)){
		document.getElementById("caja_email").innerHTML ="El email introducido es invalido, los campos con (*) son obligatorio";
		document.getElementById("caja_email").style.color = "red";
		document.getElementById("caja_email").style.fontSize = ".9rem";
		document.getElementById("email").style.border = "1px solid red";
	}else {
		document.getElementById("email").style.border = "1px solid lightgrey";
		document.getElementById("caja_email").innerHTML ="";
	}
}
function validar_boton_cliente(){
	validar_nombre();
	validar_apellido();
	validar_dni();
	validar_direccion();
	validar_telefono();
	validar_email();
}
/*VALIDADCION DE FORMULARIO IDENTIFICATE*/
function validar_email_ident()
{
	var email = document.getElementById("email").value;
	var campo = event.target;
	if(email == null || !emailRegex.test(campo.value)){
		document.getElementById("caja_email_ident").innerHTML ="El email introducido es invalido, los campos con (*) son obligatorio";
		document.getElementById("caja_email_ident").style.color = "red";
		document.getElementById("caja_email_ident").style.fontSize = ".9rem";
		document.getElementById("email_ident").style.border = "1px solid red";
	}else {
		document.getElementById("email_ident").style.border = "1px solid lightgrey";
		document.getElementById("caja_email_ident").innerHTML ="";
	}
}
function validar_contrase()
{
	var contra = document.getElementById("contra").value;
	if (contra == null || contra.length<4 )
	{
		document.getElementById("caja_contra").innerHTML ="La contraseña es invalida, debe tener mínimo 4 caracteres";
		  document.getElementById("caja_contra").style.color = "red";
		  document.getElementById("caja_contra").style.fontSize = ".9rem";
  		document.getElementById("contra").style.border = "1px solid red";	
	}
	else
	{
		document.getElementById("contra").style.border = "1px solid lightgrey";
  		document.getElementById("caja_contra").innerHTML ="";
	}
}
function validar_boton_ident(){
	validar_email_ident();
	validar_contrase();
}

/*VALIDADCION DE FORMULARIO CONTACTA*/
function validar_nom_apell()
{
	var txtNombre = document.getElementById("nom_cont").value;
	var soloLetras = exRg.test(txtNombre);
	var cant_letras = txtNombre.length <= 3;
	if(txtNombre == null || cant_letras || !soloLetras) {
		document.getElementById("caja_nom_apell").innerHTML ="Campo invalido, solo letras, mínimo tres letras, campos con (*) obligatorio";
		document.getElementById("caja_nom_apell").style.color = "red";
		document.getElementById("caja_nom_apell").style.fontSize = ".9rem";
		document.getElementById("nom_cont").style.border = "1px solid red";
	}else {
		document.getElementById("caja_nom_apell").style.border = "1px solid lightgrey";
		document.getElementById("").innerHTML ="";
	}
}
function validar_email_cont()
{
	var email = document.getElementById("email_cont").value;
	var campo = event.target;
	if(email == null || !emailRegex.test(campo.value)){
		document.getElementById("caja_email_cont").innerHTML ="El email introducido es invalido, los campos con (*) son obligatorio";
		document.getElementById("caja_email_cont").style.color = "red";
		document.getElementById("caja_email_cont").style.fontSize = ".9rem";
		document.getElementById("email_cont").style.border = "1px solid red";
	}else {
		document.getElementById("email_cont").style.border = "1px solid lightgrey";
		document.getElementById("caja_email_cont").innerHTML ="";
	}
}
function validar_mensaje_vacio()
{
	var mensaje = document.getElementById("mensaje").value;
	if (mensaje == null || mensaje.length<9)
	{
		document.getElementById("caja_mensaje").innerHTML ="Los campos con (*) son obligatorio, debe tener mínimo 10 caracteres";
		  document.getElementById("caja_mensaje").style.color = "red";
		  document.getElementById("caja_mensaje").style.fontSize = ".9rem";
  		document.getElementById("mensaje").style.border = "1px solid red";	
	}
	else
	{
		document.getElementById("mensaje").style.border = "1px solid lightgrey";
  		document.getElementById("caja_mensaje").innerHTML ="";
	}
}
function validar_boton_contac(){
	validar_nom_apell();
	validar_email_cont();
	validar_mensaje_vacio();
}


	