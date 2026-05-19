import {add,power} from './calcalator.js';
import{
    inputExpression,
    validateExpression,
    calculateExpression,
    outputResult
} from './handle_inputExpression.js';

function main(elementSelector){

   let Calculator = document.querySelector(`.${elementSelector}`);

    console.log(Calculator);
   //inputExpression(Calculator);
   

}

export { main };