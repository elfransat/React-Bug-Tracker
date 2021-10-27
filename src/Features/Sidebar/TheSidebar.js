import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";
import "../../scss/style.scss";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  function signOut() {
    dispatch(signOut());
  }

  return (
    <CSidebar>
      <CSidebarBrand className="d-mddown-none m-r-2" to="/">
        {" "}
        <p class="sidebar-header">React Bug Tracker</p>
      </CSidebarBrand>

      <CSidebarNav>
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/viewbugs" className="nav-link">
          View Bugs
        </Link>
        {/* This option is only showed if the user is an admin. */}
        {auth.admin && (
          <Link to="/createbug" className="nav-link">
            Create New Bug
          </Link>
        )}
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
