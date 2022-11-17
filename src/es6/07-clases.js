//declarando
class User { };
//instancia de una clase
//const newUser = new User();

class user {
  constructor() {
    console.log('Nuevo Usuario');
  }
  //metodos
  greeting() {
    return 'Hello'
  }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//this

class useri {
  constructor(name) {
    this.name = name;
  }
  //metodos
  speak() {
    return 'Hello'
  }
  greeting2() {
    return `${this.speak()} ${this.name}`;
  }
}

const david = new useri("David");
console.log(david.greeting2());


//setters getters

class usere {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //metodos
  speak() {
    return 'Hello';
  }
  greting3() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const promo = new usere('David', 26);
console.log(promo.uAge);
console.log(promo.uAge = 20);


