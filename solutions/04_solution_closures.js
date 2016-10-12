/*****************************************************
* 			Lösningsförslag - Closures		 		 *
*****************************************************/


//Skapa en closure


function sayMyName(){
	var name = 'Jesper';
	//Function deklaration först. Vi kan även direkt returnera funktionen om vi vill.
	function logMyName(){
		console.log('Hello my name is ' + name);
	}
	//Returnerar funktionen i slutet på den sayMyName.
	return logMyName;
}

/*Först kallar vi på sayMyName() som returnerar en funktion. Variabeln name finns i sayMyNames scope
När vi dock kallar på nameSayer() som använder funktionen logMyName har vi tillgång till
variabeln name även fast funktionen sayMyName() har kört klart. Genom att skapa en funktion
i en annan funktion skapar vi en closure som gör att variablern i en closure lever kvar även
fast funktionen kört klart */

var nameSayer = sayMyName();
nameSayer();


//Följa en closure


/* Nedan är en mer invecklad version av ovanstående kod. Lättast blir om man följer koden genom att
använda breakpoints i debuggern. Här gäller samma sak som föregående kod. När vi använder av oss
funktionen hidden() använder vi oss av den inre funktionen som returneras. Den inre funktionen
har tillgång till yttre variabler så som var secret; som finns i vår closure. */


var hidden = mystery();
//Result kan använda var secret = 2; Vi skickar med argumentet som ska användas till parametern multiplier
var result = hidden(3);
console.log(result);

function mystery(){
  var secret = 2;
  //Den inre funktionen kan använda secret
  function mystery2 ( multiplier ) { 
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}


//Skapa en hierarki


//Den yttre funktionen tar en parameter som är vilken sorts person vi ska skapa, lärare eller student
function createPerson(title){
	/*createPerson returnerar sedan en anonym funktion som har en parameter, vilket namn eleven ska
	ha. Den inre funktionen kan användas för att skapa varje enskild person. Den inre funktionen
	får tillgång till både de yttre variablerna och den inre funktionens variabler. */

	return function(name){
		console.log('Hej jag heter ' + name + ' och är ' + title + ' på Nackademin');
	};
}


/* Vi kan här med hjälp av closures återanvända kod. Vi slipper här t.ex. skapa flera olika funktioner. */
var teacher = createPerson('lärare');
var student = createPerson('student');

//Vi kan skapa vad vi vill
var boss = createPerson('Slutboss');

boss('Ganon');
//Hej jag heter Ganon och är Slutboss på Nackademin

student('Steffe');
//Hej jag heter Steffe och är student på Nackademin
teacher('Biggie');
//Hej jag heter Biggie och är student på Nackademin
teacher('Jesper');
//Hej jag heter Jesper och är lärare på Nackademin


