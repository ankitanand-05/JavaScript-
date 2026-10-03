// link -->  https://developer.mozilla.org/en-US/docs/Web/API/console/log_static

const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

/*
  main difference is primitive number vs Number object in JavaScript.
  score --> primitive number    new Number -->  object

  Here, balance is a Number object, not a primitive.
console.log(typeof score);    // "number"
console.log(typeof balance);  // "object"
console.log(100 === new Number(100)); // false
*/

// .toFixed(2)  --> after decimal 2 digits

/*
const otherNumber = 1345.715734
console.log(otherNumber.toPrecision(5))
console.log(typeof(otherNumber.toPrecision(5)))  // string
 Note:  othernumber is a number but after using toPrecision() --> it become string, hence we can say toPrecision() returns string value.

*/

/*
const hundreds = 10000000  // read to read 
 .toLocaleString() is used to increase readability 
console.log(hundreds.toLocaleString()) // 10,000,000
console.log(hundreds.toLocaleString('en-IN'))  // 1,00,00,000   --> for Indian Number system 
*/


// ------------------------------------  MATH   ----------------------------------------------

console.log(Math)

/*  

 .abs()  =>  absolute value -->  convert -ve into +ve

  Round off

.round()   --> normal round off
.ceil()    --> gives upper value
.floor()   --> gives lower value
.pow()     --. for power

*/

// console.log(Math.round( 76.867))  // 77
// console.log(Math.floor( 76.867))  //76
// console.log(Math.ceil( 76.867))   //77 
// console.log(Math.sqrt( 81)) 
// console.log(Math.pow(2,5))
// Math.min()  , Math.max()

//.random()   --> it general value is b/w 0-1, including 0 ==>  [0,1)
console.log(Math.random())

// to get more then 1 to 10  , [1,10] 
console.log((Math.random()*10) + 1)

// To get a random integer number b/w give range

const min = 10
const max = 20
// max
console.log(Math.random() * (max - min + 1 ) + min) //  it will give a value b/w the range but decimal value, so to remove decimal value floor() is used

console.log(Math.floor(Math.random() * (max - min + 1 )))