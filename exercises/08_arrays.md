# Arrays

Nedan kommer lite övningar för att öva er på att jobba med arrayer. För att skapa en array använder man följande syntax:

```javascript
var myArray = [];
```

Detta skapar en tom array, `[]` indikerar att det är en array som skapas.

```javascript
var myArray = [ 1, 2, 3];
```

Varje värde i en array är separerade med ett komma. Det ska dock inte vara ett komma efter det sista värdet. Detta är en array med tre värden. Värde 1 har index 0, värde 2 har index 1 samt värde 3 har index 2. Platsen i arrayen börjar räknas ifrån 0.

## Komma åt värden i en array

Vi ska börja med att skriva ut olika värden i en array. Om vi har en array som denna:

```javascript
var yourArray = [23, 45, 54, 12, 77];
```

1. Skriv ut det första och sista värdet (23 & 77) i denna array med hjälp av console.log. 
2. Vilka index ligger värdena på?

## Ändra ett värde i en array

Om vi redan har en array som den ovan kan vi även direkt ändra på ett visst värde på samma sätt som när vi tilldelar en variabel ett värde med `=`.

1. Ändra sista värdet i `yourArray` genom att tilldela det nya värdet `1`.
2. Console.logga arrayen efter att du har lagrat det nya värdet för att se att värdet verkligen har ändrats.

## Loopa genom en array

För att komma åt alla värden i en array vill vi ju inte skriva in varenda index, speciellt inte om vi inte vet hur lång arrayen är, alltså hur många värden som finns inuti den. Vi kan inte bara skriva ut hela innehållet i  arrayen med `console.log(myArray);` heller, det kommer bara att skriva ut hela arrayen och inte alla värden för sig. Tur att loopar finns.

Du har denna array:

```javascript
var bestArray = [ 1, 2, 3, 4, 5];
```

Nu ska du loopa igenom arrayen och skriva ut varje värde i arrayen. Tänk på att längden av en array kan man ta ut med `.length` samt att varje värde i en array har ett index som man kommer åt värdet ifrån.

## Loopa och multiplicera

Använd samma array som tidigare. Nu ska du dock loopa igenom arrayen och multiplicera varje värde i arrayen med summan av det föregående värdet. D.v.s, 1 * 2 * 3.. etc.

Spara värdet i en `var sum` och console.logga sedan ut denna variabel efter att loopen har körts klart

## Filtrera array efter längd på innehållet

Du ska utgå från följande array:

```javascript

var okArray = [ "fine", "FINE", "good", "what is this stuff?", "sweet", "i don't even live here"];
```

Du ska loopa igenom arrayen och console.logga dess värden. Dock ska din loop inte skriva ut strängar som är längre än 5 tecken. `"fine"`, `"FINE"`, `"good"` och `"sweet"` ska alltså skrivas ut men inte `"whatisthisstuff?"` och `"i don't even live here"`. 

Kom ihåg att man kan ta ut en strängs längd på samma sätt som man tar ut längden på en array.

## Filtrera array beroende på innehåll

Om vi kan filtrera efter hur lång en sträng är kan vi även filtera arrayen baserat på andra kriterier. Om vi använder samma array som tidigare ska vi nu bara skriva ut strängen i arrayen om strängen är `"fine"`. Detta gäller alltså för både `"fine"` och `"FINE"`.

## Filtrera array baserad på sträng eller nummer

```javascript
var worstArrayYet = ["string", true, 42, "another string", 54, null, 12];

```

Vi kan använda `typeof` eller `isNaN()` för att vad för typ någonting är, om det t.ex. är en funktion eller en sträng. Ta hjälp av `typeof` eller `isNaN()för att lösa denna uppgift.

Du ska loopa igenom arrayen `worstArrayYet` och ska sedan console.logga varje sträng som förekommer i arrayen. Men om värdet i arrayen är ett nummer ska det värdet läggas till i `var sum;` för att sedan console.loggas. Om det är något annat än en sträng eller ett nummer ska ingenting ske.




