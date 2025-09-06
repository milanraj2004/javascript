let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toTimeString());
console.log(myDate.getTime);
let myCreatedDate = new Date(2023 , 0 , 23)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
let my = new Date("01-20-1950")
console.log(my.toDateString());
let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getDate().toFixed(0));
console.log(Math.floor(Date.now()/1000));

let dob = new Date()
console.log(dob.getDate());
console.log(dob.getDay());
console.log(dob.getMonth()+1);

console.log(dob.getFullYear());
console.log(dob.getUTCMonth());
console.log(dob.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }));
console.log(dob.getMonth()+1);
dob.toLocaleString(
    'default',{
        weekday: "narrow",
        weekday:"long",
        weekday:"short",
        
        
    }
)
console.log("Short:", dob.toLocaleString('default', { weekday: "short" }));
console.log("Long:", dob.toLocaleString('default', { weekday: "long" }));
console.log("Narrow:", dob.toLocaleString('default', { weekday: "narrow" }));












