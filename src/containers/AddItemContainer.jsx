import React, { Component } from 'react';
import AddItem from '../components/AddItem';

let id = 0;

class AddItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  addItem(event) {
    event.preventDefault();

    const item = {
      id: id++,
      text: event.target.value,
    };

    this.state.items.push(item);

    this.setState({
      items: this.state.item,
    });

    console.log('ITEM', event.target.value);
    console.log('ITEMS', this.state.items);
    // event.target.value = '';
  }

  render() {
    return (
      <div>
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default AddItemContainer;
