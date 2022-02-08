import React from 'react';

const Counter = ( {count, end} ) => {
    return (
        <div className='py-3 text-center'><h3>{count} / <sub>{end}</sub></h3></div>
    );
};

export default Counter;
