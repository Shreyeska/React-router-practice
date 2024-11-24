import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

const Navbar = () => {
  const NavLinkstyles = ({ isActive }) => {
    return {
      //   color: isActive ? "red" : "black",
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();
  return (
    <nav className="primary-nav">
      <NavLink style={NavLinkstyles} to="/">
        Home
      </NavLink>
      <NavLink style={NavLinkstyles} to="/about">
        About
      </NavLink>
      <NavLink style={NavLinkstyles} to="/products">
        Products
      </NavLink>
      <NavLink style={NavLinkstyles} to="/users">
        Users
      </NavLink>
      <NavLink style={NavLinkstyles} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={NavLinkstyles} to="login">
          Login
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
