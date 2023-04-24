console.log('hello world!!!');
let item: number = 13;
item = 16;
// item=true
let firstName: string = 'Kowalski';
// firstName=16
let arr: number[] = [1, 2, 3, 4];

// UNIA

let myItem: string | number = 13;
myItem = 'anna';
// myItem=true
let myItems: (number | string)[] = [1, 2, 3, 4];
myItems.push('hello');
// console.log(myItems);
let secondName: 'Kowalski' | 'Nowak' = 'Nowak';
// secondName="Olszewski"

// TUPLE/KROTKI
const touple: [string, number] = ['Paweł', 15];

// ANY

let anyEl: any = 'anna';
anyEl = 13;
anyEl = myItem;
item = anyEl;

// UNKNOWN
let something: unknown = 13;
something = 'anna';
something = 20;
// item=something
const userAge: unknown = { age: 3 };
if (typeof userAge == 'object' && userAge !== null) {
	if ((userAge as { age: number }).age !== undefined) {
		console.log((userAge as { age: number }).age);
	}
}

// FUNKCJE

const sum=(a:number,b:number):void=>console.log(a+b)
// console.log(sum(3,4))

const sum2=(a:number,b:number):number=>{
    return a+b
}

// TYPY JAKO ZBIORY MOŻLIWYCH WARTOŚCI
let dice:1|2|3|4|5|6=5
let myNumber:number=30

myNumber=dice
// dice=myNumber

// ALIASY TYPÓW

type d6=1|2|3|4|5|6
type d8=d6|7|8

const myDice:d6=5
const myDice1:d8=7

// TYPOWANIE OBIEKTÓW
let user:{name:string, age:number,email?:string}={
    name:"Paweł",
    age:32,
    email:"pawel@gmail.com"
}
user={name:"Iza", age:22}
const user2={} as {age:number, names:{first:string, last:string}}

// INTERFEJSY
interface Person{
    name:string,
    age:number,
    email?:string
    // toString:()=>string
}
let anna:Person={
    name:"Anna",
    age:12,
    email:"annnaaaaa@gmail.com"
}

// ROZSTRZYGANIE TYPÓW OBIEKTÓW

interface Dog{
    name:string,
    age:number,
    breed?:string
}
let fafik:Dog={
    name:"Fafik",
    age:13,
    breed:"german shepherd"
}
anna=fafik
fafik=anna

// ŁĄCZENIE INTERFEJSÓW

let union:Person|Dog={
    name:"Ala",
    age:16,
    email:"testemail@pers.com",
    breed:"shephard"
}

// KOMPOZYCJA

interface PlayerName{
    first:string,
    last:string
}
interface MyGameResult{
    playerName:PlayerName,
    win:boolean,
    result:number
    // result:d6
}

// ROZSZERZANIE INTERFEJSÓW

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
let mother:FamilyMemberAdult={
    name:"anna",
    age:34,
    role:"mother",
    email:"myemail@lalaal.com"
}
let someone:FamilyMember={
    name:"someone",
    age:20,
    role:"somebody"
}
someone=mother
// mother=someone

// DEKLARACJA KLASY W TS

class User{
    name:string;
    surname:string;
    email:string;
    hasAccount:boolean

    constructor(name:string,surname:string,email:string,hasAccount:boolean){
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.hasAccount=hasAccount
    }
    addPointsForRegister=():number=>{
        return this.hasAccount?50:0
    }
}
const newUser=new User("Adam","Kowalski","akowal@gmail.com",true)
console.log(newUser.addPointsForRegister())

// INTERFEJS W KLASIE
interface Email{
    name:string,
    domain:string
}
class Email2{
    name:string;
    domain:string;
    constructor(name:string,domain:string){
        this.name=name;
        this.domain=domain;
    }
    showEmail=()=>{
        return `${this.name}@${this.domain}`
    }
}
class nextUser{
    name:string;
    email:Email2;
    constructor(name:string,email:Email2){
        this.name=name;
        this.email=email;
    }
    showData=()=>{
        // return `${this.name},${this.email.name}@${this.email.domain}`
        return `${this.name},${this.email.showEmail()}`
    }
}
// const userEla=new nextUser("Ela",{name:"elazabrze",domain:"gmail.com"})
// console.log(userEla.showData())
const userAnna=new nextUser("Anna", new Email2("anna","gotujzemna.pl"))
console.log(userAnna.showData())

// MODYFIKATORY DOSTĘPU
// PUBLIC
class nexUser{
    public name:string;
    public email:string;
    constructor(name:string,email:string){
        this.name=name;
        this.email=email;
    }
    public showData=()=>{
        return `${this.name},${this.email}`
    }
}

// PRIVATE
class UserPriv{
    private name:string;
    private email:Email;
    private prefferences:string[];
    constructor(name:string,email:Email){
        this.name=name;
        this.email=email;
        this.prefferences=[]
    }
    public showData=()=>{
        return `${this.name},${this.email.name}@${this.email.domain}`
    }
    public getEmail=():Email=>{
        return this.email
    }
    public getName=():string=>{
        return this.name
    } 
    public getPrefferences=():string[]=>{
        return Array.from(this.prefferences)
    }
    // public setName=(name:string):void=>{
    //     this.name=name
    // }
}
const customerVip=new UserPriv("Alex",{name:"alex",domain:"alex.com"})
console.log(customerVip.getName())
// const ar=customerVip.getPrefferences()

// PROTECTED
class Rectangle{
    protected a:number;
    private b:number;
    constructor(a:number,b:number){
        this.a=a;
        this.b=b;
    }
     public formArea ():number{
        return (this.a*this.b);
    }
}
class Squere extends Rectangle{
    constructor(a:number){
        super(a,a);
    }
    displayData=():string=>{
        const area=super.formArea()
        return `To jest kwadrat o boku ${area}`
    }
}
const form:Squere=new Squere(8);
console.log(form.displayData())
const form2:Rectangle=new Rectangle(4,5);


// IMPLEMENTACJA INTERFEJSU
interface Sides{
    a:number;
    b:number
}
class Shape implements Sides{
    a: number;
    b: number;
    constructor(sides:Sides){
        this.a=sides.a;
        this.b=sides.b;
    }
}
const nextShape=new Shape({a:4,b:6})

