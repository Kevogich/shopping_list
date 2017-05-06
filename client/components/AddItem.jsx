import React from 'react';

const App = (props) => {
  const { addItem, handleChange } = props;

  return (
    <div className="container">
      <div className="text-lg-center">
        <div className="jumbotron">
          <h1 className="display-3">Shopping List</h1>
          <p>App to manage your shopping list while learning React, Redux and Firebase</p>
        </div>
        <div className="input-group col-lg-6 offset-lg-3">
          <input
            className="form-control"
            onBlur={handleChange}
            placeholder="Enter list item"
          />
          <div className="input-group-btn"> <button className="btn btn-primary" onClick={addItem}>Add</button> </div>
        </div>
      </div>
    </div>
  );
};

export default App;
