import React, { useState } from 'react';
import Button from './Button';

const ButtonPanel = ({ updateExpression, handleClickEqual, handleClickBack }) => {

    return(
        <>
            <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
                <Button
                btnName="AC"
                updateExpression={updateExpression}
                addClass="bg-blue-300 hover:bg-blue-600"
                />
                <Button
                    btnName="Back"
                    updateExpression={updateExpression}
                    addClass="bg-blue-300 hover:bg-blue-600 w-2/4 text-3xl"
                />
                <Button
                btnName="/"
                updateExpression={updateExpression}
                addClass="bg-blue-300 hover:bg-blue-600"
                />
            </div>
            <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
                <Button btnName="7" updateExpression={updateExpression} addClass="text-3xl" />
                <Button btnName="8" updateExpression={updateExpression} addClass="text-3xl" />
                <Button btnName="9" updateExpression={updateExpression} addClass="text-3xl" />
                <Button
                btnName="x"
                updateExpression={updateExpression}
                addClass="bg-blue-300 hover:bg-blue-600"
                />
            </div>
            <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
                <Button btnName="4" updateExpression={updateExpression} addClass="text-3xl" />
                <Button btnName="5" updateExpression={updateExpression} addClass="text-3xl" />
                <Button btnName="6" updateExpression={updateExpression} addClass="text-3xl" />
                <Button
                btnName="-"
                updateExpression={updateExpression}
                addClass="bg-blue-300 hover:bg-blue-600"
                />
            </div>
            <div className="w-full border-white border-4 border-b-0 flex flex-wrap">
                <Button btnName="1" updateExpression={updateExpression} addClass="text-3xl" />
                <Button btnName="2" updateExpression={updateExpression} addClass="text-3xl" />
                <Button btnName="3" updateExpression={updateExpression} addClass="text-3xl" />
                <Button
                btnName="+"
                updateExpression={updateExpression}
                addClass="bg-blue-300 hover:bg-blue-600"
                />
            </div>
            <div className="w-full border-white border-4 flex flex-wrap">
                <Button btnName="0" updateExpression={updateExpression} addClass="w-2/4 text-3xl" />
                <Button btnName="." updateExpression={updateExpression} addClass="text-3xl" />
                <button
                    className= " border-white select-none border-2 w-1/4 h-16 flex justify-center items-center bg-red-500 text-white font-black cursor-pointer hover:bg-red-900 text-xl text-3xl bg-blue-400 hover:bg-blue-900"
                    onClick={handleClickEqual}
                >
                    =
                </button>
            </div>
        </>
    );
};

export default ButtonPanel;