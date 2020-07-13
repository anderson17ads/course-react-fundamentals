import React, { cloneElement } from 'react';

export default props => {
    return (
        <>
            <h2>Family Members</h2>
            
            {/* Second way */}
            {
                React.Children.map(props.children, child => {
                    return cloneElement(child, props);
                })
            }

            {/* Second way */}
            {/* {
                props.children.map((child, i) => {
                    return cloneElement(child, { ...props, key: i });
                })
            } */}
        </>
    );
}