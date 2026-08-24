
function calculate(a, b, operator){
    switch (operator){
        case "+":
         return a +b;

        case "*":
         return a*b;

        case "-":
         return a-b;

        case "/":
            if(b===0)return "cannot be zero"
         return a/b;
        
         default:"invalid operator"
          
             
    }

}

console.log(calculate(55, 65, "*"));
