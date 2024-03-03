const Months = 1
switch (Months) {
    case 1:
         console.log("January");
        break;
    case 2:
         console.log("February");
        break;
    case 3:
         console.log("March");
        break;

    default:
        console.log(" Enter A Correct Case : ");
        break;
}

// thruthy values.... 


const userEmail = "piyush@google.com"
if (userEmail) {
    console.log("Go to userEmail");
}
else{
    console.log(" Don't use this mail");
}


if (userEmail.length===0) {
    console.log("Array is Empty..");
}
// Some falsey value::  0,-0,BigInt on,"",null, undefined,NAN-: 


// Object is empty.. 

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("Object is empty");
}



// new progrem -: 
// nullish coalishing Operator ?? 
let val1;
val1 = 10 ?? 20
val2 = null??20
console.log(val1);
console.log(val2);
