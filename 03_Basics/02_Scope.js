// {}  <==  scope

// var c = 200
let a = 300 // Global scope
if (true) {
    let a = 10  // Local scope
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);


// ========================= Nested Scope ===========================

function one() {
    const userName = "Varshil"
    function anotherFunction() {
        const email = 'test@mail.com'
        // console.log(userName);
    }
    // console.log(email);
    anotherFunction()
}

one()

// ++++++++++++++++++++++++++ Hoisting +++++++++++++++++++++++++++++++
addOne(9)

function addOne(num) {
    console.log(num + 1);
    return num + 1
}

// addTwo(4) // Cannot call the function before initialization
const addTwo = function (num) {
    return num + 2
}
// arrowFunc()  // Cannot call the arrwo function before initialization
const arrowFunc = () => {
    console.log('This is an Arrow Func');
}