  var arguments = process.argv ;
  
  function add(a, b) {
      if(a == undefined || b == undefined || isNaN(a) || isNaN(b)){
          console.log("One or both of the arguments are invalid or missing");
      }else {
        if(a>b){
            console.log(`${a} is the greater number`);
        }else{
            console.log(`${b} is the greater number`);
        }
      }
    }

    return add(arguments[2], arguments[3]);