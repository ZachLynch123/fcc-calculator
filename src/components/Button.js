import React from 'react';
import './Button.css';

// checks if the number passed to val is a number or not
const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}


const Button = (props) => {
    return(
    <div className={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}>
        {props.children}
    </div>
    )
}


export default Button;