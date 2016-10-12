
/****************************************
*	 LÖSNINGSFÖRSLAG TILL SELECTION 	*
****************************************/

//Uppgift 1 - Kvot och rest

var number = prompt('Skriv in ett nummer');

/*Dividerar talet med 2. Nu kommer vi inte få ett heltal om vi delar på något
som inte är delbart med 2. Detta ska vi lösa senare i kursen :) */
console.log('Heltalskvoten av talet dividerat med 2 är ' + number/2);
//Vi kan dock få ut om talet har rest med hjälp av modulo som skriver ut vår rest
console.log('Resten av talet modulo 2 är ' + number % 2);


//Uppgift 2 - Kokar vattnet?
//Läser in värdet som skickas in i prompt (det vi skriver in i rutan)
var doesItBoil = prompt('Vilken grad är vattnet?');

//Använder loose jämförelse (==) eftersom det värde som kommer in via prompt är en string 
if( doesItBoil == 100){
	console.log('Det kokar!');
}else if (doesItBoil == 50){
	console.log('Det är halvvägs nu!');
}else{
	console.log('Vattnet kokar inte');
}

//Uppgift 3 - Går det att bada?
var water = prompt('Finns det vatten?');

//Beroende på hur noga man vill kolla input, all input är case sensitive
if(water == "Ja" || water == "ja"){
	/*Bara om det finns vatten behöver vi kolla hur många grader vattnet är
	annars kan vi hoppa direkt till else-satsen i slutet*/
	var degrees = prompt('Hur många grader är vattnet?');
	//Kolla om graderna är över 30
	if (degrees > 30){
		console.log('Varsågod och bada!');
	/*Om det inte är över 30 så är det under 30, d.v.s vi behöver 
	inte göra en ytterligare if-sats som kollar det */
	}else{
		console.log('Det går inte att bada');
	}
	//Om det inte finns vatten kan vi hoppa till en else-sats istället
}else{
	console.log('Det går inte att bada');
}


//Uppgift 4 - Hästtokig!

var age = prompt('Hur gammal är du?');

/*Vi behöver bara kolla vilken ponny som behövs om ålder är inne, därför kan
vi lägga till de if-satser som kollar vikt inuti vår första if-sats. Det gör 
så att vi slipper köra kod som inte behövs köras. */

if (age > 12){
	//Väl inne i if-satsen kan vi fråga efter vikt och spara i en ny variabel
	var vikt = prompt('Vikt?');

	/*Kollar först om vikten är mindre än 30. Vad vi kollar först är dock beroende av
	vilka värden vi förväntar oss, nu förväntar vi oss att de flesta värden ska vara
	under 65. Vi skulle t.ex. kunna kolla först om vikten är över 65*/
	if(vikt <= 30){
		console.log('A-ponny');
	//Sedan kollar vi spannet mellan 30 och 50
	}else if(vikt <= 50 && vikt > 30){
		console.log('B-ponny');
	//Till sist kollar vi spannet mellan 50 och 65
	}else if(vikt <= 65 && vikt > 50){
		console.log('C-ponny');
	}else{
		console.log('Det finns inga ponnys för denna viktklass');
	}
}else{
	console.log('Du är för ung för att tävla!')
}

//Uppgift 5 och 6 - Vad blir det för middag

var day = prompt('Vad är det för dag?');

//Switchen tar in vår variabel som vi skrev in i vår prompt via paranteserna ()
switch(day){
	/*Case vill ha ett exakt värde. Alltså måste vi skriva exakt måndag och inte Måndag
	Dessutom kan det bli problem med t.ex. å/ä/ö tolkas på olika sätt*/
	case "måndag":
		console.log('Kyckling');
		//break; signalerar att caset tar slut, ingen mer kod ska skrivas ut.
		break;
	case "tisdag":
		console.log('Pannkaka');
		break;
	case "onsdag":
		console.log('Ärtsoppa');
		break;
	case "torsdag":
		console.log('Gryta');
		break;
	//om vi tar bort break; och koden i caset så kommer caset gälla för både fre/lör/sön
	case "fredag":
	case "lördag":
	case "söndag":
		console.log('Kålsoppa');
		break;
}

/****************************************
*	 LÖSNINGSFÖRSLAG TILL ITERATION 	*
****************************************/

//Uppgift 1

//deklarera en variabel som ska hålla summan
var sum = 0;

/*Skapa en for-loop som börjar på 0 genom att deklarera en variabel i.
Loopen ska köras 10 gånger så vi använde <= vilket betyder "upp till 10 samt 10"
För varje varv ska vår variabel i öka med 1 */
for ( var i = 0; i <= 10; i++){
	/*När vi lagrar summan ska vi ta det gamla värdet av summa + det nya värdet av i.
	Första varvet är sum = 0 samt i = 0;
	Andra varvet: sum = 0, i = 1. Vi plussar på i till sum
	Tredje varvet: sum = 1, i = 2
	Fjärde varvet: sum = 3, i = 3 */
	sum = sum + i;
}

//Consol loggar det EFTER loopen annars skrivs allt ut flera gånger
console.log(sum);



//Uppgift 2

var num = 10;

/*while-loopens uppgift blir enbart att hålla koll på hur många gånger loopen körs.
I det här fallet ska den göras 10 gånger, från 10 till 0 */
while(num >= 0){
	/*Vi ska även kolla efter om värdet är jämnt, vilket vi kan göra genom att sätta
	en if-sats i loopen. Loopen behöver alltså inte kolla efter rätt värde, vi delar upp
	ansvaret */
	if( num % 2 === 0){
		//Alla tal som är delbara med 2 genom modulo och inte lämnar rest är jämna
		console.log(num);
	}
	//För varje varv måste vi även minska num så att loopen slutar någon gång
	num--;
}

//Uppgift 3

var numberOfSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;


/* Man behöver inte använda var i när man kör loopen. Man kan deklarera en variabel
utanför själva for(){} och använda den variabeln. I det här fallet är monthNumber = 1 (vår start,
monthsToPrint = 12 (vårt stopp) samt att vi måste öka vår räknare: monthsToPrint++ */
for (monthNumber; monthNumber <= monthsToPrint; monthNumber++){
	/*Väl inne i loopen sker ökningen av själva fåren, multiplicerar det ursprungliga värdet
	med 4*/
	numberOfSheep = numberOfSheep*4;
	/* Samt skriver ut variabeln numberOfSheep. Observera att när vi sätter ihop
	strängar och variabler/nummer måste vi använda + för att binda ihop dem */
		console.log('There will be ' + numberOfSheep + ' sheeps after ' + monthNumber +' months(s)!');
}

//Uppgift 4


//Läs in hur många mjau
var numberOfMjau = prompt('Hur många mjau?');

/*Om värdet direkt är 0 behöver vi inte ens gå in i loopen och köra någon kod. Vår kod
kommer då direkt hoppa till console.log() nedanför loopen. */

while(numberOfMjau != 0){
	/* Man kan ju dock inte multiplicera strängar, vilket vi vill göra i det här fallet.
	Vi kan dock lägga in samtliga mjau i en sträng genom en loop*/
	var allTheMjaus = '';
	/*För varje mjau som vi skickar in: lägg till ett mjau i vår variabel som lagrar mjau*/
	for(var i = 1; i <= numberOfMjau; i++){
		allTheMjaus += 'mjau ';
	}
	//Skriv ut den färdiga stränger innehållande alla mjua som vi la till i loopen
	console.log(allTheMjaus);

	//Fråga efter hur många mjau igen, om du skriver in 0 den här gången så avslutas loopen
	numberOfMjau = prompt('Hur många mjau?');
}

//Detta kommer att skrivas ut när loopen är färdig
console.log(':(');

//Uppgift 5

var numberOfSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;

for (monthNumber; monthNumber <= monthsToPrint; monthNumber++){

	/* Vi har liknande kod sen tidigare men nu lägger vi till extra if-satser för att
	kolla så att var fjärde månad ska 75% av populationen tas bort.
	Vi kollar detta INNAN vi multiplicerar våra får annars får vi fel värden.
	ökningen av får kommer efter att alla villkor har kollats:
	För att kolla var fjärde delar vi med 4 och får 0 i rest: modulo 4*/
	if (monthNumber % 4 == 0){
		/*Vi kan skapa en variabel där vi lagrar alla får som ska tas bort
		antalet får som ska tas bort är 75% == 0.75 vilket kan även skrivas som .75 */
		var sheepsToRemove = numberOfSheep * .75;
		//Loggar ut hur många får som ska tas bort
		console.log('Removing ' + sheepsToRemove + ' sheeps from population');
		//Tar nuvarande får minus vår nya variabel med antalet får som ska tas bort
		numberOfSheep = numberOfSheep - sheepsToRemove;
	}
	//Sedan vill vi kolla om populationen är över 10 000 med en else if-sats
	else if (numberOfSheep > 10000){
		/*Samma som tidigare då vi skapade en variabel för att lagra det som ska tas bort
		men nu dividerar vi med 2 istället för att få hälften*/
		var sheepsToRemove = numberOfSheep / 2;
		//Ta bort antalet får
		numberOfSheep = numberOfSheep -sheepsToRemove;
	}
	//Sedan ökar vi vår fårpopulation och skriver ut antalet får
	numberOfSheep = numberOfSheep*4;
	console.log('There will be ' + numberOfSheep + ' after ' + monthNumber + ' month(s)!');
}

//Uppgift 6 - Multiplikation

//Skapar en yttre loop som ska gå igenom talet 1 till 10
for(var i = 1; i <=10; i++){
	//Skapar en inre loop som ska gå igenom talet 1 till 10
	for(var j = 1; j <= 10; j++){
		/*I första iterationen kommer i att vara 1 sedan kommer j att loopa igenom
		1 till 10. Vi kommer alltså logga 1*1, 1*2, 1*3, 1*4 etc. i kommer att vara 1
		tills den inre loopen har kört klart sina tio gånger */
		console.log(i * j);
	}
	/*I den yttre loopen kan vi skapa en ny rad med hjälp av "/n" vilket betyder
	"Newline". när vi skriver detta kommer vår program att byta rad */
	console.log('\n');
	//Efter detta ökar den yttre loopen, i kommer då att vara 2
}


//Lösningsförslag 2 - Multiplikationstabellen

//Skapar en yttre loop som ska gå igenom talet 1 till 10
for(var i = 1; i <=10; i++){
	//Skapar en variabel där vi ska lagra allt vårt resultat
	var multi = "";
	//Skapar en inre loop som ska gå igenom talet 1 till 10
	for(var j = 1; j <= 10; j++){
		/*I första iterationen kommer i att vara 1 sedan kommer j att loopa igenom
		1 till 10. Vi kommer alltså logga 1*1, 1*2, 1*3, 1*4 etc. i kommer att vara 1
		tills den inre loopen har kört klart sina tio gånger */

		//Lägger till strängar som vi lägger till värden. " " bara för att få ett mellanrum
		multi = multi + i*j + " ";
	}
	/*I den yttre loopen kan vi skapa en ny rad med hjälp av "/n" vilket betyder
	"Newline". när vi skriver detta kommer vår program att byta rad */
	console.log(multi);
	//Efter detta ökar den yttre loopen, i kommer då att vara 2
}