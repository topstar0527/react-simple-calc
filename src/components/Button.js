import React from 'react';

const Button = ({ btnName, addClass, updateExpression }) => {
  let btnStyle = 'border-grey select-none border-2 w-1/4 h-16 flex justify-center items-center text-black font-black cursor-pointer hover:bg-blue-100 text-xl';
  btnStyle += ` ${addClass}`;

  return (
    <button 
        type="button" 
        className={btnStyle} 
        onClick={() => updateExpression(btnName)}
    >
        {btnName}
    </button>
  );
};

export default Button;
