import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Controllers/Redux/authSlice";
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  function signOut() {
    dispatch(signOut());
  }
  return (
    <div class="wrapper">
      <nav id="sidebar">
        <div class="sidebar-header">
          <h3>React Bug Tracker</h3>
        </div>

        <ul class="list-unstyled components">
          <p>Dummy Heading</p>
          <li class="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              Home
            </a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              Pages
            </a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div id="content">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button type="button" id="sidebarCollapse" class="btn btn-info">
              <i class="fas fa-align-left"></i>
              <span>Toggle Sidebar</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );

  /* 
    <div className="sidebar bg-primary">
        
      <Link className="nav-link" to="/">
        <h1 className="brand"> Bug Tracker</h1>
      </Link>
      <ul>
        <li>
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/viewbugs">
            View Bugs
          </Link>
        </li>
        {auth.admin && (
          <li>
            <Link className="nav-link" to="/createbugs">
              Create Bugs
            </Link>
          </li>
        )}
      </ul>
      <div className="logout-container">
        <button onClick={signOut} className="nav-link logout">
          Logout
        </button>
      </div>
    </div>
    */
};
