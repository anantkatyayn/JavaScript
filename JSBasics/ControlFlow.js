// This file contains details about if-else ladder, switch statement, Truthy and falsy values, nullish coalescing operator, terniary operator.

//------------------------------------------------------------------------------------------------------------------------------//
// if-else statement
//syntax: 
/* if(condition){
    code block
} else if(condition2){
        code block
}    
*/
/* if(condition && condition2){
    code block
} else if(condition3 && condition4){
        code block
}    
*/

// example:

// var age = 21;
// if(age < 18){
//     console.log("You can't drive!");
// } else if(age == 18){
//     console.log("get a license and start driving");
// } else{
//     console.log("We hope you're driving with a license.");
// }


//------------------------------------------------------------------------------------------------------------------------------//


//Switch Statement
//Syntax:

// switch(key){
//     case value1 :
//         statement
//         break;
//     case value2 :
//         statement
//         break;
// }


//example:

// let month = 15;
// switch (month){
//     case 1:
//         console.log("jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 5:
//         console.log("May");
//         break;
//     case 6:
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;
//     case 8:
//         console.log("aug");
//         break;
//     case 9:
//         console.log("sept");
//         break;
//     case 10:
//         console.log("oct");
//         break;
//     case 11:
//         console.log("nov");
//         break;
//     case 12:
//         console.log("Dec");
        
//     default : console.log("Invalid Input");
    
// }



//------------------------------------------------------------------------------------------------------------------------------//

//falsy values:
// false, 0, -0, 0n(in BigInt), "", undefined, null, NaN

//Truthy values:
// "false", "0",[] etc


//------------------------------------------------------------------------------------------------------------------------------//

// Nullish Coalescing Operator(??) :
// used to assign safe value among 2 values that might be coming from backend.
//Syntax: 
// const var1 = value1 ?? value2


//------------------------------------------------------------------------------------------------------------------------------//

// Terniary operator
// Short hand syntax for Single if-else
//Syntax:
// condition ? trueCaseValue : falseCaseValue

// example:

// const age = 12;
// (age > 18)? console.log("yes age is greater than 18") : console.log("nope, better luck next time");



//------------------------------------------------------------------------------------------------------------------------------//