import React from 'react';
import ReactDOM from 'react-dom';

import ListContainer from './containers/ListContainer';

const Main = () => (
  <div>
    <ListContainer />
  </div>
  );

ReactDOM.render(<Main />, document.getElementById('app'));
