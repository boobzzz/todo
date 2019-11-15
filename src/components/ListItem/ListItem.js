import React from 'react';

const ListItem = (props) => (
    <li>
        <input
            type="checkbox"
            id={props.id}
            name=""
            onChange={props.changed}
            checked={props.checked}/>
        <span>{props.title}</span>
        {" "}
        <button type="button" onClick={props.clicked}>x</button>
    </li>
)

export default ListItem;
