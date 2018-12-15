import React from 'react';
import './Button.css';

// checks if the number passed to val is a number or not
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

// creates a button for each child passed. adds classname operator if the child passed was not a number
const Button = (props) => {
    return(
    <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}
    onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
    )
}


export default Button;