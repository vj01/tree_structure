import React, {useEffect, useRef} from "react";
import "../styles/tree.css";

function Checkbox(props) {
  const checkRef = useRef();

  useEffect(() => {
    checkRef.current.indeterminate = props.isPartialSelection === true
  }, []);

  return (<div className="checkbox-div">
    <input type="checkbox" ref={checkRef} defaultChecked={props.isChecked}  onClick={props.onCheckboxSelect}/>
  </div>);
}
export default Checkbox;
