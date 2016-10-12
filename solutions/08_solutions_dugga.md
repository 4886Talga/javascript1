# Lösningar till duggaövningar :relieved:

#### Laga koden nedan så att den skriver ut rätt värde!

```javascript
//Vi måste ange att funktionen ska ta emot en parameter, annars kan 
//inte funktionen ta emot något värde, här döper vi parametern till number
function numberMultiplier(number){
	return number * 2; // Vi måste använda return för att returnera värdet
}
console.log(numberMultiplier(12));
```

---

#### Vad skriver `console.log` ut nedan?

```javascript
function foo(){
  //Kommer alltid att skriva ut "test" oberoende av vad vi skickar med.
   console.log("test");
}

//Vi skickar med ett argument till funktionen, dock tar inte funktionen emot
//någon parameter samt använder sig inte av parametern i själva funktionen
//Därför händer inget med "Hej"
foo("hej");
//Output: "test"

```

---

#### Vad skriver `console.log` ut nedan?

```javascript
//Vi kallar på funktionen med vårt argument som är 3. Funktionen
//returnerar ett värde som vi kan lagra i en variabel a.
var a = foo(3);
console.log(a); //Output: 9

//Funktionen har en parameter, det värde vi får in i funktionen är i detta
//fall 3. Funktionen returnerar alltså 3 * 3 = 9
function foo(i){
   return i * i;
}

```

---

#### Vad skriver `console.log` ut nedan?

```javascript
//Variabel a har värdet 5
var a = 5;

//Funktionen foo ska öka värdet med 1
function foo(a){
    a++;
}

//a ökas här med 2, detta är detsamma som att skriva a = a + 2;
a += 2;
//Dock så kallar vi aldrig på funktionen foo(), därför ökas aldrig a med 1
//utan bara med 2. a++ körs aldrig
console.log(a); //Output: 7

```

---

#### Vad skriver `console.log` ut nedan?

```javascript
var sayHi = function() {
  return "Hej";
  //console.log kommer efter return vilket betyder att det inte kommer att 
  //skrivas ut eftersom return indikerar att funktionen körts klart
  console.log("Hej igen!");
};
console.log(sayHi()); //Output: "Hej"
```

---

#### Vad skriver `console.log` ut nedan?

```javascript
function foo () {
  //Här returneras bar() innan funktionen har deklarerats
  return bar();
  //Dock så hoistas bar() upp ovanför return vilket gör att funktionen ändå 
  //kallas på eftersom här blir funktionen deklarerad innan return p.g.a hoist
  function bar() {
    return "FOOBAR!!";
  }
}
console.log(foo());
```

---

#### Vad skriver `console.log` ut nedan?

* 1,2,3,4 är alltså argumenten som skickas in till funktionen. a och b är funktionens parametrar.

```javascript
//I det här fallet tar funktionen 2 parametrar
function sum(a, b) {
  return a + b;
}
//Här skickar vi dock med 4 argument. Resultatet kommer bli att de två
//sista argumenten kommer att ignoreras eftersom funktionen enbart
//tar 2 argument
console.log(sum(1, 2, 3, 4));

```

---

#### Vad skriver `console.log` ut nedan?
  * `var n = 10` är i global scope medan `var n = 5` är i function scope.

```javascript
//n = 10 i global scope
var n = 10;

function increaseNumber(){
    //Dock så deklarerar vi en ny variabel n inuti funktionen som har
    //företräde framför den globala variabeln. Om vi istället skulle använda
    //den globaka variabel skulle vi skriva 'n = 5'
    var n = 5;
    n++;        // n == 6
    return n;   //returnera 6
}

console.log(increaseNumber());  //Output: 6

```

---

#### Vad skriver `console.log` ut nedan?

```javascript
var x = 5;
var y = 2;

//Tar värdet som skickas in och mutiplicerar det med 2
function foo(i){
   return 2 * i;
}
//Eftersom det är värden som returneras kan vi använda dem direkt
//i den egna funktionen. Observera att vi inte skickar med funktioner som
//argument utan att funktionerna kallas på och returnerar värden. Därmed
//skickar vi med värden och inte funktioner.
var a = foo(foo(x) + foo(y));
console.log(a);

//foo(x) === 5 * 2 
//foo(y) === 2 * 2
//foo(x) + foo(y) === (5*2) + (2*2)
//foo((5*2) + (2*2)) === foo(14)
//foo(14) === 28
//Output: 28

```

--- 

#### Vad skriver `console.log` ut nedan?

```javascript
function foo(x){
    //Vi skickar med a som är 12, 12 > 10 vilket gör att vilkoret stämmer
    //Därför kommer funktionen att returnera true
   return x > 10;
}
var a = 12;
//Vi skickar med ett argument: a som är 12 in i funktionen foo
console.log(foo(a))

```

---

#### Vad skriver `console.log` ut nedan?

```javascript

//foo har en parameter som multipliceras med sig själv samt 2: 2*3*3
function foo(i){
  return 2 * i * i;
}

//bar är en funktion som har två parametrar, den första är en funktion och den andra är ett värde.
function bar(x, y){
  //Det enda funktionen gör är att köra funktionen foo() på vårt värde y
  return x(y);
}
//Här skickar vi med våra argument, det första är själva funktionen, det andra
//är värdet som funktionen ska köras på. Sedan lagrar vi det i a. foo blir
//alltså till x inuti funktionen bar()
var a = bar(foo, 3);
console.log(a); //Output: 18

```
