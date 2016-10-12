/************************************
*	Övningar till funktioner		*
************************************/

//Multiply
function multiply(x,y){
	//Vi kan returnera multiplikatione direkt, behöver inte lagra i en ny variabel. Det som returneras blir variabeln
	return x * y;
}

var multiplyAnswer = multiply(8,4);
console.log(multiplyAnswer);

//Calculate

function calculate(x,y,z){
	/*Det underlättar om man använder paranterser för att visa vilka värden man
	man multiplicerar.*/
	return ((x*y) / z);
}

var calculateAnswer = calculate(5,6,2);
console.log(calculateAnswer);



//Maxing, relaxing, acting all cool

function highestNumber(x,y){
	//Om x, dv.s. det första värdet är större än det andra värdet returnerar vi x eftersom det är störst, villkoret stämmer.
	if( x > y){
		return x;
	}
	//Eftersom vi bara har två värden och om det ena inte är större än det andra så är det andra större!
	else{
		return y;
	}
}

var highestAnswer = highestNumber(5,4);
console.log(highestAnswer);

//Sparar värdet i en variabel, vi får nu tillbaka ett värde istället för console.log vilket gör att vi kan spara värdet
var answer = highestNumber(5, 5);
console.log(answer);




//Mjau Machine REBORN

//Skriver in via prompt vårt värde
var numberOfMjaus = prompt('Antal Mjau!');
//Skickar med argumentet från prompten in i funktionen
mjauMachine(numberOfMjaus);

function mjauMachine(mjau){
	//Så länge värdet som kommer in inte är 0
	while( mjau != 0){
		//Logga mjau så många gånger som värdet säger
		console.log("mjau ".repeat(mjau));
		//Fråga efter antalet mjau igen tills 0 matas in. Lagra över det gamla värdet
		mjau = prompt('Antal mjau?');
	}
	//Ute ur while-loopen kan vi skriva ut :(
	console.log(':(');
}


/************************************************
*	Övningar till funktioner - fortsättning		*
************************************************/

//The Horror!

/*Detta är fortfarande en namngiven funktion. Sättet vi skapar den 
på är dock att vi lagrar en anonym funktion i en variabel. Funktionen
är dock lagrad i vår kod och kan kallas på via 'theHorror();'. Denna funktion
är alltså inte anonym för den kan kallas på med ett namn. */

var theHorror = function() {
	console.log('The Horror! The Horror!')
}

/*Denna funktion är dock helt anonym. Den har inget namn och kan inte kallas på.
Alltså kommer koden aldrig att köras. Vi måste dock kapsla in funktionen i
paranteser för att nyckelordet function kan inte stå för sig själv.*/

(function(){
	console.log('The Horror! The Horror!');
})

/* Denna funktion kommer dock att köras. Man kallar på en funktion genom dess namn
samt paranteser theHorror(); Denna funktion har dock inget namn men kan ändå kalla
på sig själv med hjälp av paranteserna (); */

(function(){
	console.log('The Horror! The Horror!');
})();


//EvenOdd

/*Funktionen tar ett övre värde och skriver ut alla jämna eller ojämna tal
	baserat på vad vi anger som värde b */
function evenOdd(a,b){
	var numbers = '';
	/* Loopa igenom alla värden ned till 0 genom en while-loop,
	a ör den första parametern, d.v.s värde att räkna ned ifrån */
	while(a >= 0){
		/* Om värdet på a modulo 2 returnerar 0 är värdet jämnt. Om värdet
		på a modulo 2 returnerar 1 är dock värdet inte jämnt. b är alltså
		den andra parametern vi skickar med som bestämmer vad vi ska skriva ut */

		if( a % 2 == b){
			//Lagrar värdet a i numbers med ett mellanslag mellan varje värde
			numbers = numbers + a + " ";
		}
		a--;
	}
	//Returnerar en sträng med alla siffrors
	return numbers;
}

//Andra värdet 1 bestämmer att det ska vara rest 1 när vi jämför med modulo.
console.log(evenOdd(20,1));

//Calcy

var calcy = function(x,y){
	//Skapa variabel som lagrar slutliga summan
	var sum = 0
	/* x * y är samma sak som att addera x, y antal gånger. Vi kör alltså loopen
	i det här fallet y antal gånger, alltså 4 i vårat fall.
	Värdet som läggs till i sum är 5 i detta fall, alltså:
	5 + 5 + 5 + 5 */

	for (var i = 0; i <= y ; i++){
		//ta den ursprungliga summan och addera x och spara om i variabeln sum
		sum = sum + x;
	}
	return sum;
}

var calcyAnswer = calcy(5,4);
console.log(calcyAnswer);

//String Checker

//Funktionen tar in en sträng som parameter
var stringChecker = function(stringToCheck){
	//Använder den inbyggda funktionen 'length' för att få ut strängens längd
	var stringLength = stringToCheck.length
	return "Strängen du matade in är " + stringLength + " tecken lång";
}

//Vi skickar in en valfri sträng som argument
console.log(stringChecker('Huburru Hubburru'));

//String converter



//String extractor

var stringExtractor = function(stringToCheck){
	/*Vi hämtar ut längden på strängen. Längden på strängen och sista
	positionen inom strängen är dock inte samma sak. I vårt fall "Hej"
	är strängen 3 tecken lång. Indexet börjar dock på 0 vilket betyder att
	sista tecknet har index 2. H = 0, e = 1, j = 2. Vi måste alltså ta -1 för 
	att få ut sista positionen */ 
	var last = stringToCheck.length -1;
	/*Inbyggda funktionen .substring plockar ut en del av strängen. Observera
	att .substring och .substr är två olika funktioner som fungerar lite olika.*/
	return stringToCheck.substring(last);

}

console.log(stringExtractor("Hej"));