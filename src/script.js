"use strict";
console.log('hello world!!!');
let item = 13;
item = 16;
// item=true
let firstName = 'Kowalski';
// firstName=16
let arr = [1, 2, 3, 4];
// UNIA
let myItem = 13;
myItem = 'anna';
// myItem=true
let myItems = [1, 2, 3, 4];
myItems.push('hello');
// console.log(myItems);
let secondName = 'Nowak';
// secondName="Olszewski"
// TUPLE/KROTKI
const touple = ['Paweł', 15];
// ANY
let anyEl = 'anna';
anyEl = 13;
anyEl = myItem;
item = anyEl;
// UNKNOWN
let something = 13;
something = 'anna';
something = 20;
// item=something
const userAge = { age: 3 };
if (typeof userAge == 'object' && userAge !== null) {
    if (userAge.age !== undefined) {
        console.log(userAge.age);
    }
}
// FUNKCJE
const sum = (a, b) => console.log(a + b);
// console.log(sum(3,4))
const sum2 = (a, b) => {
    return a + b;
};
// TYPY JAKO ZBIORY MOŻLIWYCH WARTOŚCI
let dice = 5;
let myNumber = 30;
myNumber = dice;
const myDice = 5;
const myDice1 = 7;
// TYPOWANIE OBIEKTÓW
let user = {
    name: "Paweł",
    age: 32,
    email: "pawel@gmail.com"
};
user = { name: "Iza", age: 22 };
const user2 = {};
let anna = {
    name: "Anna",
    age: 12,
    email: "annnaaaaa@gmail.com"
};
let fafik = {
    name: "Fafik",
    age: 13,
    breed: "german shepherd"
};
anna = fafik;
fafik = anna;
// ŁĄCZENIE INTERFEJSÓW
let union = {
    name: "Ala",
    age: 16,
    email: "testemail@pers.com",
    breed: "shephard"
};
let mother = {
    name: "anna",
    age: 34,
    role: "mother",
    email: "myemail@lalaal.com"
};
let someone = {
    name: "someone",
    age: 20,
    role: "somebody"
};
someone = mother;
// mother=someone
// DEKLARACJA KLASY W TS
class User {
    constructor(name, surname, email, hasAccount) {
        this.addPointsForRegister = () => {
            return this.hasAccount ? 50 : 0;
        };
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.hasAccount = hasAccount;
    }
}
const newUser = new User("Adam", "Kowalski", "akowal@gmail.com", true);
console.log(newUser.addPointsForRegister());
class Email2 {
    constructor(name, domain) {
        this.showEmail = () => {
            return `${this.name}@${this.domain}`;
        };
        this.name = name;
        this.domain = domain;
    }
}
class nextUser {
    constructor(name, email) {
        this.showData = () => {
            // return `${this.name},${this.email.name}@${this.email.domain}`
            return `${this.name},${this.email.showEmail()}`;
        };
        this.name = name;
        this.email = email;
    }
}
// const userEla=new nextUser("Ela",{name:"elazabrze",domain:"gmail.com"})
// console.log(userEla.showData())
const userAnna = new nextUser("Anna", new Email2("anna", "gotujzemna.pl"));
console.log(userAnna.showData());
// MODYFIKATORY DOSTĘPU
// PUBLIC
class nexUser {
    constructor(name, email) {
        this.showData = () => {
            return `${this.name},${this.email}`;
        };
        this.name = name;
        this.email = email;
    }
}
// PRIVATE
class UserPriv {
    constructor(name, email) {
        this.showData = () => {
            return `${this.name},${this.email.name}@${this.email.domain}`;
        };
        this.getEmail = () => {
            return this.email;
        };
        this.getName = () => {
            return this.name;
        };
        this.getPrefferences = () => {
            return Array.from(this.prefferences);
        };
        this.name = name;
        this.email = email;
        this.prefferences = [];
    }
}
const customerVip = new UserPriv("Alex", { name: "alex", domain: "alex.com" });
console.log(customerVip.getName());
// const ar=customerVip.getPrefferences()
// PROTECTED
class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    formArea() {
        return (this.a * this.b);
    }
}
class Squere extends Rectangle {
    constructor(a) {
        super(a, a);
        this.displayData = () => {
            const area = super.formArea();
            return `To jest kwadrat o boku ${area}`;
        };
    }
}
const form = new Squere(8);
console.log(form.displayData());
const form2 = new Rectangle(4, 5);
class Shape {
    constructor(sides) {
        this.a = sides.a;
        this.b = sides.b;
    }
}
const nextShape = new Shape({ a: 4, b: 6 });
