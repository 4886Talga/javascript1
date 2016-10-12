# Övningar till JavaScript - If/else/else if

## Kvot och rest

Skriv ett program som läser in ett tal (med prompt) och beräknar heltalskvoten och resten när talet divideras med 2. Resten av divisionen fås när talet beräknas med modulo 2 (%). Heltalsdivision beräknas med \ . Det se ut på följande sätt:

prompt: 10
Heltalskvoten av talet dividerat med 2 är: 5
Resten av talet modulo 2 är: 0
prompt: 5
Heltalskvoten av talet dividerat med 2 är: 2
Resten av talet modulo 2 är: 1

## Kokar vattnet?

Undefined vill ha ett alarm som anger om vattnet kokar eller inte. Han vill även att man visar när det når 50 grader så att han är beredd! Om det inte är 50 eller 100 grader så skall det endast säga att det inte kokar.

1. Läs in hur många grader vattnet är (prompt)
2. Om vattnet är 100 grader skriv ut: Vattnet kokar!
3. Om vattnet är 50 grader skriv ut: Det är halvägs nu!
4. Annars skriv ut: Vattnet kokar inte

## Går det att bada?

Null gillar att bada, dock tar vattnet ibland slut hemma och dessutom kan värmen variera ganska mycket. Skriv ett program som kollar om det finns vatten och om det är tillräckligt varmt.

1. Läs in om det finns vatten (true /false)
2. Läs in hur många grader vattnet är
3. Om det finns vatten och det är varmare än 30 grader skriv ut: ”Varsågod och bada!”
4. Om det INTE finns vatten eller det är kallare än 30 grader skriv ut: ”Det går inte att bada.”

## Hästtokig!

Iffy äger ett stall med hästar av typerna A-ponny, B-ponny och C-ponny. Iffy skall för första gången anordna en tävling. Tävlingsreglerna är följande: För att få tävla måste man fyllt 12år. För att få tävla på A-ponny måste man väga under 30kg, B-ponny under 50kg och C-Ponny under 65kg. Algoritmen ser således ut som sådan:

1. Läs in användarens ålder
2. Om åldern är under 12 år så:

    2.1. Skriv ut: ”Du är för ung för att tävla!”

    2.2. Låt inte användaren fortsätta

3. Om åldern inte är under 12 år så

    3.1. Läs in användarens vikt

    3.1.1. Om vikten är under eller lika med 30kg skriv ut: ”A-ponny”

    3.1.2. Om vikten är under eller lika med 50kg, och över 30kg skriv ut ”B-ponny”

    3.1.3. Om vikten är under eller lika med 65kg och över 50kg skriv ut ”C-ponny”

    3.1.4. Om vikten är över 65kg skriv ut ”Det finns inga ponnys för denna viktklass ”

## Vad blir det för middag?

Ibland kan det vara fördelaktigt att använda sig av switch-satser istället för if-satser. I denna uppgift skall ni använda er av switch.
Ditt program ska skriva ut vilket rätt som ska tillagas beroende på vilken dag som skrivs in i prompten.

1. Läs in dag ifrån användaren
2. Om dagen är…
    
    2.1. … måndag skriv ut: Kyckling

    2.2. … tisdag skriv ut: Pannkaka

    2.3. … onsdag skriv ut: Ärtsoppa

    2.4. … torsdag skriv ut: Gryta

    2.5. … fredag skriv ut: Kalv

    2.6. … lördag skriv ut: Vegetariskt

    2.7. … söndag skriv ut: Kålsoppa


I vilka fall kan det vara smidigt att använda switch-satser istället för if-satser? När gäller vice versa? Svara i text.

## Vad blir det för middag 2

Ta din kod som du gjorde från förra uppgiften. Nu ska du dock med hjälp av en __fall-through__ göra så att programmet skriver ut "Kålsoppa" för fredag, lördag och söndag. Du ska alltså skriva "Kålsoppa" endast en gång men den switchen ska gälla för flera dagar.

## Frågesport

Skapa en frågesportsapplikation där användare
med hjälp av en prompt får besvara minst 5 frågor.
Applikationen ska även fråga efter användarens namn och lagra detta.


Applikationen ska hålla koll på om användaren svarar rätt,
och i så fall öka antalet rätta svar med 1.

När fem frågor är besvarade ska text liknande den nedan skrivas ut i dokumentet:

1-2 Rätta svar: "Nully won bronze!"
3-4 Rätta svar: "Nully won silver!"
5   Rätta svar: "Wow, Nully went gold!"
0   Rätta svar: "This is a sad day for sports"