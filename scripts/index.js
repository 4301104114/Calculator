import {add,power} from './calcalator.js';
import{ scriptCalculator} from './handle_inputExpression.js';


  const Calculator = document.querySelector('.wrapper-calculator');


   //inputExpression(Calculator);
   scriptCalculator({
       frame: Calculator,
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
          
       },
      
   });


