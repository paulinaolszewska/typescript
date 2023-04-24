//ALIASY TYPÓW

type d6=1|2|3|4|5|6
//używanie typu w innym typie
type d8=d6|9|8

const myDice:d8=9

//TYPOWANIE OBIEKTÓW

let user:{
    name:string,
    age:number,
    email?:string,
}={
    name:"Paweł",
    age:32,
    email:"pawel@gmail.com"
}

user={name:"Anna",age:22}

const user2={} as {age:number, names:{first:string,last:string}};
user.age=32;

const showUserInfo=(user2:{age:number, names:{first:string,last:string}})=>{
    const {age,names:{first,last}}=user2;
    return `${first} ${last} ma ${age} lat`;
}

//INTERFEJSY

interface Person{
    name:string,
    age:number,
    email?:string,
    toString:()=>string //nie jest sprawdzana obecność metody nawet jeśli nie jest opcjonalna
}
let anna:Person={
    name:"Anna",
    age:12,
    email:"annaaaaa@gmail.com"
}

//ROZSTRZYGANIE TYPÓW
interface Dog{
    name:string,
    age:number,
    breed?:string,
}
let fafik:Dog={
    name:"Fafik",
    age:13,
    breed:"german shepherd"
}
anna=fafik; //nazwy interfejsów nie mają żadnego znaczenia dla typescript, ważne są pola wewnątrz, jeśli pola required się zgadzają to można przypisać do siebie zmienne otypowane różnymi interfejsami

// ŁĄCZENIE INTERFEJSÓW

let union:Person|Dog={
    name:"name",
    age:13,
    email:"testemail@gmail.com",
    // breed:"shephard"
 }  //lepiej zrobić nowy interfejs niż robic takie łączenie, ponieważ jest to problematyczne   

//KOMPOZYCJA
interface PlayerName{
    first:string,
    last:string
}

interface MyGameResult{
    playerName:PlayerName,
    win:boolean,
    result:d6
}

//ROZSZERZANIE INTERFEJSÓW

interface FamilyMember{
    name:string,
    age:number,
    role:string
}
interface FamilyMemberAdult extends FamilyMember{
    email:string
}
interface FamilyMemberChild extends FamilyMember{
    favouriteGame?:string,
    isInfant:boolean
}
let someone:FamilyMember={
    name:"someone",
    age:34,
    role:"somebody"
}
let mother:FamilyMemberAdult={
    name:"Maria",
    age:28,
    role:"mother",
    email:"annamother@interia.pl"
}
someone=mother
// mother=someone -FamilyMember nie posiada wszystkich wymaganych pól 

// TYPY VS INTERFEJSY

// różnice w pisowni
// brak w typie pól opcjonalnych
// brak możliwości łączenia typów
interface Vehicle {
    numberOfSeats: number
  }
  
  interface Car extends Vehicle {
    brand?: string,
    model: string,
    horsePower: number,
    hasParkingSensors: boolean
  }
  
  const firstCar: Car = {
    brand: "BMW",
    model: "e46",
    horsePower: 115,
    hasParkingSensors: false,
    numberOfSeats: 5
  }
  type Vehicle1 = {
    numberOfSeats?: number
  }
  
  type Car1 = Vehicle1 & {
    brand: string,
    model: string,
    horsePower: number,
    hasParkingSensors: boolean
  }
  
  const firstCar1: Car = {
    brand: "BMW",
    model: "e46",
    horsePower: 115,
    hasParkingSensors: false,
    numberOfSeats: 5
  }
//   types mogą być aliasami dla typów prymitywnych a interfejsy określają kształt obiektów
  type StringOrBooleanOrNumber = string | boolean | number
const myNum: StringOrBooleanOrNumber = 123
const myBoolean: StringOrBooleanOrNumber = false
const myString: StringOrBooleanOrNumber = "hello"

// w 90% przypadków interfejsy pokryją nasze potrzeby

  