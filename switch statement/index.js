

var areaOfShapes="Circle";
var a=5;
var b=10;
var result;
switch(areaOfShapes){
    case "Rectangle":
        result=a*a;
        console.log(result);
         break;

    case "Circle":
        var r=2;
        result=3.14*(r*r);
        console.log(result);
        break;
    case "Square":
        result=a*b;
        console.log(result);
        break;

    default:
        console.log("Sorry the shape is not available")
    }


    // calculator 
    const calculator=(num1,num2,operator)=>{
        let result;
        switch(operator){
            case "+":
                return num1+num2;

                case "-":
                    return num1-num2;

                case "*":
                    return num1*num2;

                case "%":
                    return num1%num2;

        }
    }
    console.log(calculator(5,8,"%"));