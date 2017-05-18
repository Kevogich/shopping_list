import React from 'react';
import PropTypes from 'prop-types';

const AddItem = (props) => {
  const { addItem, handleChange } = props;
  return (
    <div>
      <div>
        {/* <h1 className="display-3">Shopping List</h1> */}
        <p>App to manage your shopping list while learning React, Redux and Firebase</p>
        <hr />
      </div>
      <div>
        <form className="input-group col-lg-6 offset-lg-3">
          <input
            className="form-control"
            placeholder="Enter list item "
            onChange={handleChange}
          />
          <button onClick={addItem}>Add Item</button>
        </form>
        <hr />
      </div>
    </div>
  );
};

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddItem;
