function mostrar(id){
	var visivelOcultado = document.getElementById(id).style.display;
	if (visivelOcultado == "block") {
		document.getElementById(id).style.display = "none";
	}
	else{
		document.getElementById(id).style.display = "block";
	}
}
function alterar(btn){
	var seta = document.getElementById(btn).value;
	if (seta == '▼') {
		document.getElementById(btn).value = "▲";
	}
	else{
		document.getElementById(btn).value = "▼";
	}
}