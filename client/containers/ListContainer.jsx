import React, { Component } from 'react';

import AddItem from '../components/AddItem';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addItem = (event) => {
    event.preventDefault();

    this.setState({
      
    })
  }

  render() {
    return (
      <AddItem />
    );
  }
}

export default ListContainer;
