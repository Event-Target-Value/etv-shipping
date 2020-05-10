import React from 'react';
import Recoms from "./Recoms.jsx"
import StyledCarousel from "./Carousel.css.js"

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <StyledCarousel>
      <div className = "recoms">
        <div className = "innerRecs">
        {this.props.recommended.map((oneRecom) =>
        <Recoms key={oneRecom._id} oneRecom={oneRecom} />)}
        </div>
      </div>
      </StyledCarousel>
    )
  }
}




export default Carousel;