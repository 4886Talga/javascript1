/*****************************************************
* 		Lösningsförslag - Scopes & Callbacks 		       *
*****************************************************/

//Felsök koden

/*För att ens funktionen ska kunna köras så måste vi flytta ner funktionsanropet nedanför själva 
funktionen eftersom detta är ett function expression och därmed blir inte funktionen hoistad så 
vi kan inte anropa den innan vi har deklarerat den. Förutom det så är variabeln name globalt
deklarerad. När vi sedan använder name i console.log så är det inte argumentet vi skickar med 
när vi kallar på funktionen som används utan det är den globala variabeln. Eftersom name inte
är deklarerad inuti funktionen kommer här den globala variabeln användas */

var name = prompt('Skriv ditt namn');

var greeting = function(name){
    console.log("Hello there" + name);
};

greeting(name);


// Hosting

/* Här hoistas variabler upp till innan alert. Men värdet följer dock inte med. Detta blir
detsamma som att skriva: var b; var c; och därmed tilldelar vi inget värde. Det alerten
kommer att skriva ut är därmed: 1, undefined, undefined. */

var hoisterFunction = function() {
  var a = 1;
  alert(a + " " + b + " " + c);
  var b = 2;
  var c = 3;
};
hoisterFunction();

//Hoisting 2

/* Vi borde inte deklarera eller använda något efter att vi har lämnat en return, när vi 
skriver return säger vi att vi är klara med funktionen och att funktionen ska returnera
ett värde eller en funktion. Dock så är funktionen under return en function declaration
som flyttas upp i scopet och därmed kan den returneras. Vi ska inte heller deklarera samma
funktion två gånger som i det här fallet, choosenMystery används som namn två gånger. Detta
gör att den första funktionen skrivs över och den senaste som returnerar 7 kommer att användas */

function getMysteryNumber(){
  function choosenMystery() {
    return 12;
  }
  
  return choosenMystery;
  
  function choosenMystery() {
    return 7;
  }
}

var answer = getMysteryNumber();
console.log(answer());


// Wow, more hoisting

/* Nedan är liknande som föregående kod, så här borde vi inte skriva kod. Funktionen secret
deklareras flera gånger och vi tilldelar värden innan vi har deklarerat dem. Men i det här fallet
var det en function deklaration som hoistas, skjuts upp i scopet. När vi använder funktionen
kommer den alltså returnera den sista 'function secret' som innehåller variabeln 'unused2'. Dock
så säger vi här att vi ska returnera själva funktionen. Om vi då console.loggar den yttersta funktionen
direkt kommer vi få ut hela function secret som kod och inte den variabeln som den returnerar. */

function oddFunction () {

  function secret(){
    var unused3;
  }
  
  var result;

  function secret(){
    var unused1;
  }
  
  result = secret;

  function secret(){
    var unused2;
  }
  
  return result;
}
console.log(oddFunction());


//Hey Brother


//Skapa en funktion som helt enkelt console.loggar
var heyBrother = function(){
	console.log('Hej hej på dig min bror');
};

/*Använd den inbyggda setInterval som tar två argument, en funktion samt ett tidsintervall
I detta fall vår funktion heyBrother samt 1000 millisekunder*/
setInterval(heyBrother, 1000);



//Hey Brother delay

var heyBrother = function(){
	console.log('Hej hej på dig min bror');
};

/*Lika som föregående fast istället använder vi funktionen setTimeout som skriver ut något efter
en viss tid har gått, i det här fallet 3000 millisekunder, alltså 3 sekunder. */
setTimeout(heyBrother, 3000);


//Hey Brother anonymous


/*Funktionen heyBrother är ju ganska onödig, vi behöver inte skapa den om den om den ska
göra en enklare uppgift en gång. Här kan vi istället använda en anonym funktion direkt.
Observera att funktionen inte har något namn*/

setInterval(function(){ 
		console.log('Hej hej på dig min anonym');
	}, 3000);


//Refactor this brother

/* Som du ser kan vi skicka runt funktioner på många olika sätt samtidigt som vi kan 
använda funktioner i andra funktioner. 
Här kapar först en funktion som vi ska använda inuti den andra funktionen.*/

var heyBrother = function(){
	console.log('Hej hej på dig min bror');
};

/*Här lägger vi setInterval i en funktion, anger två parametrar som vi helt enkelt skickar vidare
när vi sen ska använda setInterval-funktionen. */

var intervalFunction = function(heyFunction, interval){
	setInterval(heyFunction, interval);
};

//Måste till slut kalla på funktionen så den körs
intervalFunction(heyBrother, 1000);



//Callbacks

/* En callback är en funktion som vi skickar med till en annan funktion. Vår callback ska alltså
kallas på inuti vår yttre funktion vid ett speciellt skede, t.ex. när all annan kod i den yttre funktionen
kört klart. Funktionen behöver inte heta callback, det är bara ett namn på parametern för att visa att
det är en callback. */

//Skickar med en funktion som sista argument, x och y ska vara heltal som skickas med
var multiply = function(x,y, callback){
  //Utför först beräkningen
  var answer = x*y;
  /*Sedan kallar på vår funktion som ska köras i slutet, i detta scope kallar vi den för callback
  Det är ju dock ett vanligt funktionsanrop vi gör här */
  callback(answer);

};


/*Funktionen som ska agera callback, loggar ut hälften av vårt första värde. denna ska 
alltså skickas med in i den andra funktionen */
var divideAnswer = function(answer){
  console.log(answer/2);  
};


//Gör anropet på funktionen, sista argumentet är funktionen som ska agera callback
multiply(6,2,divideAnswer);


//Optional callback


var multiply = function(x,y, callback){
  var answer = x*y;
  /*Vi kan kolla om det ens finns en callback, men vi kan också försäkra oss om att
  den callbacken faktiskt är en funktion genom att köra dessa två villkor. Första kollar
  helt enklet om den finns. Den andra kollar vilken typ vår callback har. */
  if(callback && typeof callback == 'function'){
    callback(answer);
  }else{
    console.log('You used to call me on my callback');
  }
};

var divideAnswer = function(answer){
  console.log(answer/2);  
};

multiply(6,2, divideAnswer);