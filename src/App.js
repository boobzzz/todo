import React, { Component } from 'react';
import genId from 'nanoid/generate';

import classes from './App.module.css';
import ListItem from './components/ListItem/ListItem';

const chars = '0123456789abcdefghijklmnopqrstuvwxyz';

export default class App extends Component {
    state = {
        value: '',
        listItems: [
            {id: 'fgt1', tobedone: '1-st do smth', done: false},
            {id: 'mnj2', tobedone: '2-nd do smth', done: false},
            {id: 'fgq3', tobedone: '3-rd do smth', done: false},
        ],
    }

    toggleCheckHandler = (event) => {
        let listItems = [...this.state.listItems]
        let id = event.target.id

        this.setState(state => {
            listItems.map(item =>
                item.id === id ? item.done = !item.done : null
            )
        })
        console.log(listItems)
    }

    onInputHandler = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    addListItem = () => {
        let listItems = [...this.state.listItems]
        let newItem = {id: genId(chars, 5), tobedone: this.state.value, done: false}

        listItems.push(newItem)

        this.setState({
            listItems: listItems
        })
        this.setState({
            value: ''
        })
    }

    removeListItem = (event) => {
        let listItems = [...this.state.listItems]
        let id = event.target.id

        listItems = listItems.filter(item => item.id !== id)
        this.setState({
            listItems: listItems
        })
    }

    filterListItems = (event) => {
        let listItems = [...this.state.listItems]
        let id = event.target.id

        if (id === 'all') return listItems
        if (id === 'active') return listItems.filter(item => !item.done)
        if (id === 'done') return listItems.filter(item => item.done)
    }

    render() {
        let { value, listItems } = this.state;

        return (
            <div className={classes.App}>
                <input type="text" value={value} onChange={this.onInputHandler}/>
                {" "}
                <button type="button" onClick={this.addListItem}>ADD</button>
                <ul className={classes.list}>
                    {listItems.map(li =>
                        <ListItem
                            {...li}
                            key={li.id}
                            class={li.done ? 'done' : null}
                            change={this.toggleCheckHandler}
                            click={this.removeListItem} />
                    )}
                </ul>
                <span>Show: </span>
                <a href="#1" id="all" className={classes.filter} onClick={this.filterListItems}>ALL</a>
                {" "}
                <a href="#1" id="active" className={classes.filter} onClick={this.filterListItems}>ACTIVE</a>
                {" "}
                <a href="#1" id="done" className={classes.filter} onClick={this.filterListItems}>DONE</a>
            </div>
        )
    }
}
