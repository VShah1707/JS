const promiseOne = new Promise(function (resolve, reject) {     // Promise is created
    // Asynce tasks : DB calls, cryptography, network calls
    setTimeout(() => {
        console.log('Async Task is Complete');
        resolve()
    }, 1000)
})

promiseOne
    .then(() => {              // resolve
        console.log('Promise Consulmed')
    })        
    .catch(() => { })         // reject

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Promise 3')
        resolve({name : 'varshil', age : 22})
    },1000)
})

promiseThree.then((data) => {

    console.log(data)
})


const promiseFOur = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if(!error){
            console.log('No Error Found')
            resolve({name : 'varshil', age : 22})
        }else {
            reject("Error : Something went wrong")
        }
    },1500)
})

promiseFOur
.then((data) => {
    // console.log(data)
    return data.name
})
.then((userName) => {
    console.log(userName)
})
.catch((err) => console.log(err))
.finally(() => console.log('Promise is completed'))

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if(!error){
            console.log('No Error Found')
            resolve({name : 'javascript', password : 22})
        }else {
            reject("Error : JS went wrong")
        }
    },2000)
})


async function consumePromiseFive() {
    try{
        const response = await promiseFive
        console.log('Promise 5',response)
    }
    catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function fetchAPI () {
// try
// {    const requestURL = 'https://api.github.com/users/VShah1707'
//     const response = await fetch(requestURL)
//     const data = await response.json()
//     console.log(data)
// }
// catch (error) {
//     console.log("ERROR",error)
// }
// }
// fetchAPI()
const requestURL = 'https://api.github.com/users/VShah1707'
fetch(requestURL)
.then((res) => {
    // console.log(res)
    return res.json()
})
.then((data) => console.log(data))
.catch(err => {
    console.log(err)
})
