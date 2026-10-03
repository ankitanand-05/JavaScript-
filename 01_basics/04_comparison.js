console.log(2 < "3")  // true
console.log("2" < "3")  // true
console.log("2" < 3)  // true
console.log("2" == 2)  // true

console.log("2" === 2) //  false , not of same datatype

//  NOTE: when using relational opeartors < ,> js performs auto type conversion if the type is diiffent  

// console.log(null > 0)    false
// console.log(null == 0)    false  --> here null is nit converted into zero 
// console.log(null >= 0)    true  -- > auto js give value of null = 0 , so 0>=0 --> true

// Strict Checking  ( === )