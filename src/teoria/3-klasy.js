"use strict";
// DEKLARACJA KLASY W TS
// 1 przykład
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
const user1 = new User('Adam', 'Kowalski', 'akowal@akowal.com', true);
console.log(user1.addPointsForRegister());
class Email {
    constructor(name, domain) {
        this.showEmail = () => {
            return `${this.name}@${this.domain}`;
        };
        this.name = name;
        this.domain = domain;
    }
}
class UserNext {
    constructor(name, email) {
        this.showData = () => {
            return `${this.name},${this.email.showEmail()}`;
        };
        this.name = name;
        this.email = email;
    }
}
// const userEla=new UserNext("Ela",{name:"elazabrze",domain:"gmail.com"});
const userAnna = new UserNext('Anna', new Email('anna', 'gotujzemna.pl'));
console.log(userAnna.showData());
// MODYFIKATORY DOSTĘPU-PUBLIC
//  domyślnie wszytskie pola i metody są publiczne, do pola możemy przypisać nową wartość, np nazwaInstancji.nazwaPola=nowaWartosc
class Email2 {
    constructor(name, domain) {
        this.showEmail = () => {
            return `${this.name}@${this.domain}`;
        };
        this.name = name;
        this.domain = domain;
    }
}
// MODYFIKATORY DOSTĘPU-PRIVATE I ENKAPSULACJA
//pola i metody są dostępne dla klasy w której są zdefiniowane; do pobierania służą gettery, i ewentualnie settery do manipulacji
// jak najmniej danych o danym obiekcie wystawiamy na zewnątrz
class UserPriv {
    constructor(name, email) {
        this.showData = () => {
            return `${this.name},${this.email.showEmail()}`;
        };
        this.getEmail = () => {
            return this.email;
        };
        this.getName = () => {
            return this.name;
        };
        // public setName=(name:string):void=>{  //to samo co pole public
        //     this.name=name
        // }
        this.getPrefferences = () => {
            // return this.prefferences; -pobierając tablicę, ktoś może ją posortować, zrobić push, pop
            return Array.from(this.prefferences);
        };
        this.addPreffernce = (pref) => {
            this.prefferences.push(pref);
            return this.prefferences;
        };
        this.name = name;
        this.email = email;
        this.prefferences = [];
    }
}
// MODYFIKATORY DOSTĘPU-PROTECTED I DZIEDZICZENIE
class Rectangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    // public area=():number=>{
    //     return this.a*this.b;
    // }
    //naprawa błędu-zmiana funkcji strzałkowej na deklarację funkcji ze względu na związanie this
    area() {
        return this.a * this.b;
    }
}
class Square extends Rectangle {
    constructor(a) {
        super(a, a);
        this.displayData = () => {
            // console.log(`To jest kwadrat o boku ${this.a}`)
            console.log(`To jest kwadrat o polu ${super.area()}`);
        };
    }
}
const form = new Square(8);
// console.log(form.area());
console.log(form.displayData());
// ABSTRAKCJA
// metody abstracyjne są wymagane w klasach dziedziczących-to coś, czego brakowało w metodach interfejsów, metoda abstrakcyjnej w klasie dziedziczącej musi być publiczna
class Form {
}
class Rectangle2 extends Form {
    constructor(a, b) {
        super();
        this.area = () => {
            return this.a * this.b;
        };
        this.a = a;
        this.b = b;
    }
}
const prostokat = new Rectangle2(8, 5);
console.log(prostokat.area());
class Shape {
    constructor(sides) {
        this.a = sides.a;
        this.b = sides.b;
    }
}
const nextShape = new Shape({ a: 4, b: 6 });
