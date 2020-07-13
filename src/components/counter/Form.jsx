import React from 'react';

export default props => {
    return (
        <div>
            <label htmlFor="step"></label>
            <input
                id="step"
                type="number"
                value={props.step}
                onChange={props.handleStep} />
        </div>
    );
}