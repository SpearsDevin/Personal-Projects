console.log('Hello World');
//alert('Hello this Devin');

//alert('Yo')

// How to write a comment inline


//Variables
var b = 'smoothie';
console.log(b);

//var someNumber = 45;
//console.log(someNumber);


//var age = prompt("What is your age?");

//document.getElementById('someText').innerHTML = age;

// Numbers in Javascript
var num1 = 10;

// Increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, Multiply *, remainder %
console.log(num1 % 6);


// Increment/Decrement by 10
num1 += 10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/

// Create
function fun(){
    console.log('this is a function');
}

// Call
fun();

/* Let's create a function that take in a name and returns to you
and says hello followed by your name

for example

Name: "Devin"
Return: "Hello Devin"
*/


function greeting(yourName) {
   var result = 'Hello ' + yourName; // String Concatenation
   console.log(result);
}
//var name = prompt("What is your name?");

greeting(name);

// How do arguments work in functions?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(num1 + num2);
}

sumNumbers(10, 10);

/* While loops

var num = 0;

while(num < 100) {
    num += 1;
    console.log(num)
}

*/

// For loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}

// Data types
let yourAge = 18;                            // number
let yourName = 'Bob';                        // String
//let name = {first: 'Jane', last: 'Doe'};   // object
let truth = false;                          // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random;                                 // undefined
let nothing = null;                         // value null

// Strings in Javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';           // new line

console.log(fruit.length);
console.log(fruit.indexOf('an'));
console.log(fruit.slice(2, 4));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by characters


// Arrays
let fruits = ['banna', 'apple', 'orange', 'pineapples'];
fruits =  new Array('banna', 'apple', 'orange', 'pineapples');

console.log(fruits[1]);// access value at index 1st

fruits[0] = 'pear'; // change values
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//array common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits);  // removes last item
console.log(fruits.push('blackberries'), fruits); // adds an item
console.log(fruits[4]);
fruits[4] = 'new fruit';
console.log(fruits);
fruits.shift();  //removes first element from a list
console.log(fruits);
fruits.unshift('kiwi');  //add first element to an array
console.log(fruits)
let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); // combine arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());

let someNumbers = [5, 10, 2, 25, 3, 225, 1, 2, 5 ,334, 321, 2];
console.log(someNumbers.sort());
