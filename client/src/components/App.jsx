import React from 'react';
import Modal from './ModalOne.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      currentZip: 94112
    };
  }

  render () {
    return (
    <div className="App">
      <h1>TARGET</h1>
      <Modal />
    </div>)
  }
}

export default App;