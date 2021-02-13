import React from 'react'


const handleOnClick = (e, callback) => {
    e.preventDefault();
    callback();
}

const Button = ({text, handleClick}) => {
    return (
        <button className="ui button" onClick={(e) => {handleOnClick(e, handleClick) }}>
            {text}
        </button>
    );
}

export default Button;