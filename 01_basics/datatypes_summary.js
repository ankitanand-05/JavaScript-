// Primitive and Non-Premitive  --> based on memory refrence (call by value & call by refrence)

// Primitive : 7 types -->  String, Number, null, undefined, Boolean, Symbol, BigInt

// Non-Premitive (Refrence type) : 3 types -->  Array, Objects, Functions


// Note: typeof(null) =>  object
//       typeof(non-premitive)  => object   --> irrespective it is array , object or function
// Dynamically typed and Statically Typed 
/*
    dynamically :   type is checked during run time 
                    variable type can be changed 
                    type declaration is usually not required
                    Ex: js , python 
   
    statically : type is checked during compile time
                 variable type is generally fixed
                 type declaration is usually required
                 Ex:  c, c++


    dynamic:   let x = 5    --> x is integer
               x = "Ankit"  --> x is String   => allowed datatype can be changed 

    static:  int x = 5;
              x = "Ankit";    --> ERROR   not allowed , because x is integer compile time it is already declared 

*/


/*
 Symbol are different for each     , declaration 



*/
  
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)   //  false , although value in synbol are same  -->  it is because symbols are declared different 

//Array
let heros = ["Thor" , "Ironman", "Captain"]

//Object
let student={
    name:"Ankit",
    rollNo: 15,
    course:"B.Tech"
}
 
// function 
let myFunction = function(){
    console.log("Hello, Ankit")
}


