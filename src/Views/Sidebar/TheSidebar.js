import React from "react";
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
        React Bug Tracker
      </CSidebarBrand>
      <CSidebarNav className="d-flex align-items-center">
        <CSidebarNavItem className="nav-item"> Hello</CSidebarNavItem>
        <CSidebarNavItem className="nav-item">Hello</CSidebarNavItem>
        {/* This option is only showed if the user is an admin. */}
        {auth.admin && (
          <CSidebarNavItem className="nav-item">Hello</CSidebarNavItem>
        )}
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
