// adding two numbers only if arguements passed are numbers

function addTwoNums(num1 = 7 , num2){                       //to define a default value of parameter 
    if(typeof(num1) === "number"){
        if (typeof(num2) === "number") {
            return num1+num2;
        } else{
            console.log("Invalid Input1");
            
        }        
    } else{
        console.log("Invalid Input");
        
    }
}

// console.log(addTwoNums( 5, 6))

// var a = 7
// console.log(typeof(a)); 



// REST OPERATOR = "...", Rest and Spread operator are same syntactically but according to usecase their functionality change.
//rest operator take as many number of inputs and bundles them in an array while spread operator makes elements of array as single entity.


function useRest(...num){
    return num
}

console.log(useRest(400,500,7000,400,520))