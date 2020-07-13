import React from 'react';

export default props => {
    const isEven = props.number % 2 === 0;

    return (
        <>
            <h2>Even or Odd</h2>

            The number is {isEven ?
                <span>Even</span> :
                <span>Odd</span>
            }
        </>
    );
}