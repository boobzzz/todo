import React from 'react';

import ListItem from './ListItem/ListItem';

import classes from './List.module.css';

const List = (props) => {
    return (
        <ul className={classes.list}>
            {props.listItems.map(item =>
                <ListItem
                    key={item.id}
                    id={item.id}
                    todo={item.tobedone}
                    classDone={item.done}
                    changed={props.changed}
                    clicked={props.clicked} />
            )}
        </ul>
    )
}

export default List;
