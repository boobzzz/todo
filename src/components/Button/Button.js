import React from 'react';

const Button = (props) => {
    return (
        <button type="button" onClick={props.clicked} disabled={props.disable}>
            ADD
        </button>
    )
}

export default Button;
