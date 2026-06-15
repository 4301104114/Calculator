import { convertArrayExpression, precedence, infixToPostfix, infixToPostfix2, evaluatePostfixExpression } from "./calculator.js";

let scriptCalculator = function(elementCalculator){
    console.log('elementCalculator.frame: ',elementCalculator.frame);
    console.log('elementCalculator.infoButtonsOperand.frameOperand: ',elementCalculator.infoButtonsOperand.frameOperand);
    console.log('elementCalculator.infoButtonsOperand.containersOperands: ',elementCalculator.infoButtonsOperand.containersOperands);
    console.log('elementCalculator.infoButtonsOperand.buttonsOperands: ',elementCalculator.infoButtonsOperand.buttonsOperands);
    console.log('elementCalculator.infoButtonsOperand.buttonsOperandIcon: ',elementCalculator.infoButtonsOperand.buttonsOperandIcon);
    console.log('elementCalculator.infoButtonsOperator.frameOperator: ',elementCalculator.infoButtonsOperator.frameOperator);
    console.log('elementCalculator.infoButtonsOperator.containersOperator: ',elementCalculator.infoButtonsOperator.containersOperator);
    console.log('elementCalculator.infoButtonsOperator.buttonsOperator: ',elementCalculator.infoButtonsOperator.buttonsOperator);
    console.log('elementCalculator.infoButtonsOperator.buttonsOutputResult: ',elementCalculator.infoButtonsOperator.buttonOutputResult);

    console.log('elementCalculator.blockInputExpression',elementCalculator.blockInputExpression);
    
    //Get the elements of the calcualtor

    const Calculator = document.querySelector(elementCalculator.frame);

    const blockInputExpression = 
       Calculator.querySelector(elementCalculator.blockInputExpression);

    const frameOperands =
        Calculator.querySelector(elementCalculator.infoButtonsOperand.frameOperand);

    const blocksOperands = 
        Calculator.querySelectorAll(elementCalculator.infoButtonsOperand.containersOperands);
        
    const frameOperators =
        Calculator.querySelector(elementCalculator.infoButtonsOperator.frameOperator);

    const blocksOperators = 
        Calculator.querySelectorAll(elementCalculator.infoButtonsOperator.containersOperator);
    
    // console.log('Calculator: ', Calculator);
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
        
          
        
        
            //let expression = event.target.value;
        blocksOperandsElements.forEach(function(blockOperand){
        
            let buttonsOperands = blockOperand.querySelectorAll(elementCalculator.infoButtonsOperand.buttonsOperands);
        
            buttonsOperands.forEach(function(buttonOperand){

                if(!buttonOperand.matches(elementCalculator.infoButtonsOperand.buttonsOperandIcon)){

                    buttonOperand.addEventListener('click', function(event){
                        //eventInputExpression.target.value += event.target.innerText;
                        inputExpressionElement.value += event.target.innerText;
                        console.log(inputExpressionElement.value);
                    });
                }
                else{

                    buttonOperand.addEventListener('click', function(){
                        inputExpressionElement.value = inputExpressionElement.value.slice(0, inputExpressionElement.value.length - 1);
                    });
                }

            });
        });
        

        blocksOperatorsElements.forEach(function(blockOperator){
            let buttonsOperators = blockOperator.querySelectorAll(elementCalculator.infoButtonsOperator.buttonsOperator);
            buttonsOperators.forEach(function(buttonOperator){
                buttonOperator.addEventListener('click', function(event){
                    inputExpressionElement.value += event.target.innerText;
                    console.log(inputExpressionElement.value);
                });
            });
        });
            
            
        
    }

  
    let validateExpression = function(expression){

    }


    let calculateExpression = function(){

        let arrExpression = convertArrayExpression(blockInputExpression.value);
        let arrPostfixExpression = infixToPostfix2(arrExpression);
        let resultExpression = evaluatePostfixExpression(arrPostfixExpression);
        return resultExpression;   
    }

    
    let outputResult = function(){

        const btnEqual = Calculator.querySelector(elementCalculator.infoButtonsOperator.buttonOutputResult);
        btnEqual.addEventListener('click', function(){
            //console.log('expression: ', blockInputExpression.value);
            let result = calculateExpression();
            //console.log(result);

            blockInputExpression.value = result.toString();
        });
    }

    inputExpression(Calculator, blockInputExpression, frameOperands, blocksOperands, frameOperators, blocksOperators);
    outputResult();
}

export {scriptCalculator};