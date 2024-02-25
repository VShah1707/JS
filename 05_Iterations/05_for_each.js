const log = console.log
const coding = ["JS", "C", "C++", 'Python', "Java"]

// coding.forEach((value, index) => log(value))

coding.forEach(val => val.toUpperCase())
log(coding)


const values = coding.forEach(item => {
    console.log(item);

})
console.log(values);

// it does not return any value