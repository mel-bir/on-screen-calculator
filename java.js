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
        case "*":
           return multiply(a,b);
            break;
        case "/":
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