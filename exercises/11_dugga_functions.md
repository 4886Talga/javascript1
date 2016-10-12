# Övningar till dugga :scream:

Använd gärna Breakpoints i Developers Tools för att följa hur koden körs.

## Användbara länkar
[You Don't Know JavaScript - Into JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md)

[Variable Scope and Hoisting Explained](http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/)

---

#### Laga koden nedan så att den skriver ut rätt värde!

```javascript
function numberMultiplier(){
	number * 2;
}
console.log(numberMultiplier(12));
```

---

#### Vad skriver `console.log` ut nedan?

```javascript
function foo(){
   console.log("test");
}
foo("hej");

```

---

#### Vad skriver `console.log` ut nedan?

```javascript
var a = foo(3);
console.log(a);

function foo(i){
   return i * i;
}

```

---

#### Vad skriver `console.log` ut nedan?
  * I vilket scope är `var a` deklarerad?

```javascript
var a = 5;

function foo(a){
    a++;
}

a += 2;
console.log(a);

```

---

#### Vad skriver `console.log` ut nedan?

```javascript
var sayHi = function() {
  return "Hej";
  console.log("Hej igen!");
};
console.log(sayHi());
```

---

#### Vad skriver `console.log` ut nedan?

```javascript
function foo () {
  return bar();
  function bar() {
    return "FOOBAR!!";
  }
}
console.log(foo());
```

---

#### Vad skriver `console.log` ut nedan?

* I funktionen nedan, vilka värden är parametrar och vilka värden är argument?

```javascript
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2, 3, 4));

```

---

#### Vad skriver `console.log` ut nedan?
  * I vilket scope är `var n` deklarerad?

```javascript
var n = 10;

function increaseNumber(){
    var n = 5;
    n++;
    return n;
}

console.log(increaseNumber());

```

---

#### Vad skriver `console.log` ut nedan?

```javascript
var x = 5;
var y = 2;

function foo(i){
   return 2 * i;
}

var a = foo(foo(x) + foo(y));
console.log(a);

```

--- 

#### Vad skriver `console.log` ut nedan?

```javascript
function foo(x){
   return x > 10;
}
var a = 12;
console.log(foo(a));

```

---

#### Vad skriver `console.log` ut nedan?

```javascript

function foo(i){
  return 2 * i * i;
}

function bar(x, y){
  return x(y);
}

var a = bar(foo, 3);
console.log(a);

```


Kommenterad kod finns i mappen solutions: [08_solutions_dugga.md](https://github.com/FEND16/javascript1/blob/master/solutions/08_solutions_dugga.md)
