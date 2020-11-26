import React from "react";

export default function Categories(props) {
  return (
    <div className="items">
      <h2>{props.num}</h2>
      <p>{props.description}</p>
    </div>
  );
}
