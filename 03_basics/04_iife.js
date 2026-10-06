// Immediately Invoked Function expression (IIFE)

/*
  It is a function that is created and executed immediately , without you having to call it seperately.
  
  Noraml function 
  1. Define a function 
  2. call the function --> amp()

  function greeting (){
   console.log("hello Ankit")
  }
  greeting()
   
  IIFE:
  The function is defined and immediately executed.

( function greeting (){
   console.log("hello Ankit")
  })()    
   
  syntax:  
                (function() {
                  })()   
      ---> function is wraped inside a parenthesis and at last one more () is used
 
    

      1st bracket which wrap the function is used to create function into the function expression & the last one is used for calling/invoking  

    Advantages of using IIFE

   1.  one major reason is creating a private scope  , whose variable cannot be accessed from that scope
    Example:
        (function (){
        const password = "Ankit@123"
        console.log(password)
        })()      -->   it will be called imediately 

    Note :   But if you access the inside variable from outside 
          console.log(password)   ==>  error:
    
    2. Also it is used to avoid polluting the global scope  -> variable used inside iife won't pollute the outside 

    # Asked in interview =>  1st reason tohh sbko pata hota hai but 2nd nhi , so dono use btana iife ka 


  IIFE with an anonymous function (no name)
 you don't even need to give the function a name:

 (function (){
   console.log("Ankit")
   })()

   With arrow function 

   (() => {
        console.log("Ankit")
        })()

*/

/*    
    VERY IMPORTANT NOTE:  use of semi colon

1.   (function (){
   console.log("Ankit")
   })()

   (function (){
   console.log("Anand")
   })()

here it will give the error  because it seems that javascript sees this as 2 seperate statements   IIFE1 and IIFE2  , but  JS can interpret them as one continuous  expression because the newline does not always mean "statement ended" .

what js understand :
 (function (){
   console.log("Ankit")
   })()(function (){
   console.log("Anand")
   })()

reason of error:   iife execute and prints   Ankit    but hti function doesn't return anything, so its return value is 'undefined'   Then js effectively tries to do: 
  undefined(function(){
  console.log("Anand")
  })()   -->  You are trying to call undefined as a function, so you get TypeError: undefined is not a function 
*/

// correct way -->  put a semi colon after the first IIFE 
(function (){
   console.log("Ankit")
   })();

   (function (){
   console.log("Anand")
   })()

// output :  Ankit
//           Anand

/*   
     Important rule for IIFE 

  When writing multiple IIFEs one after another, it's a good practice to start each one with semicolon(;)  or end with semi colon 

  since generally we are not using the semi colon at end therefore we might forget to put here also 
  Therefore we will use in starting 

  (function (){
   console.log("Ankit")
   })();

   (function (){
   console.log("Anand")
   })()

             OR                 
        
   (function (){
   console.log("Ankit")
   })()

   ;(function (){
   console.log("Anand")
   })()

*/

/*  
        HOW TO GIVE PARAMETER IN IFFE
        
        in normal function parameter is passed in parenthesis that is used for calling
        ex:
        greeting()  // calling 
        greeting (Ankit)  // parameter is passed inside the calling parenthesis


        syntax: 

        ( (argument) => {
          // scope
          }) (parameter)

          ex:   

          ( (name) => {
            console.log(`My name is ${name}`)
            })('Ankit')

*/

;((name) => {
            console.log(`My name is ${name}`)
            })('Ankit')




  /*  
                   NAMED IIFE
     
                   (function greeting() {  
                   console.log("Hello Coder")
                  })()   
    name of iife is greeting  ==>  so it in named iife

             unnamed iffe 

        (function () {  
                   console.log("Hello Coder")
                  })()   

  */