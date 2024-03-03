const User= { 

    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password
    },
       encryptpassword (){
        return `${this.password} is,`
    }      
    
}
const cha =  User("chai","xyz@apple.com","123456")
console.log(chai);


class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    addcourse(){
        console.log(`A new bookid is ${this.username}`);
        class Teacher extends user {
            constructor (username,email,password){
                super(username)
                this.email=email
                this.password
            }
        }
    }
}
const chai = new Teacher ("piyush Shrivastav","piyush@xyz.com","123458")
chai.addcourse()
