let getValueInputExpressionForm ;

let inputExpression = function(element){
    //get all blocks with numbers
    let blocksNumbers = element.querySelectorAll('.calculator-function__btnsOperands-block');
    let valueInputExpression = element.querySelector('.calculator-monitor__inputExpression');
    valueInputExpression.value = '';

    blocksNumbers.forEach(function(blockNumber){

        let buttonsNumbers = blockNumber.querySelectorAll('.btn-operand');

        buttonsNumbers.forEach(function(buttonNumber){

            if(!buttonNumber.matches('.btn-operand-icon')){

                buttonNumber.addEventListener('click', function(event){
                    valueInputExpression.value += event.target.innerText;
                });
            }

        });
    });
    //get all blocks with operators
    let blocksOperators = element.querySelectorAll('.calculator__btnsOperators-block');

    blocksOperators.forEach(function(blockOperator){
        let buttonsOperators = blockOperator.querySelectorAll('.btn-operator');
        buttonsOperators.forEach(function(buttonOperator){
            buttonOperator.addEventListener('click', function(event){
                valueInputExpression.value += event.target.innerText;
            });
        });
    });
    
    getValueInputExpressionForm = valueInputExpression.value;

}

let getValueInputExpression = function(element){
   
}


let validateExpression = function(expression){

}

let calculateExpression = function( expression){

   
}

let outputResult = function(result){

}

export {inputExpression, validateExpression, calculateExpression, outputResult, getValueInputExpression};