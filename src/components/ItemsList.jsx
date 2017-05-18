import React from 'react';
import PropTypes from 'prop-types';

const ItemsList = (props) => {
  const { items } = props;

  const style = {
    margin: 'auto',
    width: '50%',
    padding: '10px',
  };

  return (
    <div style={style}>
      {items.map(item => (
        <ul className="list-group">
          <li className="list-group-item">
            <input type="checkbox" />
            <label>{item.text}</label>
            <a href="#"><i className="material-icons" style={{ position: 'right' }}>create</i></a>
            <a href="#"><i className="material-icons" >delete</i></a>
          </li>
        </ul>
      ))}
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemsList;
