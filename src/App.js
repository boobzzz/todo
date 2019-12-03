import React, { Component } from 'react';
import genId from 'nanoid/generate';

import ListItem from './components/ListItem/ListItem';
import Filter from './components/Filter/Filter';

import classes from './App.module.css';

const chars = '0123456789abcdefghijklmnopqrstuvwxyz';

export default class App extends Component {
    state = {
        value: '',
        filter: 'all',
        listItems: [
            {id: 'fgt1', tobedone: '1-st do smth', done: false},
            {id: 'mnj2', tobedone: '2-nd do smth', done: false},
            {id: 'fgq3', tobedone: '3-rd do smth', done: false},
        ],
    }

    toggleCheckHandler = (event) => {
        let id = event.target.id

        this.setState(({listItems}) => {
            return {
                listItems: listItems.map(item =>
                    item.id === id ? {...item, done: !item.done} : item
                )
            }
        })
    }

    onInputHandler = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    addListItem = () => {
        let newItem = {id: genId(chars, 5), tobedone: this.state.value, done: false};

        this.setState({
            value: '',
            listItems: [...this.state.listItems, newItem]
        })
    }

    removeListItem = (event) => {
        let { listItems } = this.state;
        let id = event.target.id

        listItems = listItems.filter(item => item.id !== id)
        this.setState({
            listItems: listItems
        })
    }

    filterToggle = (event) => {
        let id = event.target.id

        this.setState({
            filter: id
        })
    }

    filterListItems(list, curFilter) {
        if (curFilter === 'all') return list
        if (curFilter === 'active') return list.filter(item => !item.done)
        if (curFilter === 'done') return list.filter(item => item.done)
    }

    render() {
        let { value, listItems, filter } = this.state;
        let disabled = value === '' ? 'disabled' : null;
        let filtered = this.filterListItems(listItems, filter);

        return (
            <div className={classes.App}>
                <input type="text" value={value} onChange={this.onInputHandler}/>
                {" "}
                <button type="button" onClick={this.addListItem} disabled={disabled}>
                    ADD
                </button>
                <ul className={classes.list}>
                    {filtered.map(item =>
                        <ListItem
                            key={item.id}
                            id={item.id}
                            todo={item.tobedone}
                            classDone={item.done}
                            changed={this.toggleCheckHandler}
                            clicked={this.removeListItem} />
                    )}
                </ul>
                <Filter clicked={this.filterToggle} />
            </div>
        )
    }
}
