"use strict";
//ALIASY TYPÓW
const myDice = 9;
//TYPOWANIE OBIEKTÓW
let user = {
    name: "Paweł",
    age: 32,
    email: "pawel@gmail.com"
};
user = { name: "Anna", age: 22 };
const user2 = {};
user.age = 32;
const showUserInfo = (user2) => {
    const { age, names: { first, last } } = user2;
    return `${first} ${last} ma ${age} lat`;
};
let anna = {
    name: "Anna",
    age: 12,
    email: "annaaaaa@gmail.com"
};
let fafik = {
    name: "Fafik",
    age: 13,
    breed: "german shepherd"
};
anna = fafik; //nazwy interfejsów nie mają żadnego znaczenia dla typescript, ważne są pola wewnątrz, jeśli pola required się zgadzają to można przypisać do siebie zmienne otypowane różnymi interfejsami
// ŁĄCZENIE INTERFEJSÓW
let union = {
    name: "name",
    age: 13,
    email: "testemail@gmail.com",
    // breed:"shephard"
}; //lepiej zrobić nowy interfejs niż robic takie łączenie, ponieważ jest to problematyczne   
let someone = {
    name: "someone",
    age: 34,
    role: "somebody"
};
let mother = {
    name: "Maria",
    age: 28,
    role: "mother",
    email: "annamother@interia.pl"
};
someone = mother;
const firstCar = {
    brand: "BMW",
    model: "e46",
    horsePower: 115,
    hasParkingSensors: false,
    numberOfSeats: 5
};
const firstCar1 = {
    brand: "BMW",
    model: "e46",
    horsePower: 115,
    hasParkingSensors: false,
    numberOfSeats: 5
};
const myNum = 123;
const myBoolean = false;
const myString = "hello";
// w 90% przypadków interfejsy pokryją nasze potrzeby
