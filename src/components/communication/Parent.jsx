import React from 'react';
import Children from './Children';

export default props => {
    return (
        <>
            <h2>Parent</h2>
            <Children name="Anderson" age={31} geek={true} />
            <Children name="Isa" age={24} geek={false} />
        </>
    );
}