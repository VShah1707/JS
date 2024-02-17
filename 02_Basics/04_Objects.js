// Singleton or with the help of constructor
// const tinder = new Object()
// tinder.id = 123
// tinder.name = 'Varshil'
// tinder.isLoggedIn = true
// console.log(tinder);

// Object.assign(target,source) : return new object 


const regularUser = {
    email : 'test@test.com',
    fullName : {
        fName : 'varshil',
        lName : 'shah'
    },
}
const obj1 = {
    1 : 'a',
    2 : 'b'
}
const obj2 = {
    3 : 'c',
    4 : 'd'
}
const obj3 = {
    3 : 'c',
    4 : 'd'
}
// obj1.hasOwnProperty() ==> to check whether the key is present or not
// Object.entries() ==> return an array of ['key' , "value"] 
// console.log(Object.keys(obj1));  To get the keys or values as well
// const result = {...obj1, ...obj2, ...obj3}
// const result = Object.assign({},obj1, obj2, obj3)
// console.log(result);
// console.log(obj1);