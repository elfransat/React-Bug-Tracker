import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, combineReducers, } from "@reduxjs/toolkit";

// reducers
import authReducer from "./Features/Authentication/authSlice";
import bugReducer from "./Features/Bugs/bugSlice";
import userReducer from "./Features/User/userSlice";

//redux configure
const reducer = combineReducers({
  auth: authReducer,
  bugs: bugReducer,
  user: userReducer,
});

const store = configureStore({ reducer });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"
></link>;
