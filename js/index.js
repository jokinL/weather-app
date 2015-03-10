$(function(){
	// Comprobar si el navegador soporta localización
	if(navigator.geolocation){
		// Obtener geolocalización
		// Pasarle dos funciones como parametro
		navigator.geolocation.getCurrentPosition(getCoords, errorFound);
	}
	else{
		alert("Tu navegador es muy viejo, actualiza tu navegador");
	}
	// Funcion de error
	function errorFound(error){
		alert("Ha ocurrido un error "+ error.code);
		// 0: Si el error es deconocido
		// 1: Permiso denegado
		// 2: Posición no disponible
		// 3: Timer out
	}
	// Funcion obtener coordenadas
	function getCoords(position){
		var lat=position.coords.latitude;
		var lon=position.coords.longitude;
		console.log("Tu posición es:"+lat+";"+lon);
	}
});