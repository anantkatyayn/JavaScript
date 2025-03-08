// For loop syntax:
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// break statement: terminates the loop once break statement is encountered.
// continue statement: skips that particular condition if continue occurs.



//While loop syntax:
// while (condition) {
    // code block
// }

// do-while loop syntax:
// do {
    // code block
// } while (condition);


// const arr = ["Batman", "Superman", "Flash", "GreenLantern"]
// //for-of loop syntax:
// for (const element of arr) {
//     // console.log(element);
    
// }

// let str = "Hola Amigo"
// // console.log(str.split(""))
// for (const element of str) {
    
// }




//Table using normal for loop


for(let i = 1; i<=10;i++){
    console.log(" ")
    console.log(`Table of ${i}`)
    for(let j=1; j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`)
    }
}