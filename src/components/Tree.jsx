import React, { useState, useEffect } from "react";
import {treeService} from "../services/treeService"
import ToggleBtn from "./ToggleBtn";
import Checkbox from "./Checkbox";
import Label from "./Label";
import "../styles/tree.css";

function Tree(props) {
  const [root, setRoot] = useState(null);
  let rootTemp;

  /*
  * Loads data initially
  */
  useEffect(() => {
    (async function getDefaultRoot() {
      let data = await treeService.getData();
      let rootData = [];
      rootData.push(data)
      setRoot(rootData);
    })();
  }, []);

  function deselectAllChildNodes(nodes) {
    nodes.forEach((node) => {
      if(node.children.length > 0) {
        deselectAllChildNodes(node.children);
      }

      node.isSelected = false;
    });
  }

  function selectAllChildNodes(nodes) {
    nodes.forEach((node) => {
      if(node.children.length > 0) {
        selectAllChildNodes(node.children);
        node.isExpanded = true;
      }

      node.isSelected = true;
      node.isShow = true;
    });
  }

  function selectNode(parent, isChecked) {
    if(isChecked) {
      deselectAllChildNodes(parent.children);
      parent.isSelected = false;
    } else {
      selectAllChildNodes(parent.children);
      parent.isSelected = true;
      parent.isExpanded = true;
    }

    let newRoot = Object.assign([], root);
    setRoot(newRoot);
  }

  function collapseAllChild(nodes) {
    nodes.forEach((node) => {
      if(node.children.length > 0) {
        collapseAllChild(node.children);
        node.isExpanded = false;
      }

      node.isShow = false;
    });
  }

  function toggleNode(parent, isExpanded) {
    if(isExpanded) {
      collapseAllChild(parent.children);
      parent.isExpanded = false;
    } else {
      parent.children.forEach((child) => {
        child.isShow = true;
      });
      parent.isExpanded = true;
    }

    let newRoot = Object.assign([], root);
    setRoot(newRoot);
  }

  function createTree(currentNode, isFirst) {
    if(!currentNode && isFirst) {
      return <span>Loading...</span>;
    }

    let leaves = currentNode.map((leaf, index) => {
      let toggleType = leaf.children.length > 0 ? (leaf.isExpanded ? "collapse" : "expand") : "";
      return <div className={`node-div ${leaf.isShow == true || isFirst ? "node-expanded" : "node-collapsed"}`} key={leaf.source + index} >
        <div style={{display: "flex"}}>
            <ToggleBtn type={toggleType} onToggleClick={() => {toggleNode(leaf, leaf.isExpanded)}}/>
            <Checkbox isChecked={leaf.isSelected} onCheckboxSelect={() => {selectNode(leaf, leaf.isSelected)}} />
            <Label title={leaf.source}/>
          </div>
          <div>
            {leaf.children.length > 0 && createTree(leaf.children)}
          </div>
        </div>;
    });

    return (<div>
      {leaves}
    </div>);
  }

  return <div>
    <div className="stages">
      {createTree(root, true)}
    </div>
  </div>;
}
export default Tree;
