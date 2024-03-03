console.log(Math.PI);

const chai = {
    name:'Insaan',
    Price: 199,
    isAvialable: true
}

console.log(chai);

console.log(Object.getOwnPropertyDescriptor("chai","Piyush"));
// Object.defineProperty(chai,'name');{
//     Writable: false
// }

// console.log(Object.getOwnPropertyDescriptor("chai","name"));

for(let [key,value] of Object.entries(chai)){
    console.log(`${key}: ${value}`);
}