import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>E-Commerce Platform</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/add-user">Add User</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
