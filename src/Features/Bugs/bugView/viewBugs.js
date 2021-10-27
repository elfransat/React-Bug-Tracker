import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BugCard from "./BugCard";
import { getBugs } from "../bugSlice";
import "../../../scss/style.scss";
// import viewBugs from './specificBugPage/bugViewPage'

export default () => {

  const dispatch = useDispatch();
  const { bugs } = useSelector(state => state);

  useEffect(() => {
    dispatch(getBugs());
  }, [bugs.length < 1]);

  function bugClicked(name) {

  }

  return (
    <div className="bug-container">
      {bugs.map((bug, key) => (
        <BugCard key={key} bug={bug} clicked={bugClicked} />
      ))}
    </div >
  );
}
