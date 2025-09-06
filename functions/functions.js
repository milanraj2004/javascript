function sayMyName(){
    console.log("Milan");

    console.log("Milan");
    console.log("Milan");
    console.log("Milan");
    
}
//sayMyName()

// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumber(number1,number2){
   // console.log(number1 + number2);
   let result  = number1+number2
   return result


    
 }



const result = addTwoNumber(3, null)
console.log("Result",result);

function calculateCartPrice(...num1){
  return num1


}
console.log(calculateCartPrice(200,500,7000,9000));

const user = {
   username:"Milan",
   Uid:"22BCS12388"


}
function handleObject(anyObject){
 console.log(`Username is ${anyObject.username} and uid is ${anyObject.Uid}`);
  

}
handleObject(user)

const arr = [200,400,100,600]
function returnSecondValue(getArray){
  return getArray[3]

}
console.log(returnSecondValue(arr));
console.log(returnSecondValue([900,700,500,400,600,198]));

