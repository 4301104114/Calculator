

let inputExpression = function( idCalculatorSelector, 
                                inputExpressionSelector, 
                                blockOperandSelector,
                                blockOperatorSelector
                              ) 
{
    //get all blocks with numbers
    let blocksNumbers = idCalculatorSelector.querySelectorAll(`.${blockOperandSelector.nameFrameOperand} .${blockOperandSelector.nameContainersOperands}`);
    console.log(blocksNumbers);

    let valueInputExpression = idCalculatorSelector.querySelector(`.${inputExpressionSelector}`);
    valueInputExpression.value = '';
    console.log(valueInputExpression);

    blocksNumbers.forEach(function(blockNumber){

        let buttonsNumbers = blockNumber.querySelectorAll(`.${blockOperandSelector.nameButtonsOperands}`);

        buttonsNumbers.forEach(function(buttonNumber){

            if(!buttonNumber.matches(`.${blockOperandSelector.nameButtonsOperandIcon}`)){

                buttonNumber.addEventListener('click', function(event){
                    valueInputExpression.value += event.target.innerText;
                     console.log(buttonNumber);
                });
            }
            else{

                buttonNumber.addEventListener('click', function(){
                    console.log('click icon');
                });
            }

        });
    });
    //get all blocks with operators
    let blocksOperators = idCalculatorSelector.querySelectorAll(`.${blockOperatorSelector.nameFrameOperator} .${blockOperatorSelector.nameContainersOperator}`);
    console.log(blocksOperators);

    blocksOperators.forEach(function(blockOperator){
        let buttonsOperators = blockOperator.querySelectorAll(`.${blockOperatorSelector.nameButtonsOperator}`);
        buttonsOperators.forEach(function(buttonOperator){
            buttonOperator.addEventListener('click', function(event){
                valueInputExpression.value += event.target.innerText;
                console.log(buttonOperator);
            });
        });
    });
    
    //getValueInputExpressionForm = valueInputExpression.value;

}

let getValueInputExpression = function(element){
   
}


let validateExpression = function(expression){

}

let calculateExpression = function( expression){

   
}

let outputResult = function(result){

}

let scriptCalculator = function(elementCalculator){
    console.log(elementCalculator.frame);

    console.log('frameOperand',elementCalculator.infoButtonsOperand.frameOperand);
    console.log('containersOperands',elementCalculator.infoButtonsOperand.containersOperands);
    console.log('buttonsOperands',elementCalculator.infoButtonsOperand.buttonsOperands);
    console.log('buttonsOperandIcon',elementCalculator.infoButtonsOperand.buttonsOperandIcon);
    console.log('frameOperator',elementCalculator.infoButtonsOperator.frameOperator);
    console.log('containersOperator',elementCalculator.infoButtonsOperator.containersOperator);
    console.log('buttonsOperator',elementCalculator.infoButtonsOperator.buttonsOperator);
    console.log('blockInputExpression',elementCalculator.blockInputExpression);

  inputExpression( elementCalculator.frame,
                   elementCalculator.blockInputExpression,
                   {
                      nameFrameOperand: elementCalculator.infoButtonsOperand.frameOperand,
                      nameContainersOperands: elementCalculator.infoButtonsOperand.containersOperands,
                      nameButtonsOperands: elementCalculator.infoButtonsOperand.buttonsOperands,
                      nameButtonsOperandIcon: elementCalculator.infoButtonsOperand.buttonsOperandIcon
                   },
                   {
                    nameFrameOperator: elementCalculator.infoButtonsOperator.frameOperator,
                    nameContainersOperator: elementCalculator.infoButtonsOperator.containersOperator,
                    nameButtonsOperator: elementCalculator.infoButtonsOperator.buttonsOperator
                   }
                );     

}

export {inputExpression, validateExpression, calculateExpression, outputResult, scriptCalculator};