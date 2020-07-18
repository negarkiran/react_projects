import "./Error.css";
import React from 'react';

const Error = (props) => {
    return (
    <div className="error">
        <div>
        <i className="large small thumbs down icon" />Error : {props.message}
        </div>
    </div>
    );
}

export default Error;