// DEKLARACJA KLASY W TS

// 1 przykład

class User {
	// wszystkie pola klasy powinny zostać zadeklarowane od razu na początku
	name: string;
	surname: string;
	email: string;
	hasAccount: boolean;

	constructor(
		name: string,
		surname: string,
		email: string,
		hasAccount: boolean
	) {
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.hasAccount = hasAccount;
	}
	addPointsForRegister = (): number => {
		return this.hasAccount ? 50 : 0;
	};
}
const user1 = new User('Adam', 'Kowalski', 'akowal@akowal.com', true);
console.log(user1.addPointsForRegister());

// 2 przykład
interface Emailo {
	name: string;
	domain: string;
}
class Email {
	name: string;
	domain: string;
	constructor(name: string, domain: string) {
		this.name = name;
		this.domain = domain;
	}
	showEmail = () => {
		return `${this.name}@${this.domain}`;
	};
}
class UserNext {
	// w ts wszystkie pola jakie posiada klasa muszą być zdefiniowane na początku
	name: string;
	email: Email;
	constructor(name: string, email: Email) {
		this.name = name;
		this.email = email;
	}
	showData = () => {
		return `${this.name},${this.email.showEmail()}`;
	};
}
// const userEla=new UserNext("Ela",{name:"elazabrze",domain:"gmail.com"});
const userAnna = new UserNext('Anna', new Email('anna', 'gotujzemna.pl'));
console.log(userAnna.showData());

// MODYFIKATORY DOSTĘPU-PUBLIC

//  domyślnie wszytskie pola i metody są publiczne, do pola możemy przypisać nową wartość, np nazwaInstancji.nazwaPola=nowaWartosc

class Email2 {
	public name: string;
	public domain: string;
	constructor(name: string, domain: string) {
		this.name = name;
		this.domain = domain;
	}
	public showEmail = () => {
		return `${this.name}@${this.domain}`;
	};
}

// MODYFIKATORY DOSTĘPU-PRIVATE I ENKAPSULACJA

//pola i metody są dostępne dla klasy w której są zdefiniowane; do pobierania służą gettery, i ewentualnie settery do manipulacji
// jak najmniej danych o danym obiekcie wystawiamy na zewnątrz

class UserPriv {
	private name: string;
	private email: Email;
	private prefferences: string[];
	constructor(name: string, email: Email) {
		this.name = name;
		this.email = email;
		this.prefferences = [];
	}
	showData = () => {
		return `${this.name},${this.email.showEmail()}`;
	};
	public getEmail = (): Email => {
		return this.email;
	};
	public getName = (): string => {
		return this.name;
	};
	// public setName=(name:string):void=>{  //to samo co pole public
	//     this.name=name
	// }
	public getPrefferences = (): string[] => {
		// return this.prefferences; -pobierając tablicę, ktoś może ją posortować, zrobić push, pop
		return Array.from(this.prefferences);
	};
	public addPreffernce = (pref: string): string[] => {
		this.prefferences.push(pref);
		return this.prefferences;
	};
}

// MODYFIKATORY DOSTĘPU-PROTECTED I DZIEDZICZENIE

class Rectangle {
	// private a:number;
	protected a: number; //widoczne są w klasach,w których są definiowane oraz w klasach dziedziczących
	private b: number;
	constructor(a: number, b: number) {
		this.a = a;
		this.b = b;
	}
	// public area=():number=>{
	//     return this.a*this.b;
	// }

	//naprawa błędu-zmiana funkcji strzałkowej na deklarację funkcji ze względu na związanie this
	protected area(): number {
		return this.a * this.b;
	}
}

class Square extends Rectangle {
	constructor(a: number) {
		super(a, a);
	}
	displayData = (): void => {
		// console.log(`To jest kwadrat o boku ${this.a}`)
		console.log(`To jest kwadrat o polu ${super.area()}`);
	};
}
const form = new Square(8);
// console.log(form.area());
console.log(form.displayData());

// ABSTRAKCJA

// metody abstracyjne są wymagane w klasach dziedziczących-to coś, czego brakowało w metodach interfejsów, metoda abstrakcyjnej w klasie dziedziczącej musi być publiczna

abstract class Form {
	abstract area: () => number;
}
class Rectangle2 extends Form {
	protected a: number;
	private b: number;
	constructor(a: number, b: number) {
		super();
		this.a = a;
		this.b = b;
	}

	public area = (): number => {
		return this.a * this.b;
	};
}
const prostokat: Form = new Rectangle2(8, 5);
console.log(prostokat.area());

// IMPLEMENTACJA INTERFEJSU
interface Sides {
	a: number;
	b: number;
}
class Shape implements Sides {
	a: number;
	b: number;
	constructor(sides: Sides) {
		this.a = sides.a;
		this.b = sides.b;
	}
}
const nextShape = new Shape({ a: 4, b: 6 });
