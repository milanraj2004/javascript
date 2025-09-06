const heros = ["thor", "Iron man", "spiderman"];
const dc = ["superman", "flash", "batman"];

// const allHeros = heros.concat(dc);
// console.log(allHeros);


//heros.push(dc)
//console.log(heros);

// console.log(allHeros);

const all_new_heroes = [...heros,...dc]
console.log(all_new_heroes);

const another_Array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_new_AnotherArray = another_Array.flat(Infinity)
console.log(real_new_AnotherArray);

console.log(Array.isArray("Milan Raj"));
console.log(Array.from("Milan Raj"));
console.log(Array.from({name: "Milan Raj"}));// intresting 


let score1 = 100
let score2 = 200

let score3 = 300
console.log(Array.of(score1,score2,score3,dc,heros));

