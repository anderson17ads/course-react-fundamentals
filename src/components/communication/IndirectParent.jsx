import React, { useState } from 'react';
import IndirectChildren from './IndirectChildren';
import If, { Else } from '../conditional/If';

export default props => {

    const [values, setValues] = useState({
        name: '',
        age: 0,
        geek: false
    });

    function handleData(data) {
        setValues({ ...data });
    }

    return (
        <>
            <h2>Indirect Parent</h2>

            <If test={values.name}>
                <div>
                    <div>Nome: {values.name} </div>
                    <div>Idade: {values.age} </div>
                    <div>Nerd: {values.geek ? 'Yes' : 'No'}</div>
                </div>
                <Else>Click in handleData button</Else>                   
            </If>

            <IndirectChildren handleData={handleData} />
        </>
    );
}