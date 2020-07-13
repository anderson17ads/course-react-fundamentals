import React, { useState } from 'react';

export default () => {
    const [value, setValue] = useState('');

    function handleValue(e) {
        setValue(e.target.value);
    }

    return (
        <>
            <h2>Input</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={value} onChange={handleValue} />
                <input value={value} readOnly />
                <input value={undefined} />
            </div>
        </>
    );
}