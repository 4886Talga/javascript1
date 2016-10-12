# Closure

Vi kan skapa en funktion inuti en annan funktion. Vi kan även returnera en anonym funktion från en funktion. T.ex.:

```javascript
//Deklarera en funktion i en funktion samt kalla på den funktionen inuti
//I detta fall kallas den inre funktionen på direkt inuti den yttre funktionen
function myOuterFunction(){

    function myInnerFunction(){

    }
    myInnerFunction();
}

//När vi kallar på den yttre funktionen kommer båda funktionerna att köras
myOuterFunction();

//Man kan även returnera en funktion inuti den yttre funktionen
function myOuterFunction2(){

    return function(){}
}

//Hur vi kallar på funktionen ovan

var inner = myOuterFunction2();
//Nu lagras den inre funktionen i var inner och kan avändas som en funktion
inner();

```

När vi skapar en funktion i en annan funktion skapar vi automatiskt en _Closure_. JavaScript sparar alla variabler i den yttre funktionen så att den inre funktionen kan använda dem utifall de behövs. I vanliga fall när man kallar på en funktion så finns funktionens variabler tillgängliga när funktionen körs och när funktionen har kört klart går de inte att komma åt längre. Detta gäller dock inte _Closures_ då den inre funktionen har tillgång till den yttre funktionens variabler även fast den yttre funktionen har körts klart:

>Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.

 
## Skapa en closure

1. Skapa en funktion som heter `sayMyName`
2. Lägg till variabeln `var name = 'My Name'` i funktionen.
3. Skapa en inre funktion som heter `logMyName`
4. `logMyName` ska console.logga `"Hello my name is " + name`
5. Returnera den inre funktionen `logMyName` i slutet på den yttre funktionen `sayMyName`
6. Kalla på den yttre funktionen och lagra den i en variabel
7. Kalla på en inre funktionen som nu ligger i vår nya variabel

Vad får vi för resultat? Har varje funktion bara tillgång till sina egna variabler? 


## Följa en closure

```javascript
var hidden = mystery();
var result = hidden(3);
console.log(result);

function mystery(){
  var secret = 2;
  function mystery2 ( multiplier ) { 
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}
```

Se över koden ovan och försök lista ut vad som kommer returneras när vi skriver ut `result`. Använd sedan debuggern för att stega igenom koden och kolla hur programmet flödar.

## Skapa en hierarki!

Nu ska vi använda oss utan funktioner i funktioner och skapa closures. 

Vi ska skapa funktionskapande funktioner med hjälp av closures. Man ska kunna kalla på din funktion på detta sätt:

```javascript

var teacher = createPerson('lärare');
var student = createPerson('student');

student('Steffe');
//Hej jag heter Steffe och är student på Nackademin
teacher('Biggie');
//Hej jag heter Biggie och är student på Nackademin
teacher('Jesper');
//Hej jag heter Jesper och är lärare på Nackademin

```

Detta kan man åstadkomma med closures.

1. Vi ska alltså skapa en funktion som heter `createPerson` som har en parameter, argumentet som skickas in är om vi ska skapa en lärare eller elev.
2. Vår funktion `createPerson` ska sedan returnera en anonym funktion som tar ett argument, vad vår person ska heta.
