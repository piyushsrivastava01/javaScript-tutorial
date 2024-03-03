const user = {
    email: "user@xyz.com",
    password: "abc",

    getemail(){
        this._email = value
    },
    Setemail(value){
        this._email= value
    }
}

const tea = Object.create(user)
console.log(tea.email);