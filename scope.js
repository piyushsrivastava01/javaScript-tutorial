let a= 300
if(true){
    let a =20
//     // const b = 400
//     var c = 5000
}

// console.log(a);
// console.log("INNER:",a);
// console.log(b);
// console.log(c);

// NASTED SCOPE .... .... ... ... .. .  .... . .. . .


function one(){
    const username = "Piyush"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
} one()

// Second one program 

if (true){
    const username  = "PiyushShrivastav"
    if(!username){
        const website = "Youtube"
        // console.log(username+website);
    }
    // console.log(website);
    // console.log(username);
}

//        ********* NEW ********** PROGRAM.............

function addone(value){
    return value+1
}
    console.log(addone(99));