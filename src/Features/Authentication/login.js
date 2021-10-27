import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "./authSlice";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import "./login.css";
import background from "../../images/background.jpeg";

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
    <div style={{ backgroundImage: `url(${background})` }}>
      <Container className="d-flex align-items-center justify-content-center min-vh-100">
        <Card style={{ width: "30rem" }}>
          <Col className="pt-5 pr-5 pl-5 pb-3 text-center" sm={12}>
            <Form className="d-flex flex-column justify-content-center">
              <h4 className="mb-3 mx-auto">React Bug Tracker</h4>
              <Form.Group controlId="formBasicEmail">
                {/* First form selection (email) */}
                <Form.Control
                  type="email"
                  name="name"
                  placeholder="someone@somewhere.com"
                  onChange={inputChanged}
                  value={formInput.name}
                />
              </Form.Group>
              {/* Second form selection (password) */}
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="••••••••••"
                  onChange={inputChanged}
                  value={formInput.password}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={submit}>
                {" "}
                Submit
              </Button>
            </Form>
            <Container className="mt-3">
              <p className="m-0">
                Forgot your <a href="">Password?</a>
              </p>
              <p className="m-0">
                Create an account? <a href="">Sign Up</a>
              </p>
              <p>
                Sign in as <a href="">Demo User</a>
              </p>
            </Container>
          </Col>
        </Card>
      </Container>
    </div>
    /*
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
        <Button type="submit" variant="primary" onClick={submit}>
          Login
        </Button>
      </form>
    </div>
  */
  );
};
