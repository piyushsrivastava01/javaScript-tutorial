class user {
    constructor(email,password){
        this.email = email;
        this.password = password
    }

    get password (){
        return this.password.toUppercase()
    }
    set password(value){
        this.password = value
    }
}
const variable = new user("piyush@xyz.com","124568")
console.log(variable.password);