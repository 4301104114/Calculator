import {convertArrayExpression} from './calculator.js';
import{ scriptCalculator} from './handle_inputExpression.js';


 


   //inputExpression(Calculator);
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


let expression = '1.2+2+3-2*4+(5-1.2)-3^2';
console.log(expression);

for(let value of expression){
    console.log(value);
}

let result = convertArrayExpression(expression);
console.log(result);
console.log(Number.parseFloat('2.1') +Number.parseFloat('3.4'));
