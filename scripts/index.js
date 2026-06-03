import {add,power} from './calcalator.js';
import{
    inputExpression,
    validateExpression,
    calculateExpression,
    outputResult,
    getValueInputExpression
} from './handle_inputExpression.js';

function main(elementSelector){

   let Calculator = document.querySelector(`.${elementSelector}`);

   inputExpression(Calculator);
   

}

export { main };