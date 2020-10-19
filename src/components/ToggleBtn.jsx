import React from "react";
import "../styles/tree.css";

function ToggleBtn(props) {
  return (<div className="toggle-btn">
    {props.type && <span className="toggle-text" onClick={props.onToggleClick}>{props.type === "expand" ? "(+)" : "(-)"}</span>}
  </div>);
}
export default ToggleBtn;
