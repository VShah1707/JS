// for loop
// for (let i = 0; i < 10  ; i++) {
//     console.log(i);
// }

// for(let i = 0;i <=20;i++){
//     if(i === 5){
//         console.log('5 detected');
//         break
//     }
//     console.log(i);
// }   It will break the loop 

for(let i = 0;i <=20;i++){
    if(i === 5){
        console.log('5 detected');
        continue
    }
    console.log(i);
}  // It will continue and will run for all the other numbers except 5