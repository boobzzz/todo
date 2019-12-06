import React, { Component } from 'react';
import genId from 'nanoid/generate';

import Input from './components/Input/Input';
import Button from './components/Button/Button';
import List from './components/List/List';
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
        let { id } = event.target;

        this.setState(({ listItems }) => {
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
        let { id } = event.target;

        listItems = listItems.filter(item => item.id !== id)
        this.setState({
            listItems: listItems
        })
    }

    filterToggle = (event) => {
        let { id } = event.target;

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
                <Input value={value} changed={this.onInputHandler} />
                {" "}
                <Button clicked={this.addListItem} disable={disabled} />
                <List
                    listItems={filtered}
                    changed={this.toggleCheckHandler}
                    clicked={this.removeListItem} />
                <Filter clicked={this.filterToggle} />
            </div>
        )
    }
}
