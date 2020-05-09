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
    this.closeZipcode = this.closeZipcode.bind(this);
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

  closeModal = e => {
    this.setState({
      show: false
    });
  };

  showModal = e => {
    this.setState({
      show: true
    });
  };


  showZipcode = e => {
    e.preventDefault();
    this.setState({
      showZip: true
    });
  };

  closeZipcode = e => {
    e.preventDefault();
    this.setState({
      showZip:false
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    if (isNaN(parseInt((document.getElementById("zipcode").value).slice(0,5)))) {
      alert("Please enter a 5 digit zip code")
    } else {
    let newZip = parseInt((document.getElementById("zipcode").value).slice(0,5));
    this.setState({currentZip: newZip, showZip: false});
    }
    // this.setState({currentZip: parseInt((event.target.value))})
  };


  render () {
    return (
      <div className="App">
        <div className = "NonModal">
          <h1>PRODUCT SHIPPING COMPONENT</h1>
          <div className = "zip">Deliver to {this.state.currentZip}</div>
          <button className = "showZip" id = "showZip" onClick = {e => {
            this.showZipcode(e)
          }}>Edit zip code</button>
          <Zipcode
          handleSubmit = {this.handleSubmit} showZip = {this.state.showZip} closeZipcode = {this.closeZipcode}></Zipcode>
          <button className = "showModal" id="showModal" onClick = {e => {
            this.showModal(e)
          }}> Ship it </button>
        </div>
        <Modal className = "ModalOne" product={this.state.product} show={this.state.show} closeModal={this.closeModal}></Modal>
      </div>)
  }
}

export default App;