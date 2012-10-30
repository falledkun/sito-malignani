function writeInfo(indexInfo){
	document.getElementById("mainLogo").style.cssText=				"opacity:0.3;filter:alpha(opacity=30);transition:opacity 1.5s;-moz-transition:opacity 1.5s;-o-transition:opacity 1.5s;-webkit-transition:opacity 1.5s;-ms-transition:filter 1.5s;"
	if(indexInfo===0){
		info="Pagina principale del nuovo sito del Malignani di Udine";
	}
	else if(indexInfo===1){
		info="News aggiornate dal Malignani";
	}
	else if(indexInfo===2){
		info="Gli orari completi delle classi";
	}
	else if(indexInfo===3){
		info="Moodle -.-";
	}
	else{
		info="default info text";
	}
	document.getElementById("info").innerHTML=info;
}
function noInfo(){
	document.getElementById("mainLogo").style.cssText="opacity:1;filter:alpha(opacity=100);transition:opacity 1s;-moz-transition:opacity 1s;-o-transition:opacity 1s;-webkit-transition:opacity 1s;-ms-transition:filter 1s;"
	document.getElementById("info").innerHTML="";
}