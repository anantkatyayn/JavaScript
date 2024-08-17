const marv_heros = ["Ironman", "Captain America", "Thor"];
const dc_heros = ["Batman", "Superman", "Flash"];


// marv_heros.push(dc_heros)
// console.log(marv_heros);


// const all_heros = marv_heros.flat(2)
// console.log(all_heros);



// console.log(Array.from("Hola Amigo ".trim()));
// const obj = {0:"Anant",1:"Katyayn", 2:"Ayush", 3:"Sharma"}
// console.log(Object.values(obj));


// const new_heros = [...dc_heros , ...marv_heros]
// console.log(...dc_heros);

const new_heros = [1,"anant", ...dc_heros]
console.log(new_heros);


