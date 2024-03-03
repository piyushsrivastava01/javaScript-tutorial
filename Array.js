const myArr = [0,1,2,3,4,5,7,6,8]
// console.log(myArr[5]);//print the index value::
// console.log(myArr.shift());
// console.log(myArr.unshift(0/7));

const newArr = myArr.join() // to access the Element from The second Array
console.log(newArr);
console.log(typeof newArr);

const Variable = ["hellobaby", "i love you", "sweatheart", "heartless", "vghjchj", "iloveYoujaan"]
// console.log(Variable.push(3));
// console.log(Variable.push(6));
// console.log(Variable.pop());

const newValue= ["jaan ho tum", "tumhe bhul nhi shakta hu", "kasam se bhai", "really i love you"]

Variable.push(newValue)
console.log(newValue);

Variable.concat(newValue)
console.log(Variable);



const array = [4,8,6,8,[5,8,2,4,[8,5,2,9,2,4,1]]]
const Arrs = array.flat(Infinity)
console.log(Arrs);