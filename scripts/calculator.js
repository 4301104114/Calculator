

let convertArrayExpression= function(stringExpression){

    let number='';
    let arrayResult = [];

    for(let value of stringExpression){

        if((value>='0'&&value<='9') || value === '.'){
            number+=value;
        }
        else{
            console.log(number)
            if(value==='+' || value==='-' || value==='*' || value==='/' || value==='^'||value===')'){
                if(number!==''){

                    let parseNumber = Number.parseFloat(number);
                    arrayResult.push(parseNumber, value);
                    number ='';
                }
                else{
                    arrayResult.push(value);
                }
            }
            else{
                if(value === '('){
                     
                    arrayResult.push(value);
                }
            
            }
        }    
    }

    if(number !== ''){
        let parseNumber = Number.parseFloat(number);
        arrayResult.push(parseNumber);
    }

    return arrayResult;

}



export {  convertArrayExpression };