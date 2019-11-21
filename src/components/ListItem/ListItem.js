import React from 'react';

import './ListItem.css';

const ListItem = (props) => {
    return (
        <li className={props.classDone ? 'done' : null}>
            <input
                type="checkbox"
                id={props.id}
                onChange={props.change}
            />
            <span>{props.tobedone}</span>
            {" "}
            <button type="button" id={props.id} onClick={props.click}>x</button>
        </li>
    )
}

export default ListItem;
