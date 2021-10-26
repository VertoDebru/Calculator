/* Global variable */
var ResultScreen;
var Operation;
var Result;

function Initialize() {
    console.log(" --> Initialize...");
    ResultScreen = document.getElementsByClassName("screen")[0];
    Operation = ResultScreen.getElementsByTagName("span")[0];
    Result = ResultScreen.getElementsByTagName("p")[0];
    
    Operation.value = 0;
    Operation.innerHTML = Operation.value;
    Result.innerHTML = Operation.value;
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
            if(Operation.value == 0)
                Operation.value = value.toString();
            else
                Operation.value += value.toString();
            
            Operation.innerHTML = Operation.value;
            Result.innerHTML = Operation.value;
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            console.log("Operand : "+value);
            Operation.value += value;
            Operation.innerHTML = Operation.value;
            break;
        case ",":
            console.log("Symbol : "+value);
            Operation.value += value;
            Operation.innerHTML = Operation.value;
            break;
        case "=":
            console.log("View result.");
                let a = Operation.value;
                let b = eval(a);
                console.log(b);
                Result.value = b;
                Result.innerHTML = Result.value;
            break;
        default:
            console.log(" !=> Invalid value!");
            break;        
    }
}

function Clear() {
    Operation.value = 0;
    Operation.innerHTML = Operation.value;
    Result.innerHTML = Operation.value;
}