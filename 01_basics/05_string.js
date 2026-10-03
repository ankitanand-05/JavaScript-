// Now a days back tick(``) is used for string declaration 



let gamerName = "ankitanand05"

console.log(gamerName.length)  // 12
console.log(gamerName.toUpperCase) // ANKITANAND05
// NOTE: after using the .toUppercase()  my original string is still ankitanand05, it is because it is premitive and primitive usage stack memory 

console.log(gamerName.charAt(2)) // output:k  --> which charater is present at 4th index
console.log(gamerName.indexOf('t')) // output :  4 

// substring
const newString = gamerName.substring(0,6 )  // 6th index not included

const anotherString = gamerName.slice(-8,-2)

// Note: Difference b/w both substring and slicing  ==>  in slicing -ve index is also allowed
// but if in subString -ve index is used then it will start from 0 

let newStringOne = "    ankitaanand@gmail      "
// console.log(newStringOne)  // output:     ankitaanand@gmail      
// console.log(newStringOne.trim())  //output: ankitaanand@gmail  --> it remove indentation (extra space) 

// .replace(searchValue , replaceValue) 
//  .include()   ==>  checking if value is present inside the string => output true or false 
console.log(newStringOne.includes("Ankit"))   // false , because ankit is present not Ankit

// how to seperate the string   
// Ex : "Ankit Anand Soni Milan Ashish" ---> here is many name in one string , i want to seperate it 
// .split('seperator')  or .split('seperator' , limit)
// seperator can be space (like above) , - , _ , comma ... etc    "Ankit-Anand-Soni-Milan-Ashish"
let amp = ["Ankit-Anand-Soni-Milan-Ashish"]
// console.log(amp.split('-'))  // it will show error because .split() is an string method not of array, here amp is an array

let a = "Ankit-Anand-Soni-Milan-Ashish"
console.log(a.split('-'))










