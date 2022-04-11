import React from 'react';

const Counter=()=>{
    const [count, setCount]=React.useState(0);

    const handleChange=(value)=>{
        setCount(count+ value);
        
    }

    const handleDouble=()=>{
        setCount(count*2)
    }

    return(
        <>
        <h1>Counter</h1>
        <h1 style={count%2===0?{color:'green'}:{color:'red'}}>{count}</h1>
        <button onClick={()=>handleChange(1)}>Inc</button>
        <button onClick={()=>handleChange(-1)}>Dec</button>
        <button onClick={()=>handleDouble(2)}>Double</button>
        </>
    )
}

export default Counter;