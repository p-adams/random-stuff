function addHeir() {
	aFemaleHeir = document.getElementById("femaleHeirs").value;
    var quantity = document.getElementById("addHeirBox").value;
    localStorage.setItem(aFemaleHeir, quantity);
    display();
}
function RemoveHeir() {
	var heir = document.getElementById("femaleHeirs").value;
	document.getElementById("addHeirBox").value = localStorage.removeItem(heir);
	display();
}

function addHeir2(){
    var maleHeir = document.getElementById("maleHeirs").value;
    var quantity = document.getElementById("addHeirBox2").value;
    localStorage.setItem(maleHeir, quantity);
    display();
    
}

function RemoveHeir2() {
	var heir = document.getElementById("maleHeirs").value;
	document.getElementById("addHeirBox2").value = localStorage.removeItem(heir);
	display();
}

function ClearAll() {
	localStorage.clear();
	display();
}

// dynamically draw the table

function display() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Heirs</th><th>#</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>Name</th><th>Value</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store shopping list as your browser do not support local storage');
	}
}
function Submit(){
    //window.alert(aFemaleHeir);
    window.alert(localStorage.length);
    var fatherCount = localStorage.getItem("Father");
    if(fatherCount==2){
        window.alert("You cant have more than one father Ray");
    }
    //window.alert(fatherCount);
}

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}
/*function ModifyHeir() {
	var heir = document.getElementById("femaleHeirs").value;
	document.getElementById("addHeirBox").value = localStorage.getItem(heir);
	display();
}*/