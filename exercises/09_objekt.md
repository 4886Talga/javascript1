# Objekt

## Intro
Objekt är grunden till det mesta i JavaScript. Nästan allting i JavaScript är ett objekt. Enkelt sagt används de för att lagra data på liknande sätt som en array men ett objekt är mer användbart. Delvis är det mer användbart eftersom man kan namnge alla variabler man sparar istället för att referera till dem via ett index. Objekt har olika `property` som är bundet till ett `value`. Property är namnet man refererar till som när vi använder oss av en variabel, `value` är värdet på denna property.

```javascript

var myObject = {};

```

Ett objekt skapas på detta sätt med hjälp av två curly brackets för att indikera att det är ett objekt.

```javascript

var teacher = {
    name: 'Jesper',
    age: 25
};
```

Ovan har vi ett enkelt objekt. Precis som med en array öppnar vi och stänger objektet med brackets. Varje par är separerade med komman. För att visa vad som är en property name och vad som är value separerar vi dem med kolon: `:`. Nu kan vi använda oss av dessa värden på detta sätt med punktnotation:

```javascript

var teacher = {
    name: 'Jesper',
    age: 25
};

console.log(teacher.name);
//Output: Jesper
```

## Övningar

### Skapa ett objekt

Skapa ett liknande objekt som ovan. Objektet ska dock den här gången vara ett album, alltså en skiva. Variabeln ska heta `var album` och ska ha tre properties: `albumName`, `artist`, `year`. 
* `albumName` ska vara en sträng med namn på valfritt album
* `artist` ska vara artisten som gjort albumet i form av en sträng
* `year` ska vara utgivet år i form av ett nummer.

Skriv sedan ut ditt objekt med console.log

### Skriv ut innehållet i ett objekt

För att komma åt en specifik property kan vi använda två sätt:

```javascript
album["albumName"];

album.albumName;
```

Det nedre är att föredra men det förekommer tillfällen där vi måste använda den övre notationen på vissa sätt så det är bra att känna till båda. Båda sätten ovan kommer att skriva ut samma värde. 

Skriv ut någon av dina properties i ditt objekt med båda av dessa sätten.

### Skapa en kopia av ett objekt

Du ska nu skapa en ny variabel som heter `var dublett`. I denna variabel ska du nu tilldela ditt album som du skapade i förra övningen. Du ska sedan logga ut både variabeln `album` samt variabeln `dublett` för att se vad de har för innehåll.

### Ta bort en egenskap från ett objekt

Man kan ta bort en property from ett objekt helt genom att skriva `delete object.property` om vi nu skulle vilja ta bort året från vårt objekt från tidigare skulle vi då skriva `delete album.year`. 

1. Ta bort någon av properties från objektet `dublett` som ni skapade tidigare
2. Console.logga sedan ut båda objektet: `album` samt `dublett` för att se deras innehåll är.


### Ändra ett värde i ett objekt

* Ändra ett värde i ett av objekten, antingen `album` eller `objekt`. 
* Console.logga sedan båda objekten
* Vad för innehåll har de båda objekten efter operationen?

### Loopa genom ett objekt

För att loopa igenom objekt finns det speciella loopar som underlättar iterationen för oss. `for..in`-loopen låter oss enkelt loopa igenom properties i ett objekt.

```javascript
for(property in object){
    console.log(property);
}
```

* Använd `for..in`-loopen för att skriva ut alla dina properties i objektet som du skapade tidigare.

### Loopa igenom properties

Just nu får vi bara ut properties men vi får inte ut alla värden. Varje värde i varje propertiy kan kallas på genom `object.property` eller genom `object["property]`, då får vi ut värdet. Detta kan även användas om man ska få ut värdena i en loop.

```javascript
for(property in object){
    console.log(object[property]);
}
```

För varje iteration i loopen får vi ut vad propertien heter. Denna property kan vi sedan använda för att komma åt ett värde i en property genom att hämta värdet från objektet med `object[property]`. Istället för att komma åt värdet via ett index använder man nu istället namnet på propertien.

1. Loopa igenom och skriv ut varje värde i ditt tidigare skapade objekt
2. Loopa igenom och skriv ut namnet på varje property samt värdet på den propertyn


## En funktion som skriver ut objektet

1. Skapa en funktion `printContent` som tar ditt (ett) objekt som argument. 
2. Funktionen ska sedan skriva ut alla värden i objektet och returnera en sträng på liknande sätt: `The album Blue by Joni Mitchell was release in 1971`.











