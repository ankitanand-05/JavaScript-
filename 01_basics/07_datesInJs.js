// DATES

let myDate = new Date()   
// console.log(myDate)   // 2026-10-03T13:53:41.131Z  (not readable)

// console.log(myDate.toDateString())   // Sat Oct 03 2026
// console.log(myDate.toLocaleString())  // 10/3/2026, 2:01:53 PM

// interview question datatype of myDate   --> typeof(myDate) ==> object 


// how to create your own date 
let myCreateDate = new Date(2006,1,16)  // number format  ==>  january starts at 0 , so1 means Feb
//console.log(myCreateDate.toDateString())   #  Thu Feb 16 2006

// String format 

let myNewCreateDate = new Date("2026-01-16")  // string format
// console.log(myNewCreateDate.toLocaleString()) // 1/16/2026, 12:00:00 AM   ==>  in string format --> 01 means Jan

// For current time 
let myTimeStamp = Date.now()
// console.log(myCreateDate.getTime())  // it will give millisecond from 01 Jan, 1970 till now  //  114004800093(something like this)
//  it convert it into second
//console.log(myCreateDate.getTime()/1000)  114004800093/1000 --> it will give value in decimal therefore to covert it into number use Math.floor
// console.log(Math.floor(myCreateDate.getTime()/1000))

// These all are used to calculate differences between dates ,   use chatgpt while reading it's usuage 
console.log(myNewCreateDate.toLocaleString())