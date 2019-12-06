import React from 'react';

import classes from './ListItem.module.css';

const ListItem = (props) => {
    return (
        <li className={props.classDone ? classes.done : null}>
            <input
                type="checkbox"
                id={props.id}
                onChange={props.changed}
                defaultChecked={false}
            />
            <span>{props.todo}</span>
            {" "}
            <button type="button" id={props.id} onClick={props.clicked}>
                x
            </button>
        </li>
    )
}

export default ListItem;
