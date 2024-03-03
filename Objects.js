const mysym = Symbol("mykey1")
const jsuser ={
    email: "Piyushsrivastava@google.com",
    name: "user full name",
    age: 25,
    location: "hamarpur",
    isloggedIn: false,
    lastLoginLocation: "mahakalke sharan",
    userLoginDays: ["Monday","satuarday","tuesday", "wednesdasy"]
    [mysym]= "mykey1"
}

console.log(jsuser.email);
console.log(jsuser.name);
console.log(jsuser.age);
console.log(jsuser.isloggedIn);
console.log(jsuser.lastLoginLocation);
console.log(jsuser.userLoginDays);
console.log(jsuser[mysym]);
Object.freeze(jsuser)
jsuser.email="srivstav@mc@com"
console.log(jsuser.email);



// NOE TO CHECK THE VALUE OF OBJECTS..IN FUNCTION...........

jsuser.greeting= function(){
    console.log("hellojs user");
}

console.log(jsuser.greeting());

jsuser.greetingTwo = function() {
    console.log(`hellojs user, ${this.name} is entered sucessfully`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());




//singleTon Objects...... //   ///// //// /// /// // / / / // / // // // / // / / / / // / // / /// / / / // // / / / /

// const tindruser= new Object()
// console.log(tindruser);
const tindruser = {

id:"12458",
name: "piyush",
islogin: "flase"
}

console.log(tindruser);

// now define Object in Object... 

const newUser = {
   email: "user@google.com",
   name: "username",
   fullname:{
    userfullname:{
        firstname:"userName",
        lastname:"userLastname"
    }
   }
 }

 console.log(newUser.fullname.userfullname);


 const obj1 ={1: "a", 2: "b"}
 const obj2 ={3: "c", 4: "d"}
//  const obj3 ={obj1,obj2}
 const obj3 =Object.assign(obj1,obj2)
 console.log({...obj1, ...obj2});


 const user=[
    {
        id: 1009,
        email:"hindustan@gmail.com"
    }
 ]

//  console.log(user[1]);

 console.log(tindruser);
 console.log(Object.keys(tindruser));
 console.log(Object.values(tindruser));
 console.log(Object.entries(tindruser));

 // objects Destructure...

 const course={
    coursename: "mystryin js",
    price: "199",
    courseInstructor:"piyush"
 }

 console.log(course);
 console.log(course.courseInstructor);
 const{courseInstructor}=course
 console.log(courseInstructor);