/*****************************************************
* 		Lösningsförslag - Object constructor		 *
*****************************************************/


/* Curly brackets skapar ett nytt objekt. Varje värde i ett objekt måste 
 * vara bundet till en property. I det här objektet är första property
 * 'albumName' med värdet "Trouble Will Find Me". Värdet och propertyn
 * är separerade med : och varje property/value-par är separerade med komma
 */
var album = {
    albumName: "Trouble Will Find Me",
    artist: "The National",
    year: 2013,
    getContent: function(){
        return "The album "  + this.albumName + " by " + this.artist + " was released in " + this.year;
    },
    /* getYear är vår property, men istället för ett värde har vi nu en anonym 
     * funktion som returnerar en sträng. Här kan vi skicka med en parameter
	 * som säger vad vårat nuvarande år är.
     */
    getYear: function(currentYear){
    	// använder oss av this.year som innehåller albuments releasedatum
    	return "This album was released " + (currentYear - this.year) + " years ago";
    }
};

//När vi kallar på funktionen skickar vi med 2016 som argument som blir till currentYear
console.log(album.getYear(2016));


//Vad är det för typ

function Album(albumName, artist, year){
    //Lagrar paramterarna till varje nytt enskilt skapat objekt med this.
    this.albumName = albumName;
    this.artist = artist;
    this.year = year;
}

/* Genom att kalla på album kan vi nu skapa flera olika objekt 
 * med hjälp av constructorn 'Album'
 */

var newAlbum = new Album("Album", "artist", 1873);

console.log(typeof Album); //Album är en funktion
console.log(typeof newAlbum); //newAlbum är ett objekt skapat utifrån funktionen
console.log(typeof newAlbum.artist); //artist är en sträng eftersom det är värdet på artist



//Uppgifterna om monstret och vapnet

/* Definiera constructorer. Dessa funktioner används för att 
 * skapa objekt och innehåller inga värden. När vi skapar objekten
 * med 'new' lagrar vi dessa värden i varje objekt med hjälp av
 * 'this' 
 */
function Monster(name, health){
	this.name = name;
	this.health = health;
	this.speak = function(){
		console.log(this.name + " hungry! " + this.name + " kill!");
	};
}

function Weapon(type, damage){
	this.type = type;
	this.damage = damage;
}

/* Det finns flera olika sätt att lagra objekt i en array
 * och här är tre olika sätt. Testa skriv ut 'typeof' på
 * samtliga objekt i arrayen och se om det är någon skillnad
 * på dem.
 */
var grublak = new Monster("Grublak", 600);

var monsters = [
	grublak,							//Lagrar en variabel med ett objekt i
	{name: "Frufflak", health: 1000}, 	//Lagra ett objekt direkt
	new Monster("Slutbossen", 12000) 	//Lagra ett nytt objekt av typen monster utifrån vår constructor
];

//Skapa vårt vapen
var newWeapon = new Weapon('Tenta', 100);


/* Definiera funktionen som ska göra alla beräkningar.
 * Funktionen ska ta två objekt: weapon och monster. 
 */
function slayTheMonster(weapon, monster){

	/* Underlättar att lagra variablerna lokalt i funktionen så 
	 * vi slipper referera till objekten hela tiden samt att vi
	 * inte behöver manipulera själva objektet utan bara lokala 
	 * variabler 
	 */
	var health = monster.health;
	var damage = weapon.damage;
	var dice; // Skapar en variabel som ska hålla vårt slumpnummer

	//Så länge monstret fortfarande har health ska vi fortsätta göra damage
	while (health > damage){

		/* Vi vill kolla om det är critchans på varje damage. Därför
		 * definierar vi vårt random number inuti loopen så att ett
		 * nytt värde skapas för varje damage. */

		dice = Math.random();

		//Om damage är under 0.2 av 1 (20%) så ska vi critta
		//Man skulle även kunna göra så att man kan critta på vapnet "tenta"
		//D.v.s. att "tenta" ger 4x skadan. Implementera det om ni vill :)
		if (dice < 0.2 || weapon.type.toLowerCase() === "tenta"){
			health = health - (damage*2);	//Isf ska vi ta damage * 2

			console.log('Ya crit boi!');	//Så vi vet att vi crittar
		}	

		//Annars ska vi enbart subtrahera damage
		health = health - damage; 
		//Skriv ut hur mycket health monstret har kvar för säkerhets skull
		console.log( monster.name + " health remaining: " + health);

	}
	/* När monstret inte har någon health kvar så slutar loopen
	 * och det kommer att skrivas ut att monstret är dräpt */

	console.log("Ouch, me " + monster.name + " dead ");
}


/* Om vi har en array av objekt kan vi loopa igenom objekten på flera
 * olika sätt. Vi kan t.ex. använda 'for..in'-loopen. Ett annat sätt att
 * lösa detta vore att istället ha loopen inuti själva funktionen. Sedan
 * Kan vi skicka med en array som ett argument.
 */

for (var monster in monsters){

	 /*Om vi bara skriver ut monster får vi index. Dock kan vi få ut objektet
	 * genom att skicka det indexet till monsters, alltså arrayen.
	 */
	 
	slayTheMonster(newWeapon, monsters[monster]);
}



//Funktion med loop inuti funktionen
function slayTheMonsterS(weapon, monsters){

	/* Underlättar att lagra variablerna lokalt i funktionen så 
	 * vi slipper referera till objekten hela tiden samt att vi
	 * inte behöver manipulera själva objektet utan bara lokala 
	 * variabler 
	 */
	for (var monster in monsters){
		var health = monsters[monster].health;
		var name = monsters[monster].name;
		var damage = weapon.damage;
		var dice; // Skapar en variabel som ska hålla vårt slumpnummer

		//Så länge monstret fortfarande har health ska vi fortsätta göra damage
		while (health > damage){

			/* Vi vill kolla om det är critchans på varje damage. Därför
		 	* definierar vi vårt random number inuti loopen så att ett
		 	* nytt värde skapas för varje damage. */

			dice = Math.random();

			//Om damage är under 0.2 av 1 (20%) så ska vi critta
			if (dice < 0.2 || weapon.type.toLowerCase() === "tenta"){
				health = health - (damage*2);	//Isf ska vi ta damage * 2

				console.log('Ya crit boi!');	//Så vi vet att vi crittar
			}	

			//Annars ska vi enbart subtrahera damage
			health = health - damage; 
			//Skriv ut hur mycket health monstret har kvar för säkerhets skull
			console.log( name + " health remaining: " + health);

		}
		/* När monstret inte har någon health kvar så slutar loopen
	 	* och det kommer att skrivas ut att monstret är dräpt */

		console.log("Ouch, me " + name + " dead ");
	}
}


//Kalla på funktionen
slayTheMonsterS(newWeapon, monsters);