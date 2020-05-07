import React from 'react';
import Modal from './ModalOne.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      currentZip: 94112,
      show: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.setProduct = this.setProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct(Math.floor(Math.random() * (101 - 1) + 1));
  }

  handleError(error) {
    console.log(error)
  }

  getProduct(id) {
    axios.get(`/findProduct/${id}`)
    .then(this.setProduct)
    .catch(this.handleError)
  }

  setProduct({data}) {
    this.setState({product: data})
  };

  showModal = e => {
    this.setState({
      show: true
    });
  };

  closeModal = e => {
    this.setState({
      show: false
    });
  };

  render () {
    return (
    <div className="App">
      <h1>PRODUCT SHIPPING COMPONENT</h1>
      {/* <img className ="mainProduct" src={this.state.product.image}></img> */}
      <Modal product={this.state.product} show={this.state.show} closeModal={this.closeModal}></Modal>
        <button className = "showModal" id="showModal" onClick = {e => {
          this.showModal(e);
        }}> Ship it </button>
    </div>)
  }
}

export default App;