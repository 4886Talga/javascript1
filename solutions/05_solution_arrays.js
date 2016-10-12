/*****************************************************
* 			Lösningsförslag - Arrays		 		 *
*****************************************************/

//Skriv ut värde

var yourArray = [23, 45, 54, 12, 77];

console.log(yourArray[0]); // Index 0 indikerar det första värdet i vår array.
console.log(yourArray[4]); // Index 4 är vårt sista värde

//Ändra ett värdet


//Som när vi tilldelar ett värde till en variabel med = ;
yourArray[4] = 1; 
console.log(yourArray);


// Loopa genom en array

var bestArray = [ 1, 2, 3, 4, 5];

/* Vi får ut hur många gånger loopen ska köras genom att ta .length på vår array
som villkor. På så sätt körs den hela arrayens längd */
for (var i = 0; i < bestArray.length; i++){
	//i ökar från 0 till 4, alltså går den från plats 0 i arrayen till plats 4
	console.log(bestArray[i]);
}


//Summera array

//Den här känner ni igen! Skapa en variabel som lagrar det slutgiltiga värdet
var sum = 0;
//Samma som i förra loopen, vi vill gå igenom alla värden
for (var i = 0; i < bestArray.length; i++){
	//Som vi har gjort tidigare, förutom att vi bara lägger till sum + i den här gången
	//lägger vi till värdet som hämtas ur arrayen, där i indikerar index, plats, i arrayen.
	sum = sum + bestArray[i];
}

console.log(sum);



//Filter array by length

var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];

for (var i=0; i < okArray.length; i++){

	//wordArray[i] är strängen som ska kollas. Precis som med arrayen kan vi ta ut
	//längden på strängen med .length och kolla om den är kortaren än 5 tecken, isf: skriv ut.
	if (okArray[i].length <= 5){
		console.log(okArray[i]);
	}
}

//Filter array by content

var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];

for (var i=0; i < okArray.length; i++){
	//Ett enkelt sätt är att konvertera den sträng vi ska kolla till lowercase innan
	//vi kollar villkoret. Då behöver vi inte ha två villkor att kolla.
	if (okArray[i].toLowerCase() === "fine"){
		console.log(okArray[i]);
	}
}

//Filter array by type

//En redig soppa av variabler!
var worstArrayYet = ["string", true, 42, "another string", 54, null, 12];

var sum = 0;

for (var i = 0; i < worstArrayYet.length; i++){
	//Om det inte är ett nummer så skriver vi ut det i console. Argumentet som skickas in
	//är värdet i arrayen på index i
	if (isNaN(worstArrayYet[i])){
		console.log(worstArrayYet[i]);
	}
	//Vi kan även kolla typen med hjälp av typeof. Här kollar vi så att det är ett nummer
	//Testa att skriva den här koden utan att köra den här else if satsen. D.v.s kör bara
	// med den första if-satsen. Summera sen alla andra variabler. Får du samma resultat?
	else if (typeof worstArrayYet[i] === 'number'){
		sum+= worstArrayYet[i];
	}
}

console.log(sum);









