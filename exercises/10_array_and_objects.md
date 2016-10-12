# Array & Objekt - Fördjupning

## Arraymetoder

### Pop Pop!

Ibland vill man ta bort ett värde ur en array, då finns det olika inbyggda metoder man kan använda. Det vanligaste brukar vara att man använder `.pop()`. `.pop()` tar ut det sista värdet ur en array.

```javascript
var popArray = [5, "hello", 54, 17, 23];
```

1. Poppa sista värdet i arrayen ovan. 
2. Fortsätt poppa tills arrayen är tom skriv ut i console.log efter varje pop
3. Console.logga arrayen till slut för att se att alla värden är borta.

## Push

Nu har vi tagit bort alla värden, det var ju dumt. Men vi kan lägga till nya värden med `.push()`. `.push()` lägger till ett nytt värde sist i arrayen.

```javascript
popArray.push(12);
```

1. Lägg till ett nytt värde i din array med push.
2. Lägg till två nya värden samtidigt med push!

### Shift

`.shift()` tar också ut värden ur en array. Denna metod tar dock ut det första värdet i en array.

1. Shifta arrayen två gånger med `.shift()`
2. Console.logga arrayen efter varje gång du shiftar för att se innehållet i arrayen.

### Unshift

Det finns även en `.unshift()` som är `.shift()`s motsats. Istället för att lägga värdet sist i arrayen som `.pop()` gör så läggs värdet nu först i arrayen.

1. Använd `.unshift()` för att lägga till två valfria värden i arrayen.
2. Logga ut arrayen efter varje `.unshift()` för att se resultatet.

## Splice

`.splice()` används för att ta ut den del av en array. Man kan skicka med ett argument som säger vilket index som beskärningen ska ske. Splice fungerar ungefär som `.substring()`. 

1. Ta ut de 2 sista värdena i din array med metoden `.splice()`.
2. Ta ut de 2 sista värdena i din array med metoden `.splice()` och lagra dessa värden i en ny array.
3. Logga ut båda arrayerna för att se innehållet efteråt.

### Splice 2  - The Return

Splice kan även ta ett andra argument så som substring. Det andra värdet blir hur många värden som ska plockas ut. `.splice(0,2)` börjar på index 0 och tar ut två värden.

1. Ta ut de två mellersta värdena i din array och lagra dem i en ny array.

### concat

```javascript
var myArray1 = [1,2,3];
var myArray2 = [4,5,6];
```

Metoden `.concat()` kan sätta ihop två arrayer till en array. Vi har stött på ordet _concat_ förut, det är ett vanligt förekommande ord som betyder att man sätter ihop två saker.

1. Sätt ihop arrayerna ovan med hjälp av `.concat()` och lagra den nya arrayen i en ny variabel.

## Sort 1

Det finns en inbyggd sorteringsfunktion som kan användas på arrayer som sorterar alla värden i arrayen baserat på dess värde. 

1. Sortera arrayen nedan med hjälp av `.sort()`
2. Console.logga sedan arrayen så att du ser att arrayen har blivit sorterad

```javascript

var sortingArray = [ 45, 23, -5, 12];
```

## Sort 2

Men hur blir det när vi ska sortera värden som inte är nummer?

Sortera följande array med `.sort()` och se vad som händer! Testa att använda olika sorters värden och se hur det sorteras.

```javascript

var crazySort = ["string", "hej", "what", "wordsyo"];
```

## Reverse

Det finns redan en inbyggd funktion som vänder på vår array så vi slipper loopa igenom och vända på den själva

1. Använd `.reverse()` för att vända på din numera sorterade array!

## Objektmetoder

### Lägg till en funktion i ett objekt

Ett objekt är en variabel som innehåller flera andra variabler. En funktion är också en variabel. Om vi lägger ihop det vi nu vet betyder det att en funktion kan lagras i ett objekt. Om vi har ett album som vi skapade tidigare:

```javascript
var album = {
    albumName: "Trouble Will Find Me",
    artist: "The National",
    year: 2013,
    getContent: function(){
        return "The album "  + this.albumName + " by " + this.artist + " was released in " + this.year;
    }
};
```

Namnet på funktionen blir `getContent` och är vår property i objektet, värdet på denna property blir en anonym funktion. När vi sedan vill använda oss av denna funktion kan vi kalla på den med `album.getContent()`.

Den mest förvirrande delen av detta är att vi inte kan referera till variablerna i objektet genom deras namn enbart. Vi måste referera till dem med hjälp av `this.`. `.this` syftar på just det här objektets variabler. this är ett nyckelord. Det indikerar att variablerna hör till just det här objektet.

1. Använd koden ovan men skapa ytterligare en funktion i objektet. Denna funktion ska använda sig utav `year` och beräkna hur länge sen det var albumet släpptes. Funktionen ska returnera följande:
`This album was release 3 years ago`. Där årtalet ska ändras beroende på vilket år ditt album släpptes.

### Object constructor

Vi vill oftast göra många olika album med olika innehåll. Då kan det vara bra att använda en __constructor__. Det är också här `this.` kommer in tydligare i bilden. En __constructor__ kan skapa flera olika objekt utifrån samma "mall". Vi defininerar hur objektet ska se ut. Sedan kan vi skapa flera olika objekt genom att använda samma kod. Se detta exempel:

```javascript

//Vi skickar med 3 parametrar
function album(albumName, artist, year){
    //Lagrar paramterarna till varje nytt enskilt skapat objekt med this.
    this.albumName = albumName;
    this.artist = artist;
    this.year = year;
}

//Genom att kalla på album kan vi nu skapa flera olika objekt med hjälp av album
var newAlbum = new album("Album", "artist", 1873);
var newAlbum = new album("Album", "artist", 1873);
```

### Vad är det för typ?

Använd koden ovan och kolla sedan vad de olika objekten har för typ med `typeof` på följande sätt:

```javascript
console.log(typeof album);
console.log(typeof newAlbum);
console.log(typeof newAlbum.artist);
```

### Create your weapon

1. Använd strukturen ovan (`album()`) och skapa en egen object constructor. 
2. Objektet ska ha namnet `weapon`;
3. Objektet ska ta två parametrar: `type` och `damage`
4. Värdena ska lagras med hjälp av `this.`
6. Du ska sedan med hjälp av objektet kunna skapa olika sorters vapen genom att kalla på detta constructor-objekt via nyckelordet `new` och sedan lagra vapnet i en ny variabel.

### Slay the monster

Whaa, ett monster!

```javascript
function monster(name, health){
    this.name = name;
    this.health = health;
    this.speak = function(){
        console.log(this.name + " hungry! " + this.name + " kill!");
    }
}

var grublak = new monster("Grublak", 500);

grublak.speak();

```

1. Du har redan ett vapen som kan skada monstret från förra uppgiften.
2. Vi måste bygga en funktion som kan ta ner Grublak. Funktionen ska ta två argument, det ena argumentet ska vara ditt vapen och det andra argumentet ska vara monstret: `function slayMonster(weapon, monster){}`.
3. Funktionen ska sedan jämföra skadan från ditt vapen med livet på monstret.
4. Om `damage` är högre eller lika med monstrets `health` ska funktionen skriva ut `Ouchy, me dead.`
5. Om skadan inte är högre än hälsan på monstret ska skadan subtraheras (-) från monstrets `health`.
6. Funktionen ska fortsätta köras tills monstret är dräpt. D.v.s när `damage` är högre än `health`.

### Critta monstret!

1. Du kan nu döda monstret. Men det kanske tar lite tid beroende på hur mycket skada ditt vapen gör. Grublak är dock svag mot vapen av typen `Tenta`
2. Ändra i din funktion `slayTheMonster` så att om vapnet är av typen `Tenta` så tar Grublak dubbel skada.
3. Du har också turen på din sida. Ibland kan du få in en lyckosam crit så att du gör dubbel skada oberoende av vilket vapen du har. Det är 20% chans att du crittar.
4. Lägg till i din funktion så att du gör __dubbel__ skada på monstret om du går en critical hit.


### Slay all the monsters

1. Skapa en array av olika monster. Yes, man kan ha en array av objekt.
2. Loopa sedan igenom alla monster med din funktion. Antingen genom att ha en loop inuti funktionen eller genom att kalla på funktionen `slayTheMonster` i en loop.



