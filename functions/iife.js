(
    function chai(){
        //it is also named as named as iife 
        console.log("Welcome Milan Github Page");
        
    }
)();//it is not ended when it is invoked so when we add invoked function for this we have to close this
(
    () => {
        console.log(`DB Connected `);
        
    }
)();
(
    (name) => {
        console.log(`DB Connected ${name} `);
        
    }
)('Milan Raj');
