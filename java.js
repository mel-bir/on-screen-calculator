const display = document.querySelector("#display");
const btn = document.querySelectorAll("button");

function add(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function percentage(a){
    return a/100;
}

function sqrt(a){
    return a**(1/2);
}

function operate(a,operator,b){
    switch(operator){
        case "+":
           return add(a,b);
            break;
        case "-":
           return substract(a,b);
            break;
        case "X":
           return multiply(a,b);
            break;
        case "÷":
           return divide(a,b);
            break; 
        case "√":
            return sqrt(a);
            break;
        case "%":
            return percentage(a);
            break;
        default:
            return "Invalid Operator";       
    }
}


display.value = 0;
const operators = ["+", '-', "÷", "X", "√", "%"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

btn.forEach((button)=>{
    button.addEventListener("click", (event)=>{
        if (display.value === "0"){
            display.value = "";
        }
        if (numbers.includes(button.textContent)){
            display.value += button.textContent;
        }
        else if (operators.includes(button.textContent)){
            display.value += "";
        }
    })
})