import React from 'react';

export default props => {
    return (
        <>
            <button onClick={props.add}>+</button>
            <button onClick={props.reduce}>-</button>
        </>
    );
}