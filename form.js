/*let hello ="saDJ";
for(let x = 0;x <hello.length;x++){
    if(hello.charAt(x) === hello.charAt(x).toLowerCase() && hello.charAt(x).toUpperCase() ){
        if(x === hello.length -1){
        console.log("true,both Uppercase and Lowercase present");
        }
    }
    else{
        if(x === hello.length -1){
        console.log("Add atleast a Lowercase and an uppercasae");
        }
    }
}*/
//var myRe = /[A-Za-z0-9!@#\$%\^\&*\)\(+=.,_-]{6,}$/g;
///(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^\&*\)\(+=.,_-])(?=.{8,})/g
var myRe = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^\&*\)\(+=.,_-])(?=.{8,})/g;
var myArray = myRe.test('1A@');
console.log(myArray);
        
    

