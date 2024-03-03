
for (let n = 0; n <10; n++) {
    const Newk = n;
    if (Newk==5) {
     console.log("5 is best Number");
    }   
}



// for (let k = 0; k <10; k++) {
//     const NewVar = k;
//     if (NewVar==5) {
//         break;   
//     }
//     console.log(NewVar);
// }

// for (let i = 0; i <10; i++) {
//     const vr = i;
//     if (vr==5) {
//         continue;
//     }
//     console.log(vr);
// }



// for new Program of Nasted loop:

for (let i = 2; i < 11; i++) {
    // console.log(`outer loop: ${i}`);
    for (let j = 1; j < 11; j++) {
    //  console.log(`inner loop: ${j}`);
        // console.log(`outer loop: ${i} and inner loop:${j}`);
        // console.log(i + '*' + j + '=' + i*j);
    }

    
}



// New Program::::::::



let Myarr= ["shivam","Viru","Piyush","Kishan","lAdduu"]
for (let i = 0; i < Myarr.length; i++) {
    const element = Myarr[i];
    console.log(element);
}


// while.loop...... 


let k = 1
while (k<11) {
    console.log(`value of k is ${k}`);
     k = k+2
}

let newArray = ["smoke", "chal ki jjan", "Kya jaan", "tum nhi kar shakti kya "," text"]
let Arr =0
while (Arr<newArray.length) {
    console.log(`value of Array is: ${newArray[Arr]}`);
      Arr = Arr+1
}



// DO While loop ::::

let score =1
do {
    console.log(`score is:  ${ score}`);
          score++
} while (score<=10);