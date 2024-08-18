// adding two numbers only if arguements passed are numbers

function addTwoNums(num1 , num2){
    if(typeof(num1) === 'number'){
        if (typeof(num2) === 'number') {
            return num1+num2;
        } else{
            console.log("Invalid Input1");
            
        }        
    } else{
        console.log("Invalid Input");
        
    }
}

console.log(addTwoNums( 5, 7 ))

// var a = 7
// console.log(typeof(a));
