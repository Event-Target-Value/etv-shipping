import React from "react";


export default class Zipcode extends React.Component {
  render() {
    if (!this.props.showZip) {
      return null
    }
    return (
      <form id="zipForm" className="zipForm" onSubmit={e => {this.props.handleSubmit(e)}}>
      <label htmlFor="zipcode"> Zip Code</label>
      <input type="text" pattern="[0-9]*" name="zipcode" id="zipcode" />
      <button type="submit">Submit</button>
    </form>
    )
  }
}