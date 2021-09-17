const addExpression = (expression, btnName) => {
    let res;
    let stringExpression =  expression.toString();
    switch(btnName){
        case 'AC':
            res = '';
            return res;
        case 'Back':
            res = stringExpression.substring(0, stringExpression.length - 1)
            return res;
        case '+' :
        case '-' :
        case 'x' :
        case '/' :
            if(stringExpression.length !== 0 && !['+','-','x','/','.'].includes((stringExpression.at(stringExpression.length - 1)))){
                res =  stringExpression + btnName;
                return res;
            }else return stringExpression;
        case '.' :
            if(stringExpression.length !== 0 && !['+','-','x','/','.'].includes((stringExpression.at(stringExpression.length - 1)))){
                let array_expressions = stringExpression.split('+').join(',').split('-').join(',').split('x').join(',').split('/').join(',').split(',');
                if(!array_expressions[array_expressions.length - 1].includes('.')){
                    res = stringExpression + btnName;
                    return res
                }
                else return stringExpression;
            }else return stringExpression;
        case '9' :
        case '8' :
        case '7' :
        case '6' :
        case '5' :
        case '4' :
        case '3' :
        case '2' :
        case '1' :
        case '0' :
            res = stringExpression + btnName;
            return res;
        default:
            break;
    }
    return null;
};

export default addExpression;