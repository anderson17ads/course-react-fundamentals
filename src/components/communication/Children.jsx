import React from 'react';

export default props => {
    return (
        <div>
            <span>{props.name} </span>
            <span>{props.age} </span>
            <span>{props.geek ? 'Yes' : 'No'}</span>
        </div>
    );
}