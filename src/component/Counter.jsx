import React, { useState } from 'react';

const Counter = ({stock}) => {
    const [count, setCount] = useState(1);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }
    
    return (
        <div className='count'>
            <button onClick={decreaseCount} disabled={count === 1}>-</button>
            <div className='too'>{count}</div>
            <button onClick={increaseCount} disabled={count === stock? true : false }>+</button>
        </div>
    );
};
export default Counter;