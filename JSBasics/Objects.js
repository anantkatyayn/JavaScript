const mySym = Symbol("key1")


const obj = {
    name : "Anant",
    [mySym] : "MyKey1", //syntax to use symbol as a key of object
    age : 18,
    mySym : "myKey2",
    email : "hallo@freund.com", 
}
// Object.freeze(obj)                           *in order to freeze object, i.e. no one can change it's values*

// console.log(obj.age);
// console.log(obj["mySym"]);
// console.log(obj[mySym]);
// console.log(obj.email);

// console.log(obj);

// obj.greetings = function(){
//     console.log(`hello ${obj.name}`);                *Another method to refer key of same object!*
    
// }

obj.greetings = function(){
    console.log(`hello ${this.name}`);                   
    
}

console.log(obj.greetings());
