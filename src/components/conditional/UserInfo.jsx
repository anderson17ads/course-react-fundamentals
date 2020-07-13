import React from 'react';
import If, { Else } from './If';

export default props => {
    const user = props.user || false;

    return (
        <>
            <h2>User Info</h2>
            <If test={user && user.name}>
                Wellcome <b>{user.name}</b>
                <Else>What's your name?</Else>
            </If>
        </>
    );
}