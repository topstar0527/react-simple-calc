import Big from 'big.js'

const operate = (expression) => {

    let subArray = expression.split('+').join(',').split('-').join(',').split(',');
    let plusMinusOperators = [];
    expression.split('').forEach(element => {
        if(element === '+' || element === '-'){
            plusMinusOperators.push(element);
        }
    });
    let result = calcSubExpresion(subArray[0]);
    if(result === 'err') return 'divideBy0';
    plusMinusOperators.forEach((element, index) =>{
        let nextValue = calcSubExpresion(subArray[index + 1])
        if(nextValue === 'err'){
            return 'divideBy0';
        }
        else{
            result = doSimpleOperation(result, nextValue, element)
        }
    });
    return result;
}

function calcSubExpresion(str) {
    if(str === '') return 0;
    let subExpresArray = str.split('x').join(',').split('/').join(',').split(',');
   
    let subExpresOperatorArray = [];
    str.split('').forEach(element => {
        if(element === 'x' || element === '/') {
            subExpresOperatorArray.push(element);
        }
    });
    let subResult = parseFloat(subExpresArray[0], 10);
    
    subExpresOperatorArray.forEach((element, index) => {
        let nextSubValue = parseFloat(subExpresArray[index + 1],10);
        if(element === '/' && nextSubValue === 0) {
            return 'err';
        }
        subResult = doSimpleOperation(subResult,nextSubValue,element)
    });
    return subResult;
}

function doSimpleOperation(firstNum, secondNum, operator){

    let first = Big(firstNum);
    let second = Big(secondNum);
    let result = 0

    switch (operator) {
        case '+':
          result = first.plus(second);
          break;
    
        case '-':
          result = first.minus(second);
          break;
    
        case 'x':
          result = first.times(second);
          break;
    
        case '/':
          result = first.div(second);
          break;
    
        default:
          break;
    }
    return result;
}

export default operate;