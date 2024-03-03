// Object literals.
const user = {
    username: "NameOfUser",
    email:"user@xyz.com",
    password: "Password@1234",

    getuserDeatils: function(){
//  console.log("getuserDatails from database");
//    console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getuserDeatils());

// constructor'S:::::

function User(username,loggedOut,isLoggedIn){

    this.username= username;
    this.loggedOut=loggedOut;
    this.isLoggedIn=isLoggedIn;
    // return this
}
const username= User("piyush","true","false")
const usernametwo= User("Shivam","22","false")
// console.log(username);
// console.log(usernametwo);

// Call and This in jAvAscRipT...........


function Setusername(username){
    this.username = username
    console.log("called");
}
function Createuser (username,email,Password){
    this.email = email
    this.Password=Password
}

const chai = new Createuser("chai","xtz@google.com","@1234566")
console.log(chai);


// classes in Js...
