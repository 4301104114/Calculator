
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

                   
                    arrayResult.push(number, value);
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
        
        arrayResult.push(number);
    }

    return arrayResult;

}

//The functions to do "Infix to Postfix Expression"
function precedence(letter) {
    if (letter === '^')
        return 3;
    else if (letter === '/' || letter === '*')
        return 2;
    else if (letter === '+' || letter === '-')
        return 1;
    else
        return -1;
}

function isRightAssociative(letter) {
    return letter === '^';
}


function infixToPostfix(expression) {
    let stackOperators = [];
    let result = '';

    for (let index = 0; index < expression.length; index++) {
        let letter = expression[index];

        // If operand, add to result
        if ((letter >= 'a' && letter <= 'z') ||
            (letter >= 'A' && letter <= 'Z') ||
            (letter >= '0' && letter <= '9'))
            result+=(letter);

        // If '(', push to stack
        else if (letter === '(')
            stackOperators.push('(');

        // If ')', pop until '('
        else if (letter === ')') {
            while (stackOperators.length > 0 && stackOperators[stackOperators.length - 1] !== '(') {
                result+=stackOperators.pop() ;
            }
            stackOperators.pop();
        }

        // If operator
        else {
            while (stackOperators.length > 0 && stackOperators[stackOperators.length - 1] !== '(' &&
                   (precedence(stackOperators[stackOperators.length - 1]) > precedence(letter) ||
                    (precedence(stackOperators[stackOperators.length - 1]) === precedence(letter) && !isRightAssociative(letter)))) {
                result+=stackOperators.pop() ;
            }
            stackOperators.push(letter);
        }
    }

    // Pop remaining operators
    while (stackOperators.length > 0) {
        result +=stackOperators.pop() ;
    }

    return result;
}

function infixToPostfix2(arrayExpression) {
    let stackOperators = [];
    let result = [];

    for (let item of arrayExpression) {
        let letter = item;

        // If operand, add to result
        if ((letter >= 'a' && letter <= 'z') ||
            (letter >= 'A' && letter <= 'Z') ||
            (letter >= '0' && letter <= '9'))
           result.push(letter);

        // If '(', push to stack
        else if (letter === '(')
            stackOperators.push('(');

        // If ')', pop until '('
        else if (letter === ')') {
            while (stackOperators.length > 0 && stackOperators[stackOperators.length - 1] !== '(') {
                result.push(stackOperators.pop()) ;
            }
            stackOperators.pop();
        }

        // If operator
        else {
            while (stackOperators.length > 0 && stackOperators[stackOperators.length - 1] !== '(' &&
                   (precedence(stackOperators[stackOperators.length - 1]) > precedence(letter) ||
                    (precedence(stackOperators[stackOperators.length - 1]) === precedence(letter) && !isRightAssociative(letter)))) {
                result.push(stackOperators.pop()) ;
            }
            stackOperators.push(letter);
        }
    }

    // Pop remaining operators
    while (stackOperators.length > 0) {
        result.push(stackOperators.pop()) ;
    }

    return result;
}
export {  convertArrayExpression, precedence, isRightAssociative, infixToPostfix, infixToPostfix2 };