import React from "react";
import Recoms from "./Recoms.jsx"


export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
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
        <div className ="content">{this.props.children}</div>
        <div className = "actions">
          <button className = "toggle-button" onClick = {this.props.closeModal}>
            Continue Shopping
          </button>
          <button className = "check-out">View cart &amp; checkout</button>
        </div>
        <div className = "recoms">
          FREQUENTLY BOUGHT TOGETHER
        {this.props.product.recommended.map((oneRecom) =>
        <Recoms key={oneRecom._id} oneRecom={oneRecom} product= {this.props.product}/>)}
        </div>
      </div>
    );
  }
}