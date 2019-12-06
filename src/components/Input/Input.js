import React from 'react';

const Input = (props) => {
    return (
        <input type="text" value={props.value} onChange={props.changed}/>
    )
}

export default Input;
