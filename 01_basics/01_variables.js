const accountId = "1n23d3"
let accountPassword = "Ankit@123"
var accountEmail ="amp@gmail.com"

 accountCity ="patna"   // this is also allowed in js 

 let accountState; // it will show undefined because no any value is assigned in it 

//  accountId = 3n14k6   ---> not allowed , because it is declared by usng const

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/


// console.log(accountEmail);
// console.log([accountId, accountEmail])    // for more than one 

console.table([accountEmail, accountId,accountPassword,accountCity])
