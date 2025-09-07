const user = {
    username: "milan",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to the Website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "Milan"
user.welcomeMessage()
console.log(this);
// function consoles(){
//     let username = "hitesh"
//     console.log(this.username);
    
//    // console.log(this);
    
// }
// consoles()


const chai = () => {
    let username = "hitesh"
    console.log(this);
    
}
chai()


// const addTwo= (num1,num2) => {
//     return num1 +num2
//}
// console.log(addTwo(99,7));

const addTwo= (num1,num2) =>  (num1 +num2)

 console.log(addTwo(99,7));