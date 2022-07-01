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

//let val;

// number to string
// val = String(444);
// val = String(8+8);

// // bool to string
// val = String(true);

// // Date to string

// val = String(new Date());

// //Array to string
// val = ([1,2,3,4]);

// //toString()

// val = (5).toString();
// val = (true).toString();

// //string to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number([1,2,3]);
// val = Number('hello');
// val = Number(null);

// val = parseInt('200.30');
// val = parseFloat('200.30');

// // output
// //console.log(val);
// //console.log(typeof val);
// //console.log(val.length);
// //console.log(val.toFixed(2));

// const val1 = String ('7');
// const val2 = 9;
// const sum = (val1 + val2);
// console.log(sum);
// console.log(typeof sum);

// const num1 = 100;
// const num2 = 40;
//let val;

//simple maths with number

// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // maths object
//  val = Math.PI;
//  val = Math.E;
//  val = Math.round(2.4);
//  val = Math.ceil(2.4);
//  val = Math.floor(2.8);
//  val = Math.sqrt(64);
//  val = Math.abs(-3);
//  val = Math.pow(8, 4);
// val = Math.min(30, 5, 6, 2);
// val = Math.max(20, 15, 6);
// val = Math.random();

// val = Math.floor(Math.random() * 30 + 1);

// const firstName = 'High';
// const lastName = 'Chief';
// const age = 30;
// const str = 'Hello dear, my name is kelechi';
// const tag = 'web development,programming,web developer';

// val = firstName + lastName;

// // concatinate

// val = firstName + ' ' + lastName;

// // Append
// val = 'High ';
// val += 'Chief';

// val = 'Hello, my name is ' + firstName +  ' I am  ' + age

// // Escaping

// val = "that's superb, i can't even wait";

// // length
// val = firstName.length;

// //concat()
// val = firstName.concat(' ', lastName);

// // change case
// val = firstName.toUpperCase();
// val = lastName.toUpperCase();

// val = firstName[2];

// //indexof()
// val = firstName.indexOf('g');
// val = firstName.lastIndexOf('i');

// //charAt()
// val = firstName.charAt('2');
// val = firstName.charAt(firstName.length - 1);

// // substring
// val = firstName.substring(0,4);

// //slice()
// val = firstName.slice(-3);

// //split
// val = str.split(' ');
// val = tag.split(',');

// // replace()
// val = str.replace('kelechi', 'king');

// //include()
// val = str.includes('Hello')


const name = 'preist';
const age = '30';
const job = 'web developer';
const country = 'Nigeria';
let html;

//Without templete strings (es5)
html = '<ul><li>Name: ' + name + '<li><li>Age: ' + age + '</li><li> Job: ' + job + '</li><li>Country: ' + 
country + '</li></ul>';


html = '<ul>' +
        '<li>Name: ' + name + '<li>' +
        '<li>Age: ' + age + '<li>' +
        '<li>Job: ' + job + '<li>' +
        '<li>Country: ' + country + '<li>';


function hello(){
  return 'hello';
}


// with template  strings (es6)
html = `
  <ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Country: ${country}</li>
  <li>${4+4}</li>
  <li>${hello()}</li>
  <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
`;


document.body.innerHTML = html;


 