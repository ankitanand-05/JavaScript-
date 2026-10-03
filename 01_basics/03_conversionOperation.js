let score = "5"
// typeof(score)  --> string not number

// conversion

let value = Number(score)   // NOTE: number is datatype not Number , but here Number is used . Simillarly String and Boolean capital S & B is used
console.log(value)

/* 
let score = "7"
  "7"  => typeof() == string
  7   => number
  "345afg"  => NaN   typeof() => number , NaN ka type number hi hai
  true = > 1;  false => 0

*/

// ********************** OPERATIONS ********************

console.log(2 ** 4)   // 2 to the power 4

//     CONCAENATION

console.log("1" + 2)  // 12
console.log(1 + "2")  // 12
console.log("1" + "2") // 12
console.log("1" + 2)  // 3
console.log(1 + 2 + "5")  // 35

// Prefix and Postfix    ++a , a++
// link to read -- > https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// or use mdn documentation