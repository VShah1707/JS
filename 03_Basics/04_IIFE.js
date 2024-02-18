// Immediately Invoked Function Expression (IIFE)

(function code() {
    console.log("Hello World");
})();
// ; is mandatory to complete its execution 
// ()() : first one is the function definition & second one is its execution
// Used to deal with the pollution of global scope
// (() => {})()   :  this is IIFE is invoked using arrow function 