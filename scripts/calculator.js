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

let convertArrayExpression= function(stringExpression){

    let number='';
    let arrayResult = [];

    for(let value of stringExpression){

        if((value>='0'&&value<='9') || value === '.'){
            number+=value;
        }
        else{
            console.log(number)
            if(value==='+' || value==='-' || value==='*' || value==='/' || value==='^'||value===')'){
                if(number!==''){

                    let parseNumber = Number.parseFloat(number);
                    arrayResult.push(parseNumber, value);
                    number ='';
                }
                else{
                    arrayResult.push(value);
                }
            }
            else{
                if(value === '('){
                     
                    arrayResult.push(value);
                }
            
            }
        }    
    }

    if(number !== ''){
        let parseNumber = Number.parseFloat(number);
        arrayResult.push(parseNumber);
    }

    return arrayResult;

}

export { add, subtract, multiply, divide, power, convertArrayExpression };