import React from "react";
import "../styles/tree.css";

function Checkbox(props) {
  return (<div className="checkbox-div">
    <input type="checkbox" defaultChecked={props.isChecked}  onClick={props.onCheckboxSelect}/>
  </div>);
}
export default Checkbox;
