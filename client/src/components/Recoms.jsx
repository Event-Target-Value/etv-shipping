import React from "react";

const Recoms= (props) => (
  <div>
  <img className="recomImage" src={props.oneRecom.recImage}></img>
  {props.oneRecom.name}
  &emsp; ${props.oneRecom.price}
  </div>
)


// Overflow-x: hidden 
//  Element.scroll() 
// React refs
// z-index

export default Recoms;