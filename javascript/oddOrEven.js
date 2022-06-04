Number;
var arguments = process.argv;

function isInt(value) {
    return !isNaN(value) && 
           parseInt(Number(value)) == value && 
           !isNaN(parseInt(value, 10));
  }


function oddOrEven(n) {
    if(!isInt(n)){
        console.log("The argument is invalid, missing or not an integer");
    }else{
        if(n%2==0){
            console.log(`${n} is even`);
        }else{
            console.log(`${n} is odd`);
        }
    }
}



return oddOrEven(arguments[2]);