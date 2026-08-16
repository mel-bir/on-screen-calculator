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
    if (b===0){
        return "error";
    }
    else {
        return a/b;
    }  
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

const operators = ["+", '-', "÷", "X", "√", "%"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let values = [];
let secondValue;

btn.forEach((button)=>{
    button.addEventListener("click", (event)=>{
        if (numbers.includes(button.textContent)){
            if (display.value === "0"){
                display.value = "";
            }
            display.value += button.textContent;
            if (values.length > 0){
                secondValue = display.value;
            }
        }
        else if (operators.includes(button.textContent)){
            display.value += "";
            if (values.length > 1){
                values.pop();
                values.push(button.textContent);
            }
            else {
                values.push(parseInt(display.value));
                values.push(button.textContent);
            }
            display.value = 0;                 
        }

        else if (button.textContent === "="){
            display.value += "";
            values.push(parseInt(secondValue));
            display.value = operate(values[0], values[1], values[2]);
        }

        else if (button.textContent === "C"){
            display.value = 0;
            values.length = 0;
        }
    })
});
console.log(values)