import React from 'react';

export default props => {
    const data = {
        name: 'Anderson',
        age: parseInt(Math.random() * (31 - 18)) + 18,
        geek: (parseInt(Math.random() * (10 - 1)) + 1) > 7
    }

    return (
        <div>
            <button onClick={() => props.handleData(data)}>Handle Data</button>
        </div>
    );
}