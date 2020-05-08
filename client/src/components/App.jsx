import React from 'react';
import Modal from './ModalOne.jsx';
import Zipcode from './Zipcode.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      currentZip: 94112,
      show: false,
      showZip: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.setProduct = this.setProduct.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showZipcode = this.showZipcode.bind(this);
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

  showZipcode = e => {
    e.preventDefault();
    this.setState({
      showZip: true
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    let newZip = parseInt((document.getElementById("zipcode").value).slice(0,5));
    this.setState({currentZip: newZip, showZip: false});
    // this.setState({currentZip: parseInt((event.target.value))})
  };


  render () {
    return (
    <div className="App">
      <h1>PRODUCT SHIPPING COMPONENT</h1>
      <div className = "zip">Deliver to {this.state.currentZip}</div>
      <button className = "showZip" id = "showZip" onClick = {e => {
        this.showZipcode(e)
      }}>Edit zip code</button>
      <Zipcode
      handleSubmit = {this.handleSubmit} showZip = {this.state.showZip}></Zipcode>
      <Modal product={this.state.product} show={this.state.show} closeModal={this.closeModal}></Modal>
        <button className = "showModal" id="showModal" onClick = {e => {
          this.showModal(e)
        }}> Ship it </button>
    </div>)
  }
}

export default App;