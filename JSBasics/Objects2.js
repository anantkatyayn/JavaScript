//singleton objects made by create() or new Object()



const newObj = new Object(); //singleton object
newObj.name = "Anant";
newObj.age = 18;
newObj.email = "hallo@freunds.com";

// console.log(newObj);

const holaObj = {
    // userName : {
    //     fullName : {
    //         firstName : "Anant",
    //         lastName : "Katyayn"
    //     }
    // },
    DOB : "21-07-2004",
    marks : [10,40,35,65]
}


// console.log(holaObj.userName.fullName.lastName);
// console.log(holaObj.marks[3]);


// const cmbnObj = Object.assign({},newObj, holaObj)            //another way of concatenating two  objs
const cmbnObj = {...newObj,...holaObj}
// console.log(cmbnObj);
console.log(cmbnObj.hasOwnProperty('DOB'))

// DESTRUCTURING AN OBJECT **This helps in shortening regular syntax of logging sny particular key of an object**

//SYNTAX : 
// const {key : alias} = objectName;
// console.log(alias)

//for eg:

const {marks : m} = cmbnObj;
console.log(m);
