import React from "react";

const Recoms= (props) => (
  <div className = "singleProduct">
  <img className="recomImage" src={props.oneRecom.recImage}></img>
  <span>${props.oneRecom.price}</span>
  <span>{props.oneRecom.name}</span>
  </div>
)


// Overflow-x: hidden 
//  Element.scroll() 
// React refs
// z-index


//refactor Recoms to > Recommendations

export default Recoms;