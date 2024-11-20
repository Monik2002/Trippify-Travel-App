import React from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaGlobeAsia } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ logout, sidebar }) => {
  const { isSidebarOpen, setIsSidebarOpen } = sidebar;

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <button
          className="toggle-btn"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <BiMenuAltLeft />
        </button>

        <div className="logo">
          <FaGlobeAsia className="logo-icon" />
          <h1 className="logo-txt">Trippify</h1>
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/create-journal" activeClassName="active">Create Journal</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my-journals" activeClassName="active">My Journals</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/all-journals" activeClassName="active">All Journals</NavLink> {/* Link to About Us page */}
          </li>
          <li className="nav-item">
            <NavLink to="/about-us" activeClassName="active">About Us</NavLink> {/* Link to About Us page */}
          </li>
          <li className="nav-item" onClick={logout}>
            <button className="logout-btn" type="button">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
