//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
     //console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const username = "Milan"
    function two(){
        const website = "github"
        console.log(username);
        
    }
   // console.log(website);
    two()
    
}

one()

if(true){
    const username = "Milan"
    if(username == "Milan"){
        const website = " github"

        console.log(username + website);
        
    }
   // console.log(website);
    
}
//console.log(username);

function addOne(num){
    return num+1
}
addOne(9)

const addTwoNumber = function(num){
    return num +9
}


console.log(addTwoNumber(800));
