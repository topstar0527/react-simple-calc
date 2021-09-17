import React from 'react';

const Display = ({expression}) => {
    return(
        <div className={"break-all text-right bg-black text-white text-5xl w-full h-18 p-2 flex justify-end items-end rounded-t-lg border-white border-4 border-b-0 select-all "
            + (expression !== '' ? 'h-auto' : 'h-16')}
        >
           {expression}
        </div>
    );
};

export default Display;