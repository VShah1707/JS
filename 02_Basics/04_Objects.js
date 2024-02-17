 // Singleton or with the help of constructor
// const tinder = new Object()
// tinder.id = 123
// tinder.name = 'Varshil'
// tinder.isLoggedIn = true
// console.log(tinder);

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

const obj3 = {obj1,obj2}

console.log(obj3);