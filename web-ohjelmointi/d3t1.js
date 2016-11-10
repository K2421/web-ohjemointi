
// tavaroiden lataaminen local storagesta
function init() {
	
	if (window.localStorage) {
		showShoppingList();
	} else {
    	window.alert("Local Storage is not available");
	}    
}

function showShoppingList() {
	var key = "";
	var list = "<tr><th>Tavara</th><th>Määrä</th></tr>\n";
	var shoppingLength = window.localStorage.length;
	for (var i=0;i<shoppingLength;i++) {
		// item
		key = localStorage.key(i);
		// tavara ja määrä yhdellä rivillä
		list += "<tr><td>" + key + "</td><td>" + localStorage.getItem(key) + "</td></tr>\n";
	}
	// tyhjä ostoslista
	if (list == "<tr><th>Tavara</th><th>Määrä</th></tr>\n") {
		list += "<tr><td><i>tyhjä</i></td>\n<td><i>tyhjä</i></td></tr>\n";
	}
	// näytä rivit
	document.getElementById("ostosLista").innerHTML = list;
}

function addItem() {
	var item = document.getElementById("tavara").value
    var quantity = document.getElementById("maara").value;
    localStorage.setItem(item, quantity);
    showShoppingList();  
}

function clearShoppingList() {
    localStorage.clear();
    showShoppingList();
}