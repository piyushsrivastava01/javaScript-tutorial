// const temprature = 40
// if (temprature == 41) {
//     console.log(" temprature id less than 50");
// }
// else{
//     console.log("greater than 50");
// }

// new program.....


const score = 200
if (score>100) {
    let power = "fLying with Flight"
    console.log(`user power: ${power}`);
}

// short hand notation::: 

// if (balance>500) console.log("Raja hai re");


// *******  NASTING CONDITION **************


const balance = 1000
if (balance<500) {
    console.log("less then Money for Enjoy");
}
else if (balance<750) {
    console.log("you can Enjoy the Little bit at that Day.....");
}
else if (balance<800) {
    console.log(" yeh!! you can treat your girlfriend::::");
}
else if (balance>900) {
    console.log("!! let's Date your Girlfriend!!");
}
else{
    console.log(" kya ba bhikhari chal girlfriend bna be ::");
}


// new program****** ******* ****** ******


const userloggedIn=  true
const loggedInfromGoogle = false
const loggedInfromEmail = true
const Debitcard = true
if (userloggedIn && Debitcard && 2==2) {
    console.log("allow to buy Courses");
}
if (loggedInfromGoogle||loggedInfromEmail) {
    console.log("user logged In");
}