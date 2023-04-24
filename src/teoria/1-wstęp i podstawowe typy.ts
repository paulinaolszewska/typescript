// Przy domyślnych ustawieniach kompilatora ts, kod js skopiowany do pliku ts nie zadziała ze względu na obostrzenia. Po ich zluzowaniu-zadziała
// Typy znikają w czasie kompilacji do js i nie są widoczne po uruchomieniu w Node.js, ponieważ nie istnieją one w obecnej wersji JS
//https://typescriptlsng.org => playground
// początkowo TypeScript był używany głównie z Angularem, ale potem zaczęto go używać również z innymi frameworkami i bibliotekami
// obecnie TS ciągle zyskuje na popularności, mimo że Angular na popularności traci.
// TS składa się z: języka programowania (kodu), serwera (karmi danymi IDE,pokazuje np podpowiedzi w VSC) oraz kompilatora (tsc)
// wady:tsc to tak naprawdę kolejne narzędzie, przy prostych projektach może być tylko nadmiarowym kodem, daje także kolejną pulę błędów związanych z nieodpowiednim typowaniem lub obiektowościątsc
// npm - manager dependencji
// npx- uruchamia binarny program z lokalnego node modules, gdy mamy instalację globalną-nie używamy npx
// npx tsc kompiluje wszystkie pliki ts, jakie mamy w katalogu/ node nazwapliku.js uruchomi kod js w terminalu
//npx tsc -w lub npx tsc -watch do kompilacji w watchu oraz npx nodemon nazwapliku.js do uruchamiania w watchu
// w js to wartości mają typy, a w ts to zmienne mają typy

const firstName:string="Paweł"
const age:number=13
const isStuden:boolean=true

let secondName="Nowak"
// secondName=15  - dedukcja typów

let arr:number[]=[1,3,4]  //nazwa typu zmiennych jakie mają się znaleźć w tablicy i [] 

// UNIE

let myItem:string|number=13
myItem="item"
let myItems:(string|number)[]=[1,2,3]
myItems.push("hello")

// TUPLE/KROTKI

const touple:[string,number]=["Paweł",13]
// do krotki można dodawać kolejne elementy
touple.push("hello")
touple.push(14)
// touple.push(true)
// niektóre hooki w React zwracają krotki, np useState, jednakże lepiej stosować obiekt niż krotkę

// ANY

// typ any oznacza "cokolwiek"; do typu any możemy przypisać wszystko i zmienną o typie any możemy przypisać do każdej zmiennej o innym typie
// typ any stosujemy najczęściej przy migracji projektu z js do ts

//UNKNOWN

const something:unknown=13
// let newAge:number=something
if (typeof something=="number"){
    let newAge:number=something
}
// obiekt unkown
const userAge:unknown={age:3}
if(typeof userAge=="object"&&userAge!==null){
    if((userAge as {age:number}).age!==undefined){
         (userAge as {age:number}).age  //rzutujemy na konkretny obiekt, inaczej nie zobaczy właściwości
    // }
}}


// FUNKCJE

// nie ma dedukcji w przypadku funkcji, typowanie na any "nie wprost"

const sum=(a:number,b:number):void=>{ //nic nie zwraca
 console.log(a+b)
}
const ele:void=undefined //puste

const sum2=(a:number,b:number):number=>{
    return (a+b)
   }


// TYPY JAKO ZBIORY MOŻLIWYCH WARTOŚCI

let dice:1|2|3|4|5|6=5
let myNumber:number=30
let anotherFlag:boolean=false
let flag:true|false=true
let mix:"Anna"|2|string[]=2

anotherFlag=flag 
flag=anotherFlag  //te same zbiory możliwych wartości
myNumber=dice
// dice=myNumber

