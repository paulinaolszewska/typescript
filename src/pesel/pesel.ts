// funkcja pobiera i zwraca string
function genderFromPesel(pesel:string):string {
    let message:string = ""
    // sprawdzamy czy string ma 11 znaków
    if (pesel.length == 11) {
      // zwracamy do zmiennej przedostatni znak stringa
      const peselX:number = Number(pesel.slice(9,10));
      // sprawdzamy czy jest parzysty, czy nieparzysty i zwracamy odpowiednią wiadomość
      peselX % 2 == 0 ? message = "FEMALE" : message = "MALE";
      return message
  
    } else {
      // jeśli nie ma odpowiedniej długości to rzucamy błędem
      throw new Error(`${pesel} is not valid PESEL number!`);
    };
  
  
  }
console.log(genderFromPesel("89090132712"))
console.log(genderFromPesel("00301791241"))
console.log(genderFromPesel("123"))