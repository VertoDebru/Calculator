class Mycalculator {
    constructor() {
        this.ResultScreen = document.getElementsByClassName("screen")[0];
        this.Operation = this.ResultScreen.getElementsByTagName("span")[0];
        this.Result = this.ResultScreen.getElementsByTagName("p")[0];
        this.buttonsBox = document.querySelector(".buttons");
    }

    // Setting up calculator.
    setCalculator() {
        this.clear();

        // Add commands buttons
        let commandsBox = document.createElement("div");
        commandsBox.classList.add("commands");
        let backButton = document.createElement("button");
        backButton.innerHTML = "<i class='fas fa-long-arrow-alt-left'></i>";
        backButton.addEventListener("click", () => {
            this.pressTouch("<");
        });
        let clearButton = document.createElement("button");
        clearButton.innerHTML = "C";
        clearButton.addEventListener("click", () => {
            this.clear();
        })
        commandsBox.appendChild(backButton);
        commandsBox.appendChild(clearButton);

        // Add numbers buttons
        let numbersBox = document.createElement("div");
        numbersBox.classList.add("numbers");
        let numbers = ["7","8","9","4","5","6","1","2","3","0",","];
        numbers.forEach( value => {
            let myButton = document.createElement("button");
            myButton.innerHTML = value;
            myButton.addEventListener("click", () => {
                this.pressTouch(value);
            })
            numbersBox.appendChild(myButton);
        });

        // Add symbols buttons
        let symbolsBox = document.createElement("div");
        symbolsBox.classList.add("symbols");
        let symbols = ["/","*","-","+","="];
        symbols.forEach( value => {
            let myButton = document.createElement("button");
            myButton.innerHTML = value;
            myButton.addEventListener("click", () => {
                this.pressTouch(value);
            })
            symbolsBox.appendChild(myButton);
        });

        this.buttonsBox.appendChild(commandsBox);
        this.buttonsBox.appendChild(numbersBox);
        this.buttonsBox.appendChild(symbolsBox);
    }

    // Add action
    pressTouch(value) {
        switch(value) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                if(this.Operation.value == 0)
                    this.Operation.value = value.toString();
                else
                    this.Operation.value += value.toString();
                
                this.Operation.innerHTML = this.Operation.value;
                this.Result.innerHTML = this.Operation.value;
                break;
            case "+":
            case "-":
            case "*":
            case "/":
                let lengthOperation = this.Operation.value.toString().length;
                if(lengthOperation > 1) {
                    let str = this.Operation.value.toString();
                    let last = str.slice(lengthOperation-1);
                    let res = str.replace(last, value.toString());
                    if(isNaN(last))
                        this.Operation.value = res;
                    else
                        this.Operation.value += value;
                }
                else
                    this.Operation.value += value;
                
                this.Operation.innerHTML = this.Operation.value;
                this.Result.innerHTML = this.Operation.value;
                break;
            case ",":
                value = ".";
                this.Operation.value += value;
                this.Operation.innerHTML = this.Operation.value;
                this.Result.innerHTML = this.Operation.value;
                break;
            case "=":
                let res = eval(this.Operation.value);
                this.Result.value = res;
                this.Operation.value = this.Result.value;
                this.Operation.innerHTML = this.Result.value;
                this.Result.innerHTML = this.Result.value;
                break;
            case "<":
                let str = this.Operation.value.toString();
                this.Operation.value = str.slice(0, -1);
                if(this.Operation.value == "")
                    this.Operation.value = 0;
                this.Operation.innerHTML = this.Operation.value;
                this.Result.innerHTML = this.Operation.value;
                break;
            default:
                console.log(" !=> Invalid value!");
                break;
        }
    }

    // Clear operation.
    clear() {
        this.Result.value = 0;
        this.Operation.value = 0;
        this.Operation.innerHTML = this.Operation.value;
        this.Result.innerHTML = this.Result.value;
    }
}