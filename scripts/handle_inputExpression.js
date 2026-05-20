let inputExpression = function(element){
    //get all blocks with numbers
    let blocksNumbers = element.querySelectorAll('.calculator-function__btnsNumbers-block');
    let inputExpression = element.querySelector('.calculator-monitor__inputExpression');
    inputExpression.value = '';

    blocksNumbers.forEach(function(blockNumber){

        let buttonsNumbers = blockNumber.querySelectorAll('.btn-number');

        buttonsNumbers.forEach(function(buttonNumber){

            buttonNumber.addEventListener('click', function(event){
                inputExpression.value += event.target.innerText;
            });

        });
    });
    //get all blocks with operators
    let blocksOperators = element.querySelectorAll('.calculator__btnsOperators-block');

    blocksOperators.forEach(function(blockOperator){
        let buttonsOperators = blockOperator.querySelectorAll('.btn-operator');
        buttonsOperators.forEach(function(buttonOperator){
            buttonOperator.addEventListener('click', function(event){
                inputExpression.value += event.target.innerText;
            });
        });
    });
}

let validateExpression = function(expression){

}

let calculateExpression = function(expression){

}

let outputResult = function(result){

}

export {inputExpression, validateExpression, calculateExpression, outputResult};