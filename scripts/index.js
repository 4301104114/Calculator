import {convertArrayExpression, precedence, isRightAssociative, infixToPostfix, infixToPostfix2, evaluatePostfixExpression} from './calculator.js';
import{ scriptCalculator} from './handle_inputExpression.js';


 
scriptCalculator({
    frame: '.wrapper-calculator',
    blockInputExpression: '.calculator-monitor__inputExpression',   
    infoButtonsOperand:{
        frameOperand:'.calculator-function__btnsOperands',
        containersOperands:'.calculator-function__btnsOperands-block' ,
        buttonsOperands: '.btn-operand',
        buttonsOperandIcon: '.btn-operand-icon'
    },
    infoButtonsOperator:{
        frameOperator: '.calculator-function__btnsOperators',
        containersOperator: '.calculator-function__btnsOperators-block',
        buttonsOperator: '.btn-operator',
        buttonOutputResult:'.btn-equal'
    },
    
});


let expression = '5+3.5-2*3+(3*(1+2))-1.2';
console.log(expression);

// for(let value of expression){
//     console.log(value);
// }

let result = convertArrayExpression(expression);
console.log(result);

console.log(expression);

let arrayExpression = convertArrayExpression(expression);
console.log(infixToPostfix(expression));
console.log(infixToPostfix2(arrayExpression));
console.log(evaluatePostfixExpression(infixToPostfix2(arrayExpression)));
