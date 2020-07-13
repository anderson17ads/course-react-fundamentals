import React from 'react';

export default (props) => {
    const { min, max } = props;
    const number = Math.floor(Math.random() * (max - min)) + min;

    return (
        <>
            <h2>Random</h2>
            <h3>Número aleatório entre {min} e {max}</h3>
            <p>Número: <b>{number}</b></p>
        </>
    )
}