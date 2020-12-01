import React from "react";

export default function Services(props) {
  return (
    <div className="services">
      <img src={props.images} alt="" />
      <h3> {props.service}</h3>
      <p>{props.description}</p>
    </div>
  );
}
