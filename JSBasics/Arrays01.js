const myArr = [];
const myArr2 = new Array(0,1,2,3,4,5)
for(let i = 0 ; i<=5 ; i++){
    myArr.push(i)
}

// console.log(myArr);
// console.log(myArr2);


const myn1 = myArr.slice(1,4)
console.log(myn1);
console.log(myArr);


const myn2 = myArr2.splice(1,4)
console.log(myn2);
console.log(myArr2);