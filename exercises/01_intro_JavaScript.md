# Introduktion Javascript
1. Vilken funktion har JavaScript när det kommer till hemsidor?

_Många olika funktioner. Göra hemsidan mer dynamisk och interaktiv. Animera innehållet på sidan. Manipulera innehållet i HTML & CSS. Validera information via formulär. För att nämna några_

2. På vilket/vilka fler ställen än i webbläsaren kan vi använda javascript?

_Förutom via webbläsaren kan kan även köra javascript via Node som möjliggör bland annat att man kan skriva back end i JavaScript_

3. Vad betyder __syntax__?

_Syntax är hur ett programmeringspråk är uppbyggt. Programmeringsspråket måste förhålla sig till en viss syntax. JavaScript måste alltså vara strukturerat på ett specifikt sätt och använder sig av en viss uppsättning av förinställda nyckelord_

### Webbläsarens hantering av Javascript

1. Skriv klart följande kodsnutt så att "Program Complete" skrivs ut i webbläsarens konsol:

```javascript
console.log("Program complete");
```

2. Vad gör en webbläsare när den __exekverar__ kod?

_Exekvering är när programmet körs, när webbläsaren kör vår JavaScript-kod så exekverar den vår kod. Vissa programmeringsspråk måste även först kompilera koden innan den körs_

3. När man lägger till _JavaScript_ på en webbsida, var lägger man oftast till den koden?

_Vanligtvis lägger man den i en separat `.js`-fil som man sedan inkluderar i sin `.html`-fil. Men kan kan även skriva koden inline med hjälp av `<script>`-taggen._

4. Med vilket kommando säger vi åt webbläsaren att öppna en dialogruta med ett meddelande i?

```javascript
alert('Textruta!')
```

5. Vad är fördelen med att lägga _JavaScript_ precis innan stängningstaggen på `body` jämfört med att lägga inom `<head>` ?

_Om man lägger till koden i slutet på `body` så försäkrar man sig om att allt innehåll har laddats in på sidan innan man utför JavaScript på innehållet. Om man lägger script i `<head>` så kan man ibland behöver kontrollera i sin skript-fil att koden inte körs innan allt innehåll är laddat_

1. Vad använder vi JavaScript-konsolen till?

_Främst användningsområdet för oss blir att debugga vår kod, skriva ut värden och se om de blir rätt eller om över huvudtaget koden körs_

2. Skriv klart koden nedan för att ladda filen `app.js`

```html
<script src='app.js' ></script>
```
3. Skriv klart koden nedan för att skriva ut innehållet innanför paranteserna till webbsidan

```javascript
document.write("Look mom, I'm learning computers!!");
```

4. Vad är ett __syntax error__?

_Syntax error blir när vi har missat något i hur vi strukturerar vår kod. Detta brukar oftast vara att vi har missat ett semikolon ; eller en parantes (). Koden måste som sagt vara struktuerad på ett specifikt sätt, enligt JavaScript-syntax. Om man bryter mot strukturen får man ett error_

### Introduktion Variabler

1. Skriv kod för att skapa en variabel som heter time. Den ska vara tom.

```javascript
var time;
var time = '';
```
2. Vilket av följande alternativ är ett giltligt namn för en variabel?

```javascript
//a) 
2_to_go  
//b)
$perPound
//c)
var  
//d)
%remaining
```
_För att se över vilka variabelnamn som är godkända så kan man använda detta verktyg:

[https://mothereff.in/js-variables](https://mothereff.in/js-variables)_

### Strängar och nummer

1. Vilken av följande skapar en variabel message och lagrar en sträng med korrekt syntax?
```javascript
//a)
message = "These are not the potatoes you're looking for";
//b)
var message = 'These are not the potatoes you're looking for';
//c)
var message = "These are not the potatoes you're looking for';
//d)
Inget av de ovanstående alternativen
```

_Svar: d) inget av ovanstående_

2. JavaScript ignorerar whitespace, tabbar, mellanslag och nya rader i många fall. Vilket av alternativen nedanför kommer att ge ett JavaScript error?
```javascript
// a) 
var daysInWeek = 7;
//b) 
var days In Week = 7;
//c) 
var daysInWeek=7;
//d) 
var                          daysInWeek =              7;
//e) 
Inget av alternativen
``` 

_Svar: b) var days In Week = 7;_