const userObj = {
    userName : "Varshil",
    price : 999,
    welcomMessage : function(){
        console.log(`${this.userName}, Welcome to Website`);
        console.log(this);
    }

}
// userObj.welcomMessage()
// userObj.userName = "Sobha"
// userObj.welcomMessage() // Context change
// console.log(this)

// function one() {
//     let userName = "Varsil"
//     console.log(this);   // Cannot access the userName like this
// }
// one()

const arrowFunction = () => {
    console.log(this);
}
// arrowFunction()
// () => {}
 