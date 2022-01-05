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
            let lengthOperation = Operation.value.toString().length;
            if(lengthOperation > 1) {
                let str = Operation.value.toString();
                let last = str.slice(lengthOperation-1);
                let res = str.replace(last, value.toString());
                if(isNaN(last))
                    Operation.value = res;
                else
                    Operation.value += value;
            }
            else
                Operation.value += value;
            
            Operation.innerHTML = Operation.value;
            Result.innerHTML = Operation.value;
            break;
        case ",":
            value = ".";
            Operation.value += value;
            Operation.innerHTML = Operation.value;
            Result.innerHTML = Operation.value;
            break;
        case "=":
            let res = eval(Operation.value);
            Result.value = res;
            Operation.value = Result.value;
            Operation.innerHTML = Result.value;
            Result.innerHTML = Result.value;
            break;
        case "<":
            let str = Operation.value.toString();
            Operation.value = str.slice(0, -1);
            if(Operation.value == "")
                Operation.value = 0;
            Operation.innerHTML = Operation.value;
            Result.innerHTML = Operation.value;
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