class usere {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //metodos
  #speak() {
    return 'Hello';
  }
  greting3() {
    return `${this.#speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const promo = new usere('David', 26);
console.log(promo.speak);
console.log(promo.greting3());
console.log(promo.uAge);
console.log(promo.uAge = 20);


