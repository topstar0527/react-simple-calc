import React, { useState } from 'react';

import ButtonPanel from '../components/ButtonPanel';
import Display from '../components/Display';
import addExpression from '../logics/addExpression';
import operate from '../logics/operate'

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [isOperated, setIsOperated] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const updateExpression = btnName =>{
        if(isOperated){
            if(['+','-','x','/','AC','Back'].includes(btnName)){
                setExpression(addExpression(expression, btnName));
                setIsOperated(false);
            }
            else{
                setExpression(addExpression('', btnName));
                setIsOperated(false);
            }
        }
        else{
            setExpression(addExpression(expression, btnName));
        }
    }
    const handleClickEqual = () => {
        let result;
        if(['+','-','x','/','.'].includes((expression.at(expression.length - 1)))) {
            let res = expression.substring(0, expression.length - 1)
            result = operate(res);
        }
        else{
            result = operate(expression)
        }
        if(result === 'divideBy0') {
            setErrorMessage('Syntax Error : Dividing by 0 is not allowed');
            setExpression('');
        }
        else{
            setErrorMessage('');
            setExpression(result.toString());
        }
        setIsOperated(true);
    }

    return(
        <>
        <div className="text-center">
            {errorMessage && <p className="bg-red-500">{errorMessage}</p>}
        </div>
        <div className="text-center flex justify-center mt-40">  
            <div className="w-4/5 sm:w-1/2 lg:w-1/4">
                <Display expression={expression}/>
                <ButtonPanel
                    updateExpression={updateExpression}
                    handleClickEqual={handleClickEqual}
                />
            </div>
        </div>
        </>
    );
};

export default Calculator;