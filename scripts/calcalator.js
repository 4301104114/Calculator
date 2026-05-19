let add = (number1, number2) => {
    return number1 + number2;
}

let subtract = (number1, number2) => {
    return number1 - number2;
}   

let multiply = (number1, number2) => {
    return number1 * number2;
}

let divide = (number1, number2) => {
    if(number2 === 0){
        return undefined;
    }
    return number1 / number2;
}

let power = (number, power) => {
    let result = 1;
    
    for(let index = 1; index <= power; index++){
        result *= number;
    }
    return result;
}

export { add, subtract, multiply, divide, power };