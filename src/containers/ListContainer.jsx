import React, { Component } from 'react';
import AddItem from '../components/AddItem';
import ItemsList from '../components/ItemsList';

let id = 0;

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addItem(event) {
    event.preventDefault();
    const itemsArray = this.state.items;

    itemsArray.push({
      key: id++,
      text: this.state.item,
    });

    this.setState({
      items: itemsArray,
    });

    event.target.value = '';
  }

  handleChange(event) {
    event.preventDefault();

    this.setState({
      item: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <AddItem addItem={this.addItem} handleChange={this.handleChange} />
        <ItemsList items={this.state.items} />
      </div>
    );
  }
}

export default ListContainer;
