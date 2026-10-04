// Thee are two ways to create the object 1. using constructor 2.using literals 

// using the constructor   Singleton bnta hai 
// using literals singleton nhi bnta hai   ----> Interview question

// Object.create    -->  constructor method
// const object = {} -->  literals method

const mySym = Symbol("key1")

const Jsuser = {
    name: "Ankit",
    "full name": "Ankit Anand",
    [mySym]: "key1",
    age: 20,
    location: "Darbhanga",
    email: "ankit@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", 'Tuesday']
}

/* Accessing the object key value
   1. using dot
   2. bracket notation []
   3. accessing both key and value using Object.entries()

   Jsuser.name   --> Ankit
   jsuser.age    --> 20

   prblm arises when 

  const Jsuser = {
    name: "Ankit",
    full name: "Ankit Anand",
    age: 20,
    location: "Darbhanga",
    email: "ankit@googlr.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", 'Tuesday']
}

 1st use of Bracket notation  -- >  when we have to excess full name   (check object how full name is declared)

console.log(Jsuser.full name) ==> it will show error    --> We can excess it only through  bracket notation  

console.log(Jsuser["full name"])    # Ankit Anand 


2nd use -->        When to access the Symbol     (In interview it is asked how will you use symbol in object and how to access it or take a symbol add it in object and print it)

const mySym = Symbol("key1")


const Jsuser = {
    name: "Ankit",
    "full name": "Ankit Anand",
    mySym: "key1",                 // symbol added 
    age: 20,
    location: "Darbhanga",
    email: "ankit@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", 'Tuesday']
}
console/log(Jsuser.mySym)   # key1     -->    it is not a symbol it is just an string got printed although yo will get output : key1  but in object Jsuser symbol is not added directly like other key-value pairs  mySym: "key1"  
you can check it by checking datatype of mySym  

console.log(typeof Jsuser.mySym)  # string   --> but it should be symbol
mySym: "key1"    --->  above symbol is added like this , but it is not the corrct way of adding symbol   

Now correct way to add and access symbol
syntax:  to add symbol
 Symbol is added and can be accessed using the bracket notation only 

 add:   [mySym]: "key1"
 access:  Jsuser[mySym]     # key1

 NOTE:  typeof(Jsuser[mySmy])  or  typeof Jsuser[mySym]     ==>  both are correct syntax for typeof()

 typeof(Jsuser[mySmy])   #   string 
 typeof [mySym]          #   symbol     --> value of symbol is string 
   */

 /*  
       Changing the value of object
       Jsuser.age = 21

       How to lock the key-value which you don't want to get changed    ->  use    Object.freeze(Object_name.key)
          Object.freeze(Jsuser.email)
 */


  /* 
     Declaring function inside the object 

     jsuser.greeting = function(){
     console.log("Hello Ankit")
     }

     console.log(Jsuser.greeting)    # output:    function(anonymous)
     console.log(Jsuser.greeting())   # output :  Hello Ankit 
  */      
 
     
     /*
         Important    String Interpolation  -->  Done by using back tick (` ${} `)

     */

/*  
  
    Note:  when we have use 'this' in an object, its main use is to refer to the current object from inside one of its method  

    let user ={
    name:"Ankit",
    age:20,

    greet: function(){
    console.log(` My name is ${this.name} `)  // here this refers the above object
    }
 }

 Inside an object's method, this refers to the object that is calling the method.

const user = {
    name: "Ankit",

    welcome: function() {
        console.log(this.name)
    }
}

user.welcome()      # output   Ankit


const user1 = {
    name: "Ankit",

    sayName: function() {
        console.log(this.name)
    }
}

const user2 = {
    name: "Rahul",

    sayName: function() {
        console.log(this.name)
    }
}

user1.sayName()
user2.sayName()

output:   Ankit
          Rahul

  this.name

gets the name from the object currently calling the method.

For user1:

this → user1
this.name → "Ankit"

For user2:

this → user2
this.name → "Rahul"

*/