// Reduce method execute a reducer function "Call-back" function on each elementof the array.


const array1 = [1, 2, 3, 4];

const sumWithInitial = array1.reduce((acc,curr) => {
    console.log(acc, curr);
    return acc + curr
}, 0)
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );


// accumulator is the empty value. First time it will take the value from the initialValue which we declared then the result
// value of accumulator + currentValue will be new accumulator.
console.log(sumWithInitial);