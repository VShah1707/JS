const numbers = [1,2,3,4,5,6,7]
const newNums = numbers.filter((item, index, arr) => {
    return item % 2 === 0
})

console.log(newNums);

