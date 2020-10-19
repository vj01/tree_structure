import React from "react";
import "../styles/tree.css";

function Label(props) {
  return (<div className="label-div">
    <span data-testid="titleTag">{props.title}</span>
  </div>);
}
export default Label;
