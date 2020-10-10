import React from "react";
import "./SkillItem.css";

function SkillItem(props) {
  return (
    <div>
      <div className="item">
        <p>{props.name}</p>
      </div>
    </div>
  );
}
export default SkillItem;
