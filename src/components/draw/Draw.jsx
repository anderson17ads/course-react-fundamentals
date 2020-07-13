import React, { useState } from 'react';

export default () => {
    const [total, setTotal] = useState(7);
    const [max, setMax] = useState(50);
    const [listNumbers, setListNumbers] = useState('');
    
    function handleDraw() {
        const numbers = [];

        if (total > 0) {
            while (total > numbers.length) {
                let newNumber = parseInt(Math.random() * (max - 1)) + 1;

                if (!numbers.includes(newNumber)) {
                    numbers.push(newNumber);
                }
            }

            numbers.sort((a, b) => a - b);

            setListNumbers(numbers.join(', '));
        }
    }

    function handleTotal(e) {
        setTotal(e.target.value);
    }

    function handleMax(e) {
        setMax(e.target.value);
    }

    return (
        <>
            <h2>Draw</h2>
            <div>Numbers: {listNumbers}</div>
            <div>
                <label htmlFor="total">Total: </label>
                <input
                    id="total"
                    type="text"
                    value={total}
                    onChange={handleTotal} />
            </div>
            <div>
                <label htmlFor="max">Max: </label>
                <input
                    id="max"
                    type="text"
                    value={max}
                    onChange={handleMax} />
            </div>
            <button onClick={handleDraw}>Handle Draw</button>
        </>
    );
}