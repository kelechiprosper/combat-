// log to console
// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting = 'hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is some error');
// console.clear();
// console.warn('this is a warning');

// var, let, const

//var name = 'High Chief';
//console.log(name);
//name = 'Steve John'
//console.log(name);

// Init Var
//var greeting;
//console.log(greeting);
//greeting = 'Hello';
//console.log(greeting);

// multi word vars

//var firstName = 'John'; // camel case
//var first_name = 'sarah'; // underscore
//var FirstName = 'Tom'; // pascal case

// LET
// var name = 'High Chief';
// console.log(name);
// name = 'Steve John'
// console.log(name);

// CONST
//const name = 'jude';
//console.log(name);
//can not reasign
//name = 'john';
//console.log(name);
// Have to assign a value
//const greeting;

//const person = {
   // name: 'ken',
  //  age: 30
//}

//person.name = 'sam',
//person.age = 50;

//console.log(person);

//const numbers = [1,2,3];
//numbers.push(4);

//console.log(numbers);

//PRIMITIVE

// string

// const name = 'joe bid';

// // number

// const age = 40;

// // boolean

// const haskid = true;

// // null 
// const car = null;

// // undefined
// let text;

// // symbol
// const sym =Symbol()

// // REFERENCE TYPE - OBJECTS
// //Array

// const favourite = ['peanut', 'rice']

// // object literal

// const address = {
//     city: 'Aba',
//     state: 'Abia'
// }

// const today = new Date();
// console.log(today);


// console.log (typeof today);

let val;

// number to string
val = String(444);
val = String(8+8);

// bool to string
val = String(true);

// Date to string

val = String(new Date());

//Array to string
val = ([1,2,3,4]);

//toString()

val = (5).toString();
val = (true).toString();

//string to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number([1,2,3]);
val = Number('hello');
val = Number(null);

val = parseInt('200.30');
val = parseFloat('200.30');

// output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));