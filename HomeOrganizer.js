window.onload = homeOrganizerScript;

var options = [];

function homeOrganizerScript(){
	document.getElementById("display").value="";

	var select = document.getElementById("selectPerson"); 
	
	for(i=0;i<options.length;i++){
		var opt = options[i];
		var el = document.createElement("option");
		el.textContent = opt;
		el.value = opt;
		select.appendChild(el);
	}
	

}

function AddPersonToDB(){
	options[options.length] = document.getElementById("display").value;
	//alert(options[options.length-1]);
	document.getElementById("display").value="";
	var select = document.getElementById("selectPerson");
	var opt = options[options.length-1];
	var el = document.createElement("option");
	el.textContent = opt;
	el.value = opt;
	select.appendChild(el);
}

function PersonChange(){
	document.getElementsByTagName("form")[0].style.display="none";
}

