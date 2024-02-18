// function funcName(){}      //Execution of function
// Executing : calling function and Referencing : storing it as a value or passing it as a function to another function

// function addNumbers(paramater_1,parameter_2) {

//     console.log( paramater_1 + parameter_2)
// }
function addNumbers(paramater_1,parameter_2) {
     return paramater_1 + parameter_2
}
addNumbers(1,2)
// addNumbers(arguments)
// addNumbers()   will return NaN
const result = addNumbers(5,9)
// console.log(result);

function userLoginMessage(userName = "User") {   // Default value
     if(userName){
          return `${userName} just logged in`
     }
     console.log("Please Enter Username");
}

// console.log(userLoginMessage("Varshil"))
console.log(userLoginMessage())