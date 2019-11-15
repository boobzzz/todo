import React, { Component } from 'react';

import classes from './App.module.css';
import ListItem from './components/ListItem/ListItem';

export default class App extends Component {
    state = {
        value: '',
        listItems: [
            {id: 'fgt1', cont: 'Do smth 1-st', checked: false},
            {id: 'mnj2', cont: 'Do smth 2-nd', checked: false},
            {id: 'fgq3', cont: 'Do smth 3-rd', checked: false},
        ],
    }

    onInputHandler = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    toggleCheckHandler = (event) => {
        const { listItems } = this.state
        const id = event.target.id
        this.setState(state => {
            listItems.map(item =>
                item.id === id ? item.checked = !item.checked : null
            )
        })
    }

    deleteListItem = (event) => {
        const items = [...this.state.listItems]
        const id = event.target.id
        // this.setState(state => {
        //     listItems.filter(item =>
        //         item.id !== id ? item : null
        //     )
        // })
        // listItems.splice(itemIndex, 1)
        items.filter(item => item.id !== id)
        // this.setState({
        //     listItems: items
        // })

        console.log(items);
    }

    render() {
        let { value, listItems } = this.state;
        return (
            <div>
                <input type="text" value={value} onChange={this.onInputHandler}/>
                {" "}
                <button type="button">ADD</button>
                <ul className={classes.list}>
                    {listItems.map((li, i) =>
                        <ListItem
                            key={li.id}
                            id={li.id}
                            title={li.cont}
                            checked={li.checked}
                            changed={this.toggleCheckHandler}
                            clicked={this.deleteListItem} />
                    )}
                </ul>
                <span>Show: </span>
                <a href="#1">all</a>
                {" "}
                <a href="#1">active</a>
                {" "}
                <a href="#1">done</a>
            </div>
        )
    }
}
