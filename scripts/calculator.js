/* Global variable */
var ResultScreen;
var Operation;
var Result;
var num = 0;
var formule = "0";
var result = 0;


function Initialize() {
    console.log(" --> Initialize...");
    ResultScreen = document.getElementsByClassName("screen")[0];
    Operation = ResultScreen.getElementsByTagName("span")[0];
    Result = ResultScreen.getElementsByTagName("p")[0];
    Operation.innerHTML = formule;
    Result.innerHTML = num;
    console.log(" --> Initialized!");
}

function Calculator(value) {
    switch(value)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            console.log(value + " is a number");
            if(num == 0) {
                num = value;
            }
            else {
                num += ""+value;
            }
            formule = num;
            Operation.innerHTML = formule;
            Result.innerHTML = num;
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            console.log("Operand : "+value);
            formule = formule+value;
            console.log(formule.length);
            Operation.innerHTML = formule;
            break;
        case ",":
            console.log("Symbol : "+value);
            formule = formule+value;
            num = num+value;
            console.log(formule.length);
            Operation.innerHTML = formule;
            Result.innerHTML = num;
            break;
        case "=":
            console.log("View result.");
            break;
        default:
            console.log(" !=> Invalid value!");
            break;        
    }
}

function Clear() {
    num = 0;
    result = 0;
    Operation.innerHTML = result;
    Result.innerHTML = num;
}