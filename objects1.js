//const tinderUser = new Object()
const ZuAppUser = {}

ZuAppUser.id = "22BCS12388"
ZuAppUser.name = "Milan"
ZuAppUser.isLoggedIn = false
//console.log(ZuAppUser);

const regularUser = {
    email: "milanrajumadp@gmail.com",
    fullName: {
        userFullName:{
            firstName : "Milan ",
            lastName : "Raj"
        }
    }
}

//console.log(regularUser?.fullName?.userFullName?.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);


//console.log(obj3);


const users = [
    {
        id:1,
        email:"milanrajdp@gmail.com"

    },
     {
        id:1,
        email:"milanrajdp@gmail.com"

    },
     {
        id:1,
        email:"milanrajdp@gmail.com"

    },
     {
        id:1,
        email:"milanrajdp@gmail.com"

    },

    

]
users[1].email


// console.log(ZuAppUser);
// console.log(Object.keys(ZuAppUser));
// console.log(Object.values(ZuAppUser));
// console.log(Object.entries(ZuAppUser));


//console.log(ZuAppUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "flutter in Hindi",
    price: "999",
    "courseInstructor":"Milan"
}
//course.courseInstructor

// const {courseInstructor}= course
// console.log(courseInstructor);
// same method upar wale se bs name de rahe key ki trh
const {courseInstructor:instructor}= course
console.log(instructor);




