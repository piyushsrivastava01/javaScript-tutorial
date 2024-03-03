const mynumber = [1,2,3,4,5,6,7,8,9,10]
const variable = mynumber.reduce(function(accumalator,currentvalue){
    return accumalator + currentvalue
},10);

// console.log(`acc: ${accumalator} and cuurentValue is ${currentvalue}`);

console.log(variable);


myValue = mynumber.reduce((acc,currentvalue) =>{
    acc+currentvalue
},10);

console.log(myValue);  // Undefined.... ... ... .... ..... .... ....





//                                             NEW PROGRAM 

const ShoppingCart = [
    {
        itemName:  " clothes",
        Price:   1999
    },
    {
        itemName:  "groceryes",
        Price:   1099
    },
    {
        itemName:  " phone",
        Price:   15630
    },
    {
        itemName:  " googgle",
        Price:   199
    },
    {
        itemName:  " kit",
        Price:   399
    },
]

const addvalue = ShoppingCart.reduce((acc,item)=> acc+item.Price,0)

console.log(addvalue);