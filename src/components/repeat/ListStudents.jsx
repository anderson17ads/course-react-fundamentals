import React from 'react';
import students from '../../data/students';

export default props => {
    const list = students.map((item, i) => {
        return (
            <li key={i}>
                {item.id} ) - {item.name} - {item.grade}            
            </li>
        );
    });

    return (
        <div>
            <h2>Students</h2>
            <ul style={{ listStyle: "none" }}>
                {list}            
            </ul>
        </div>
    );
}