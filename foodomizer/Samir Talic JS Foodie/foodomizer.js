//Recepie object constructor
function Recepie(vegetariskt, dishname, beskrivning, portioner, ingredienser, tillagning, bild){
	this.vegetariskt = vegetariskt;
	this.name = dishname;
	this.beskrivning = beskrivning;
	this.portioner = portioner;
	this.ingredienser = ingredienser;
	this.tillagning = tillagning;
	this.bild = bild;
}
//Recepies Array will hold our recepie objects
var Recepies = [];



// -------Create a connection to the xml file.--------------
  var Connect = new XMLHttpRequest();
  Connect.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  // Define which file to open and
  // send the request.
  Connect.open("GET", "recepter.xml", true);
  Connect.send();

  function myFunction(Connect) {
  // Place the response in an XML document.
  var TheDocument = Connect.responseXML;
  // Place the root node in an element.
  var recepies = TheDocument.childNodes[0];
  // Retrieve each recepie in turn.
  for (var i = 0; i < recepies.children.length; i++)
  {
   var recepie = recepies.children[i];
	  
   // Access each of the data values.
   var vegetariskt = recepie.getAttribute("vegetariskt");
   var name = recepie.getElementsByTagName("namn")[0].childNodes[0].nodeValue;
   var beskrivning = recepie.getElementsByTagName("beskrivning")[0].childNodes[0].nodeValue;
   var portioner = recepie.getElementsByTagName("portioner")[0].childNodes[0].nodeValue;
   var ingredienser = recepie.getElementsByTagName("ingredienser")[0].childNodes[0].nodeValue;
   var tilllagning = recepie.getElementsByTagName("tillagning")[0].childNodes[0].nodeValue;
   var bild = recepie.getElementsByTagName("bild")[0].childNodes[0].nodeValue;  
	  
   // Creating new recepie object and adding it to recepies Array
   var recepieObjecti = new Recepie(vegetariskt, name, beskrivning, portioner, ingredienser, tilllagning, bild);

   Recepies.push(recepieObjecti);
  }
	
  }
  
   //--------------------------------------------------------
  //Function which rundomly giv us an dish
  function YourDish (vegetarian) {
	  if (vegetarian === "false") {
		  
		  var randomRecepie = Recepies[Math.floor(Math.random() * Recepies.length)];
		  
		  document.getElementById("description2").setAttribute("class", "showingredients");
		  
		  document.getElementById("matcontainer").innerHTML = randomRecepie.name;
		  
		  if(randomRecepie.vegetariskt === "true"){
			  document.getElementById("foodicon").setAttribute("src", "vegeterian.png");
		  }else{
			document.getElementById("foodicon").setAttribute("src", "meat.png");  
		  }
		  
		  document.getElementById("recepie-description").innerHTML = randomRecepie.beskrivning;
		  document.getElementById("img-container").setAttribute
		  ("src", randomRecepie.bild);
		  document.getElementById("ingredients").innerHTML = randomRecepie.ingredienser;
		  document.getElementById("howtomake").innerHTML = randomRecepie.tillagning;
	  } else {
		  
		  var randomVegoRecepie = YourVegoDish();
		  
		  document.getElementById("matcontainer").innerHTML = randomVegoRecepie.name;
		  document.getElementById("foodicon").setAttribute("src", "vegeterian.png");
		  document.getElementById("recepie-description").innerHTML = randomVegoRecepie.beskrivning;
		  document.getElementById("img-container").setAttribute
		  ("src", randomVegoRecepie.bild)
		  document.getElementById("ingredients").innerHTML = randomVegoRecepie.ingredienser;
		  document.getElementById("howtomake").innerHTML = randomVegoRecepie.tillagning;
		  document.getElementById("description2").setAttribute("class", "showingredients");
		  
	  }
	 
  }

 //Function which rundomly give us only vegeterian dish
	  
	  function YourVegoDish () {
		  
		  var yourVegoDish = Recepies[Math.floor(Math.random() * Recepies.length)];
		  //console.log(yourVegoDish);
			
		  if(yourVegoDish.vegetariskt === "true"){
		     
			return yourVegoDish;						  
									  
		  } else {
			
			YourVegoDish();					  
									  
		  }
		  
		  
	  }
  //Adding todo item to todo list

/*function addInputToList (){
	var itemToAdd = document.getElementById("todoitem").value;
	console.log(itemToAdd);
	var li = document.createElement("li");
	var liTextvalue = document.createTextNode(itemToAdd)
	li.appendChild(liTextvalue);
	var element = document.getElementById("list-left");
	element.appendChild(li);
	console.log(li);
}*/