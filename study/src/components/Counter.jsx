import React, {useState} from 'react';

const Counter = () => {

    const [cntNumber, setCntNumber] = useState(0);

    const onIncrease = ()=>{
        setCntNumber((prevNumber) => prevNumber + 1);
    }
    
    const onDecrease = () => {
        setCntNumber((prevNumber) => prevNumber - 1);
    } 

    return (
        <>
            <h3>Counter</h3>
            {cntNumber}
            <br/>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    );
  };
  
  export default Counter;