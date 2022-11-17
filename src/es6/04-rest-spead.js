// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);
console.log(a, fruits[0]);
console.log(fruits[0], b);
console.log(fruits[0], fruits[1]);
console.log(fruits[1], b);

//object destructuring

let user = { username: 'David', age: 26 };
let { username, age } = user;
console.log(username, age);
console.log(username, user.age);
console.log(user.username, user.age);

//spread operator 

let person = { name: 'oscar', age: 28 };
let country = 'MX';

let data = { id: 1, ...person, country };
console.log(data);

//rest

function sum(num, ...values) {
  console.log(num);
  console.log(values);
  console.log(num + values[0]);
  return num + values[0]
}

sum(52, 1, 2, 3);

function sum2(num, ...values) {
  console.log(num);
  console.log(values);
  console.log(`${num}  ${values[0]}!`);
  return `${num}  ${values[0]}!`
}

sum2(52, '1', '2', '3'); 