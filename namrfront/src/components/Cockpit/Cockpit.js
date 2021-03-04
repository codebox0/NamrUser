import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {
    return (
        <div>
            <div className="namr-head">
                <h1>{props.title}</h1>
            </div>
        </div>

    );
};

export default cockpit;