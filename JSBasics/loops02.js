// for of loop


const arr = ["Captain America", "Ironman", "Thor", "Hulk", "Black Widow"]
for(const hero of arr){
    // console.log(`This is ${hero}`)
}


const greeting = "Hello People"
for(greet of greeting){
    // if(greet == " ") break;
    // console.log(`Each Character is ${greet}`)
}



//for of loop doesn't work on objects, for objects we can use for in loop
const myObject = {
    cpp:"C Plus plus",
    js:"Javascript",
    rb:"Ruby",
}

for(key in myObject){
    // console.log(`${key} is file extension for ${myObject[key]}`)
}
// console.log(myObject.cpp)               // output: C Plus plus
// console.log(Object.keys(myObject))      // output: [ 'cpp', 'js', 'rb' ]
// console.log(Object.values(myObject))    //output: [ 'C Plus plus', 'Javascript', 'Ruby' ]
