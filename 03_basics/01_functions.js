
/* 
function declaration syntax:
    function function_name (){}


    function greeting(){
    console.log("Hello CodeReapers")}
    
    note:  greeting    --> it is function refrence 
           greeting()  --> it is function calling   

function greeting(let a, let b ){   }     --> no lte,const , var ==>   wrong syntax of javascript's function     

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){    -->  parameter is username =>  here "sam" is a default value if no any parameter ....is                                                     is given it will use sam as the user name
    if(!username){
        console.log("PLease enter a username");   --->  aab ye if statement kabhi runhi nhi hoga because condition is always false 
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))



function calculateCartPrice(num1){
return num1
console.log(calculateCartPrice)     
}

calculateCartPrice(5)     # 5 

But assume the situation when you have to display all the values given by the user as the parameter , then we use   rest(...) operation to display all 
NOTE:  yes spread(...)  was also same as like this , it depends on the situation when it act as a spread and when as the rest , It also return the array type

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))    # [200, 400, 500, 2000]


Now another situation parameter is declared in other types      val1, val2    also used 

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))    # [ 500, 2000]   since we have return only num1  ==> val1 = 200 & val2 = 400 hence it doesn't show in output  ==>   difference while using  both different type of parameters , remember it asked in interview




const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// Another way to give parameter  --> above we have passed a already made object but below we have made an object while passing in parameter

handleObject({
    username: "sam",
    price: 399
})

// Similarly we can pass array in function 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]    // not myNewArray[] , because it is generalised so getArray will automatically get the array that have been pased in the function //  means returnSecondValue(myNewArray)  --> myNewArray has been passed in the function but when the function is called getArray, therefore getArray is used. 
}

// console.log(returnSecondValue(myNewArray));  #  400 

// Now make a array in parameter 
console.log(returnSecondValue([200, 400, 500, 1000]));

*/