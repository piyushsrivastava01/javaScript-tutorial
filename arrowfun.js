const user = {
    usrname: "Piyush",
    price: 999,
    welcomeMessege: function(){
        console.log(`${this.usrname} welcomeMessege to website user`);
        console.log(this);
    }
}

user.welcomeMessege()
user.usrname= "Insta-User"
user.welcomeMessege()
console.log(this);

// ****New ***** Code ***** Program.......

// function chai (){
//     let value= "Dil ki jaan"
//     // console.log(this);
// }chai ()


// +++++++++++ NEW PROGRAM....+++++++++

const  chai = function (){
let v = " haram ka pilla"
console.log(this.v);
} 
chai()




// Arrow Function .... // .... 

 const addTwo = (num1,num2) => {
    return num1+num2
 }

 console.log(addTwo(58,59));


 const addthree=(m1,m2) => m1+m2
 console.log(addthree(68,87));