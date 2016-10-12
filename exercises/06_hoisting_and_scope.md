# Funktioner: Hoisting & Scopes

## Intro

Först kommer några läsövningar sedan kommer övningar där du ska skriva kod. Till alla övningar kan det vara bra att följa hur koden körs. Detta gör vi lättast genom __Debuggern__ i Developer Tools. Sätt ut breakpoints och följ koden på samtliga läsövningar.

### Felsök koden

Vad finns det för problem med koden nedan? Är den körbar? Ja? Nej? Motivera i din kod. Kör sedan koden för att se om du hade rätt. Vad beror svaret på?

```javascript
var name = prompt('Skriv ditt namn');
greeting(name);

var greeting = function(name){
    console.log("Hello there" + name);
};
```

<details> 
  <summary>Svar: </summary>
    Function Expressions blir inte hoisted. Vi kan alltså inte kalla på funktionen förrän den är deklarerad. Om vi skulle använda `function greeting(){}` skulle detta gå att göra.
</details>

## Scoping

Jo, det finns mer än ett fel med koden, vad kan det mer vara för fel?
Tänk på vad vi vet om scopes och hur vi deklarerar variabler i olika scopes.

```javascript
var name = prompt('Skriv ditt namn');
greeting(name);

var greeting = function(name){
    console.log("Hello there" + name);
};
```

<details> 
  <summary>Svar: </summary>
    Variabeln `name` är global och vi använder den inuti vår funktion. I det här fallet spelar det ingen roll vad parametern heter eftersom vår funktion ändå använder den globala variablen inuti funktionen. Den globala variablen borde inte heta samma som variabeln som ska användas i funktionen.
</details>

## Hoisting

Utan att köra koden. Vad kommer console.loggas när vi skriver ut funktionen på detta sätt? 

Varför kommer det att alertas? Motivera i en kommentar i din kod. Kör sedan koden för att se resultatet. 

```javascript
var hoisterFunction = function() {
  var a = 1;
  alert(a + " " + b + " " + c);
  var b = 2;
  var c = 3;
};
hoisterFunction();
```

<details> 
  <summary>Svar: </summary>
  Alerten kommer att alerta `1 undefined undefined`. Detta är för att variabeldeklarationer hoistas, alltså flyttas upp. Dock så flyttas bara deklarationen upp. Så deklarationen blir `var a; var b;` men värdena flyttas inte upp när variablerna hoistas.
</details>

### Hoisting 2

Utan att köra koden. Vad kommer console.loggas när vi skriver ut funktionen på detta sätt? 

Varför kommer det att loggas? Motivera i en kommentar i din kod. Kör sedan koden för att se resultatet. 

```javascript
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
```

<details> 
  <summary>Svar: </summary>
  Man ska inte skriva kod efter att man har returnat något från en funktion. Dock så hoistas funktionsdeklarationen i det här fallet och hamnar ovanför return och blir den senaste deklarerade funktionen med namnet `choosenMystery`
</details>

### Wow, more hoisting

Utan att köra koden. Vad kommer console.loggas när vi skriver ut funktionen på detta sätt? 

Varför kommer det att loggas? Motivera i en kommentar i din kod. Kör sedan koden för att se resultatet. 

```javascript
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
```

<details> 
  <summary>Svar: </summary>
  I det här fallet returnerar vi en funktion. Dock så använder vi inte den funktionen eller lagrar den på något sätt. När vi då console.loggar `oddFunction` kommer konsollen att skriva ut själva funktionen och inte vad funktionen returnerar.
</details>

### Hey Brother

Nu ska vi jobba med att skicka funktioner som argument!

1. Skapa en funktion som heter `heyBrother` och som console.loggar _"Hej hej på dig min bror"_.

2. Skapa sedan en `setInterval`-funktion som kör `heyBrother` 1 gång i sekunden.
`heyBrother` är alltså argumentet och intervallet är andra argumentet.

### heyBrother delay

Använd den förra funktionen `heyBrother`. Nu ska `heyBrother`-funktionen skrivas ut efter ett delay på 3 sekunder. Ta hjälp av `setTimeout`-funktionen, första argumentet är vilken funktion som ska köras och andra argumentet är efter hur lång tid funktionen ska köras.

## Anonymous brother

Du ska nu använda `setInterval`-funktionen igen. Denna gång ska du istället skicka med en anonym funktion som argument istället för `heyBrother`-funktionen. Den anonyma funktionen ska skriva ut "Hej hej på dig min anonym" och intervallet ska vara var tredje sekund.

## Refactor this brother

Okej, nu vet vi att vi kan skicka med en funktion samt ett intervall till `setInterval`-funktionen. Vi kan både skicka med en anonym funktion samt en namngiven funktion. Vi vill dock inte ha en `setInterval`-funktion som ligger och skräpar såhär i _global scope_.

1. Skapa en funktion som tar en funktion som första argument och ett heltal som andra argument.
2. Inuti funktionen ska du sedan använda dig utav `setInterval`. `setInterval` ska ta dina parametrar som argument. Heltalet som skickas in ska bestämma intervallet och funktionen som skickas med får vara vad som helst, här kan du återanvända `heyBrother`-funktionen om du inte vill skriva ytterligare en funktion.


## Callback

En callback är en funktion som skickas med som argument. Det är meningen att en callback ska kallas på efter att den ursprungliga funktionen har kört klart sin kod. Vi skickar som tidigare med en funktion som en parameter, men som ska köras när funktionen har körts klart:

```javascript
//Sista parametern är en funktion
var impressiveMath = function(x, y, callback){
  var number = x + y;
  //Kallar på vår funktion som vi skickade med som parameter.
  //Argumentet som vi senare skickar med är vår consoleLogger-funktion
  callback(number);
}

//Funktionen som ska köras som callback, tar ett argument
var consoleLogger = function(number){
  console.log("Gotta callback this number: " + number);
}
//Kalla på båda funktionerna, observera argumenten
impressiveMath(5,5, consoleLogger);
```

Kör koden ovan i debuggern med breakpoints för att se hur programmet flödar.

Nu till övningen

1. Du ska skapa två funktioner.
2. Den första funktion ska heta `multiply` ska ta ha tre parametrar: `x`, `y` och `callback`. 
3. Den andra funktionen ska heta `divideAnswer` och ha en parameter `answer`. 
4. Den första funktionen ska multiplicera `x` och `y` och spara svaret i e ny variabel. Sedan ska funktionen kalla på `callback` med den nya variabeln.
5. Den andra funktionen `divideAnswer` ska ta parameter `answer` och dela den med 2. Sedan ska funktionen logga ut svaret.
6. Om du har fått detta att fungera kan du gå vidare till att göra samma sak fast ersätta `divideAnswer` med en anonym funktion som skickas med när vi kallr på `multiply`.

## Optional callback 

Man kan göra callbacks optional, att de bara kallas om vissa villkor uppfylls. JavaScript kan blir sur om vi inte ser till att en callback skickas med även fast vi sagt att vi ska skicka med en callback. Detta kan vi kolla på flera sätt, två sätt är dessa:

```javascript
//Kolla om en callback finns
if(callback){
  callback();
}
//Kolla om typen av vår callback är en funktion med typeof. typof kan användas på alla sorters variabler
if (typeof callBack == 'function')
```

1. Gör så att din funktion från övningen kollar utifall en callback finns.
2. Om en callback skickas med ska funktionen fungera som ovan, annars ska funktionen returnera: "You used to call me on my callback"




