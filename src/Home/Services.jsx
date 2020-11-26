import React from "react";

export default function Services(props) {
  return (
    <div className="services">
      <h1>Service We Provide</h1>
      <p>
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book
      </p>
      {/* learn how to add image */}
      {/* <img src={} alt="" /> */}
      <h3> {props.service}</h3>
      <p>{props.description}</p>
    </div>
  );
}
