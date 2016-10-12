/*****************************************************
* 			Lösningsförslag - Objects		 		 *
*****************************************************/

//Skapa ett objekt

/* Curly brackets skapar ett nytt objekt. Varje värde i ett objekt måste 
 * vara bundet till en property. I det här objektet är första property
 * 'albumName' med värdet "Trouble Will Find Me". Värdet och propertyn
 * är separerade med : och varje property/value-par är separerade med komma
 */
var album = {
	albumName: "Blue",
	artist: 'Joni Mitchell',
	year: 1971
};

console.log(album);

//Komma åt värden


//Punktnotationen är att föredra men båda fungerar. JSHint säger att man inte
//ska använda den senare.

console.log(album.albumName);
console.log(album["albumName"]);


// Skapa en kopia

var dublett = album; //Som att tilldela ett värde

//Dessa värden är dock länkade, dublett är inte en kopia av album utan de pekar på samma objekt
console.log(dublett);
console.log(album);


//Ta bort en property


//Observera att detta tar bort property på båda objektet, de är länkade till varandra
delete dublett.year;

console.log(dublett);
console.log(album);


// Ändra ett värde

//Observera att detta ändrar property på båda objektet, de är länkade till varandra

dublett.artist = "Cher";

console.log(dublett);
console.log(album);


// Loopa igenom properties


//Prop blir en tillfällig variabel som används för att loopa samma som när vi brukar
//använda i för att loopa. Dock sköter den här loopen mycket själv, vi behöver inte 
//ange start stop etc. Den loopar bara igenom alla värden i objektet eller arrayen vi anger

for(var prop in album){
    console.log(prop);
}

//Loopa igenom värden

//Liknande som förra loopen. bara prop skriver ut vår property. Dock om vi skickar med
//vår property som index får vi ut själva värdet.
for(var prop in album){
    console.log(album[prop]);
}
