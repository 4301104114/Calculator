

let scriptCalculator = function(elementCalculator){
    console.log(elementCalculator.frame);
    console.log('elementCalculator.infoButtonsOperand.frameOperand: ',elementCalculator.infoButtonsOperand.frameOperand);
    console.log('elementCalculator.infoButtonsOperand.containersOperands: ',elementCalculator.infoButtonsOperand.containersOperands);
    console.log('elementCalculator.infoButtonsOperand.buttonsOperands: ',elementCalculator.infoButtonsOperand.buttonsOperands);
    console.log('elementCalculator.infoButtonsOperand.buttonsOperandIcon: ',elementCalculator.infoButtonsOperand.buttonsOperandIcon);
    console.log('elementCalculator.infoButtonsOperator.frameOperator: ',elementCalculator.infoButtonsOperator.frameOperator);
    console.log('elementCalculator.infoButtonsOperator.containersOperator: ',elementCalculator.infoButtonsOperator.containersOperator);
    console.log('elementCalculator.infoButtonsOperator.buttonsOperator: ',elementCalculator.infoButtonsOperator.buttonsOperator);
    console.log('elementCalculator.blockInputExpression',elementCalculator.blockInputExpression);
    
    //Get the elements of the calcualtor
    const blockInputExpression = 
       elementCalculator.frame.querySelector(elementCalculator.blockInputExpression);
    const frameOperands =
        elementCalculator.frame.querySelector(elementCalculator.infoButtonsOperand.frameOperand);
    const blocksOperands = 
        elementCalculator.frame.querySelectorAll(elementCalculator.infoButtonsOperand.containersOperands);

    const frameOperators =
        elementCalculator.frame.querySelector(elementCalculator.infoButtonsOperator.frameOperator);
    const blocksOperators = 
        elementCalculator.frame.querySelectorAll(elementCalculator.infoButtonsOperator.containersOperator);
    
    // console.log('blockInputExpression: ', blockInputExpression);
    // console.log('frameOperands: ', frameOperands);
    // console.log('blocksOperands: ', blocksOperands);
    // console.log('frameOperators: ', frameOperators);
    // console.log('blocksOperators: ', blocksOperators);
    
    
        //Definition function for input expression
    let inputExpression = function( idCalculatorElement, 
                                    inputExpressionElement, 
                                    frameOperandsElement,
                                    blocksOperandsElements,
                                    frameOperatorsElement,
                                    blocksOperatorsElements
                                ) 
    {   
       console.log(idCalculatorElement);
       console.log(inputExpressionElement);
       console.log(frameOperandsElement);
       console.log(blocksOperandsElements);
       console.log(frameOperatorsElement);
       console.log(blocksOperatorsElements);
        
        blocksOperandsElements.forEach(function(blockOperand){
        
            let buttonsOperands = blockOperand.querySelectorAll(elementCalculator.infoButtonsOperand.buttonsOperands);
        
            buttonsOperands.forEach(function(buttonOperand){

                if(!buttonOperand.matches(elementCalculator.infoButtonsOperand.buttonsOperandIcon)){

                    buttonOperand.addEventListener('click', function(event){
                        //eventInputExpression.target.value += event.target.innerText;
                        inputExpressionElement.value += event.target.innerText;
                    
                    });
                }
                else{

                    buttonOperand.addEventListener('click', function(){
                        console.log('click icon');
                    });
                }

            });
        });
        
    
        blocksOperatorsElements.forEach(function(blockOperator){
            let buttonsOperators = blockOperator.querySelectorAll(elementCalculator.infoButtonsOperator.buttonsOperator);
            buttonsOperators.forEach(function(buttonOperator){
                buttonOperator.addEventListener('click', function(event){
                    inputExpressionElement.value += event.target.innerText;
                    
                });
            });
        });
        
    }

 
    let validateExpression = function(expression){

    }

    let calculateExpression = function( expression){

    
    }

    let outputResult = function(result){

    }

    inputExpression(elementCalculator.frame, blockInputExpression, frameOperands, blocksOperands, frameOperators, blocksOperators);
     

    
}

export {scriptCalculator};