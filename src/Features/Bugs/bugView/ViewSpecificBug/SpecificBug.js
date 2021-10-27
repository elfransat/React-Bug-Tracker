import React from "react";
import "../../../scss/style.scss";
import Priority from "../Priority";

export default (props) => {
  const { name, priority, version } = props.bug;
  const { level, color } = Priority(priority);
  function clicked() {
    props.clicked(props.name);
  }
  return (
    <div className="bug-container">
      <div
        className="bug-card"
        onClick={clicked}
        className={color + " bug-card"}
      >
        <h2 className="name">Hello {name}</h2>
        <h4 className="priority">{level}</h4>
        <h5 className="version">{version}</h5>
        <h5 className="version">See more details</h5>
      </div>
    </div>
  );
};
