import countries from '../data/countries.js'

console.log(countries)
// //const countries = [
//   "Albania",

//   "Bolivia",

//   "Canada",

//   "Denmark",

//   "Ethiopia",

//   "Finland",

//   "Germany",

//   "Hungary",

//   "Ireland",

//   "Japan",

//   "Kenya",
//   "Assaaaa",
// ];

const webTechs = [
  "HTML",

  "CSS",

  "JavaScript",

  "React",

  "Redux",

  "Node",

  "MongoDB",
];

let filteredCountries = [];
for (let index = 0; index < countries.length; index++) {
  const element = countries[index];
  filteredCountries.push(countries.includes("aa"));
}

//onsole.log(filteredCountries)

// filteredCountries.forEach(item=>item.console.log)

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let newtext = "asd";
newtext = "";
for (let i = 0; i < text.length; i++) {
  const element = text[i];
  if (!element.includes(",") && !element.includes(".")) {
    newtext += element;
  }
}
let arrStr=newtext.split(' ')
//console.log(arrStr.length)

const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let honeyAlergie=true;
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat')
}
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Meat')
}
if(shoppingCart.includes('Honey') && honeyAlergie){
    const index=shoppingCart.indexOf('Honey');
    shoppingCart.splice(index,1);
}
if(shoppingCart.includes('Tea') ){
    const index=shoppingCart.indexOf('Tea');
    shoppingCart.splice(index,1,'Green Tea');
}
//console.log(shoppingCart)

const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

const  backEnd = ['Node','Express', 'MongoDB']

const fullStack=backEnd.concat(frontEnd)
//console.log(fullStack)

const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25,24 ]
ages.sort();
let avg=0;
if(ages.length %2===0 ){
    const value=ages.length/2;
    avg=(ages[value-1]+ages[value])/2;
    
}else{
    avg=ages[Math.floor((ages.length -1)/2)];
}
//console.log(avg)

const max =Math.max.apply(null,ages)
const min =Math.min.apply(null,ages)
// console.log(max)
// console.log(min)

