// Object Literals
const mySYmbol = Symbol('key')
const myObj = {
    name: 'Varshil',
    age: 22,
    location: 'Ahmedavad',
    email: 'varshil@gmail.com',
    isLoggedIn: false,
    [mySYmbol]: 'This is How Symbol is Refered',
}
// console.log(myObj.age);
// console.log(myObj[mySYmbol]);
// Object.freeze(myObj)  : it will freeze the object preventing it for further modication

myObj.greeting = function(){
    console.log("Hello World");
}
myObj.greeting2 = function(){
    console.log(`Hello ${this.name}`);
}

console.log(myObj.greeting())

