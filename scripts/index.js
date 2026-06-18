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
        buttonOutputResult:'.btn-equal',
        buttonOff: '.btn-off'
    },
    
});

