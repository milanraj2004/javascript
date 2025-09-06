// singelton
//Object.create()
// object litreals


const mysym = Symbol(85)


const JsUser = {
    name: "Milan",
    age:18,
    [mysym]: "mykey",
    location: "Bihar",
    email:"milanrajumadp@gmail,com",
    isLoggedIn:true,
    lastLoginDays: ["Monday","Friday"]

}
// console.log(JsUser.age);
// console.log(JsUser.name);
// console.log(JsUser.location);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym]);
JsUser.email ="milanrajdp@gmail.com"
//console.log(JsUser.email);
//Object.freeze(JsUser);
JsUser.email ="milanrajjiya@gmail.com"
//console.log(JsUser);


JsUser.greetings = function(){
    console.log(`Welcome To the TG, ${this.name}`);

    
}

console.log(JsUser.greetings());
//console.log(JsUser.greetings());







