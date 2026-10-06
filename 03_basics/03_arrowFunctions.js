/*

const user = {
    username: "Ankit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)

    }
}
user.welcomeMessage()    //  Ankit, welcome to website
user.usernmae = "Anand"
user.welcomeMessage()    // Anand, welcome to website

*/

// Now check the output when you print this

const user = {
    username: "Ankit",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)  // 1st 
    }
}
// user.welcomeMessage()  
 /*   Ankit, welcome to website
                                {
                                username: 'Ankit',
                                price: 999,
                                welcomeMessage: [Function: welcomeMessage]
                                }     */

user.username = "Anand"   // username changed 

// user.welcomeMessage() 
  /*  Ankit, welcome to website
                            {
                            usernmae: 'Ankit',
                            price: 999,
                            welcomeMessage: [Function: welcomeMessage]
                            }
                            Anand, welcome to website
                            {
                            usernmae: 'Anand',
                            price: 999,
                            welcomeMessage: [Function: welcomeMessage]
                            }     */


// NOTE:   when print this in outside the object

console.log(this)  // output   {}   --> it will give outout as empty object    ==>  keep in mind kaha pr ky output dega 

/* Note:   when you inspect and then in console if you run console.log(this)  
==>   output will be   
            #    Window {window: Window, self: Window, document: document, name: '', location: Location, …}
   -->  means there output will be a window object

   For interview purpose reason are :
  Node.js treats each .js files as a module. At the top level of a CommonJSmodule, this refers to the module's exports object , so this reers to the object 
 But in case of the browser window is the global object, so this refers to the window 

*/

// ___________________________________________ ARROW FUNCTION  _________________________________


/*  
  syntax check for both 

  main difference b/w both is use of this keyword
  Normal function
A normal function gets its own this depending on how the function is called.

const person = {
  name: "Rahul",
  greet: function () {
    console.log(this.name);
  }
};

person.greet();
Output: Rahul

Here:
this === person
because the function was called as:
person.greet()

Arrow function
Arrow functions do not have their own this.

They take this from the surrounding/lexical scope.
const person = {
  name: "Rahul"
  greet: () => {
    console.log(this.name);
  }
};

person.greet();
This will generally print:
undefined

because the arrow function does not make this refer to person.

Important rule
Normal function: this depends on how the function is called.
Arrow function: this comes from the surrounding scope.


Another main difference is in emplicit and explicit return 

use chatgpt to know more differences

*/

/* 
curley bracket mein likha toh return keyword likhna parega , 
 single line mein with or without parenthesis mein likha tohh your wish return keyword use kro ya fir nhi kro

Implicit and Explicit return 

Implicit return ==>  without using return keyword
Explicit =>  use return 

While returning the object,  parenthesis is imp 

const employ = () => ({user: "username"})
console.log()

*/ 
// const employ = () => {user: "username"}  // # output --->  undefined 
const employ = () => ({user: "username"}) // so parenthesis is used to return an object
console.log(employ())   // output:  { user: 'username' }

const army = () => ({
    name:"armyname",
    age:25,
    regiment: "Bihar regiment"
})
console.log(army())   // implicit return of object   -->  { name: 'armyname', age: 25, regiment: 'Bihar regiment' }

/*   
     javaScript interprets {} after => as a function body, not an object. So we need parenthesis to return the object.
  NOTE:    const employ = () => ({user: "username"})  --->  understand this what is it written , aage doms mein kaam aayega
*/