var lastName = "David"; //asignar valor
lastName = "Oscar"; //reasignar valor
console.log(lastName);

let fruit = "Apple";
fruit = "Kiwi";
console.log(fruit);

const animal = "Dog";
// animal = "Cat"; //no puedo reasignar un valor con const, es una constante
console.log(animal);

// var suele ser una variable global, mientras que let y const suelen ser variables o constantes de bloque

const fruits = () => {
  if (true) {
    var fruit1 = "Apple"; //function scope
    let fruit2 = "Kiwi";
    const fruit3 = "Banana"; // solo pueden ser referenciadas dentro del bloque (if) block scope
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
};
