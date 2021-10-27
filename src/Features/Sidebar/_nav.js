import React from "react";
import CIcon from "@coreui/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../Controllers/Redux/authSlice";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard Home",
    to: "/charts",
    icon: "cil-chart-pie",
  },

  {
    _tag: "CSidebarNavItem",
    name: "View Bugs",
    to: "/widgets",
    icon: "cil-calculator",
    badge: {
      color: "info",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Create bugs",
    to: "/widgets",
    icon: "cil-calculator",
    badge: {
      color: "info",
    },
  },
  {
    _tag: "CSidebarNavDivider",
  },
];

export default _nav;
