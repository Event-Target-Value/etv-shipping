import React from "react";
import Recoms from "./Recoms.jsx"
import Carousel from "./Carousel.jsx"

export default class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className = "modal" id="modal">
        <div>Added to cart</div>
        <div> Edit delivery method in cart</div>
        <div>${this.props.product.price}</div>
        <img className ="productImage" src={this.props.product.image}></img>
        <div className = "actions">
          <button className = "toggle-button" onClick = {this.props.closeModal}>
            Continue Shopping
          </button>
          <button className = "check-out">View cart &amp; checkout</button>
        </div>
        FREQUENTLY BOUGHT TOGETHER
        <Carousel recommended = {this.props.product.recommended} ></Carousel>
      </div>
    );
  }
}