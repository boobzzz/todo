import React from 'react';

import classes from './Filter.module.css';

const Filter = (props) => {
    return (
        <div>
            <span>Show: </span>
            <ul className={classes.filterList}>
                <li>
                    <a
                        href="#1"
                        id="all"
                        className={classes.filter}
                        onClick={props.clicked}>
                        all
                    </a>
                </li>
                <li>
                    <a
                        href="#1"
                        id="active"
                        className={classes.filter}
                        onClick={props.clicked}>
                        active
                    </a>
                </li>
                <li>
                    <a
                        href="#1"
                        id="done"
                        className={classes.filter}
                        onClick={props.clicked}>
                        done
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Filter;
