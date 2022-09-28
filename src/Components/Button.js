import React from 'react'
import PropTypes from 'prop-types';


const Button = ({ color, text, onClick }) => {
    console.log(color);
    return (
        <button
            onClick={onClick}
            style={{ 
                backgroundColor: color}} 
            className='btn'>{text}</button>
    )
}

Button.defaultProps = {
}

Button.protoTypes = {
    text: PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
