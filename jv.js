window.onload = function(){ 
	document.getElementById("butt").onclick = function() {
		loadDoc()
	};
}

// Carga la data en la pagina
function loadDoc() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			myFunction(xhttp);
		}
	};
	xhttp.open("GET", "http://localhost/ATI/data.xml", true);
	xhttp.send();
}

function myFunction(xml) {
	var i = 0;
	var xmlDoc = xml.responseXML;
	var table="<tr><th>Artista</th><th>Titulo</th></tr>";
	var y = xmlDoc.getElementsByTagName("CD");
	for (i = 0; i <y.length; i++) { 
		table += "<tr><td>" +
		y[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td><td>" +
		y[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td></tr>";
	}
	document.getElementById("demo").innerHTML = table;
}