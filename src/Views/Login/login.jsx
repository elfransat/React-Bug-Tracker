import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../Controllers/Redux/authSlice";
import { Button } from "react-bootstrap";

import "./login.css";

export default () => {
  const dispatch = useDispatch();
  const [formInput, setFormInput] = useState({
    name: "",
    password: "",
  });
  // sets local state
  function inputChanged(e) {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  }
  // send local state to redux

  function submit(e) {
    dispatch(signIn(formInput));
    e.preventDefault(); // prevents page from reloading
  }

  return (
    <div className="login-background">
      <form action="" class="login-panel">
        <h1>Bug Tracker Login</h1>
        <input
          className="first-input"
          type="text"
          name="name"
          placeholder="someone@somewhere.com"
          onChange={inputChanged}
          value={formInput.name}
        ></input>
        <input
          className="second-input"
          type="password"
          name="password"
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
          onChange={inputChanged}
          value={formInput.password}
        ></input>
        <button type="submit" onClick={submit}>
          Login
        </button>
        <Button></Button>
      </form>
    </div>
  );
};
