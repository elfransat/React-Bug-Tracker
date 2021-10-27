import React from "react";
import "../../../scss/style.scss";
import Priority from "./Priority";

import { Link } from "react-router-dom";

export default (props) => {
  const { _id, name, priority, version } = props.bug;
  const { level, color } = Priority(priority);
  function clicked() {
    props.clicked(props.name);
  }
  return (
    <div className="bug-card" onClick={clicked} className={color + " bug-card"}>
      <h2 className="name">{name}</h2>
      <h4 className="priority">{level}</h4>
      <h5 className="version">{version}</h5>
      <Link to={`/viewbugs/${_id}`} className="version">
        See more details
      </Link>
    </div>
  );
};
