import React from 'react';
import Recoms from "./Recoms.jsx"

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className = "recoms">
        <div className = "innerRecs">
        {this.props.recommended.map((oneRecom) =>
        <Recoms key={oneRecom._id} oneRecom={oneRecom} />)}
        </div>
      </div>
    )
  }
}




export default Carousel;