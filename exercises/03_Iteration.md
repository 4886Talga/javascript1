# Iteration

Ibland behöver vi göra samma sak många gånger. Ibland behöver vi göra samma sak fast med en liten variation flera gånger. Så fort vi behöver göra någonting flera gånger bör vi se det som en ledtråd till att vi behöver iterera.
Som tumregel kan du tänka att vi använder for-loopar när vi vet hur många varv vi vill ”snurra” (iterera), och while-loopar när vi inte vet antalet varv.

## For-loopar
Låt oss färska upp minnet med hur man skriver en for-loop. Vi exemplifierar genom att skriva en snutt kod som skriver ut 0 till 10

```javascript
for(var i = 0; i <= 10; i++){
	console.log(i);
}
```

Men låt oss analysera vad som händer i rad två lite närmare. När vi definierar en for-loop kan vi se det som att vi ger den tre saker separerade med semi-kolon (;). Dessa tre är i ovan exempel:

1. var i = 0;
2. i < 10;
3. i++;

Detta kan översätta ungefär till:

1. Deklarera en variabel vi vill använda som räknare.
2. Definiera ett condition, hur länge vi ska räkna
3. Inkrementera en variabel, hur mycket vår räknare ska öka

## FOR - Summera

Använd loopen ovan, fast istället för att skriva ut varje siffra: Lägg ihop sifforna i en ny variabel samt skriv ut den variabeln med console.log

## While & Modulo - Skriv ut jämna tal

Skriv en while-loop med ett condition som gör så att endast siffror som är __jämna tal__ skrivs ut till konsolen.

Låt loopen göra detta från 10 till 0.
Använd koden nedan:

```javascript
var num = 10;
while(){
	//Din kod
}
```

## FOR - Fårinvasion

Mina får förökar sig snabbt och jag behöver en webbapp som kan räkna ut hur 
många de kommer att vara inom ett år. Varje månad kommer fåren att
multipliceras med 4. 

Använd dessa tre variabler nedanför:

```javascript
var numberOfSheep = 4;
var monthNumber = 1;
var monthsToPrint = 12;
```

För att sedan skriva ut detta för varje månad:

```bash
Output:
There will be 16 sheep after 1 month(s)!
There will be 64 sheep after 2 month(s)!

```

## Mjau Machine!

Jag vill ha ett program som mjauar!

Programmet fungerar som så att den frågar användaren efter hur många mjau den vill ha. Om användaren skriver "3", ska programmet svara med "mjau mjau mjau". Om användaren skriver "4" ska programmet svara med "mjau mjau mjau mjau". Om användaren skriver "0" ska programmet "avslutas", d.v.s. inte ta in mer input.
Programmet ska fungera som följande: 

1. Läs in ett tal ifrån användaren
2. Om talet är inte är 0

	a. Skriv lika många "mjau" som talet, i rad

	b. Återgå till 1
	
3. Annars skriv ut ":(" och låt inte användaren fortsätta skriva in siffror.

## FOR - Fårepidemi

Det här funkar inte! Även om vi halverar antalet får är
det fortfarande alldeles för många. Implementera följande 
conditions innan vi går mot en epedemi!

1. Om månaden är en multipel av 4, hitta 75% av populationen.
Logga ut antalet i formatet som visas nedanför. Ta sedan bort
detta antal från totala antalet får.

2. Annars, om populationen är över 10000, hitta hälften av populationen.
Logga ut antalet i formatet som visas nedanför. Ta sedan bort 
detta antal från totala antalet får.

Använd följande format för att logga ut information:
Removing `<number>` sheep from the population.

Antalet får ska fortfarande alltid multipliceras med 4,
du behöver alltså inte editera någon redan existerande kod sedan tidigare


KORREKT OUTPUT:

There will be 16 sheep after 1 month(s)!

There will be 64 sheep after 2 month(s)!

There will be 256 sheep after 3 month(s)!

Removing 192 sheep from the population.

There will be 256 sheep after 4 month(s)!

There will be 1024 sheep after 5 month(s)!

There will be 4096 sheep after 6 month(s)!

There will be 16384 sheep after 7 month(s)!

Removing 12288 sheep from the population.

There will be 16384 sheep after 8 month(s)!

Removing 8192 sheep from the population.

There will be 32768 sheep after 9 month(s)!

Removing 16384 sheep from the population.

There will be 65536 sheep after 10 month(s)!

Removing 32768 sheep from the population.

There will be 131072 sheep after 11 month(s)!

Removing 98304 sheep from the population.

There will be 131072 sheep after 12 month(s)!


## FOR FOR - Multiplikation

Använd nested for loops, alltså en for-loop i en for-loop för att lösa denna uppgift.

Din kod ska skriva ut multiplikationstabellen upp till 10 enligt följande struktur:


1 2 3 4 5 6 7 8 9 10
----------------------
2 4 6 8 10 12 14 16 20
----------------------
3 6 9 12 15 18 21 24 27 30