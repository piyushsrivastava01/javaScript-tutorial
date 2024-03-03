// const coading = ["hey","jaaneman","dilruba","batao", "kehna","chahti_ho"]
// coading.forEach(function(val){
//     console.log(val);
// })


// // Arrow Function.... 

coading.forEach(item); {
console.log(item);
}

function printMe(item){
  console.log(item);
}
coading.forEach(printMe)


coading.forEach(index,Arr)
console.log(index,Arr);


// New Program..... .... 
const mycoading = [
    {
        languageName: "c++",
        price: 999
    },
    {
        languageName: "DsA",
        price: 2999
    },
    {
        languageName: "javaScripT",
        price: 1999
    },
    {
        languageName: "HTML/CSS",
        price:  499
    },
]

  mycoading.forEach(element => {
    console.log(element.languageName);
  });


  // ****************************************  new program ***************************************************************************


  const coading = [ "jaana", "jaaneman", "username", "empty", "Superheroes"]
//   const value= coading.forEach(item);  {
//        console.log(item);
//   }
const value = coading.forEach(value => {
    console.log(value);
});

const Mynums = [1,2,3,4,5,6,7,8,9,10]
const newvalue = Mynums.filter((num) =>   num>4)
console.log(newvalue);

const Nums = []
Nums.forEach((nums) => {
  if (nums>4) {
    Nums.push(nums)
  }
})
console.log(Nums);