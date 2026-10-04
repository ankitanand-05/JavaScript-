// DATES
// 01 Jan, 1970
// Date is an object in js


let myDate = new Date()   
// console.log(myDate)   // 2026-10-03T13:53:41.131Z  (not readable)

// console.log(myDate.toDateString())   // Sat Oct 03 2026
// console.log(myDate.toLocaleString())  // 10/3/2026, 2:01:53 PM

// interview question datatype of myDate   --> typeof(myDate) ==> object 


// how to create your own date 
// let myCreateDate = new Date()  --> it will give today's current date  & to create our own date give parameter inside it.

let myCreateDate = new Date(2006,1,16)  // number format  ==>  january starts at 0, so 1 means Feb
//console.log(myCreateDate.toDateString())   #  Thu Feb 16 2006

// String format 

let myNewCreateDate = new Date("2026-01-16")  // string format
// console.log(myNewCreateDate.toLocaleString()) // 1/16/2026, 12:00:00 AM   ==>  in string format --> 01 means Jan

// For current time 
let myTimeStamp = Date.now()  // or myTimeStamp = new Date()
// console.log(myCreateDate.getTime())  // it will give millisecond from 01 Jan, 1970 till now  //  114004800093(something like this)
//  it convert it into second
//console.log(myCreateDate.getTime()/1000)  114004800093/1000 --> it will give value in decimal therefore to covert it into number use Math.floor
// console.log(Math.floor(myCreateDate.getTime()/1000))

// These all are used to calculate differences between dates ,   use chatgpt while reading it's usuage 
// console.log(myNewCreateDate.toLocaleString())

// to get some specific day, year etc use
/* 
  myNewCreateDate.getDate()
  myNewCreateDate.getMonth()
  myNewCreateDate.getFullYear() 
 

*/
let tarik = new Date()   
console.log(tarik)     // 2026-10-04T05:57:33.655Z

 // tarik will store current date and now we can acess or display day and month in numberic or full name , short etc
/* 
    since  Date is an object it have some properties associated with it

    tarik.toLocaleString('default' , {
    weekday: " long ",  # sunday
    month: " long ",    # october
    month: " short",    # oct
    month: "narrow",    # o
    year: " numeric ",    # 2026
    year:"2-digit"})      # 26
*/
 console.log( tarik.getMonth() )

/* 
     In place of Date API now a new proposal is came Temporal read about it 


*/



