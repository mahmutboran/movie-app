import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ onSearch, filterText }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            React Movie App
          </a>

          <div className="" id="navbarSupportedContent">
            <NavLink className="btn btn-outline-light mx-3" to="/login" >
              Login
            </NavLink>
            <NavLink className="btn btn-outline-light"  to="/register">
              Register
            </NavLink>
          </div>
        </div>
      </nav>
      <div className=" p-3 bg-secondary d-flex justify-content-center">
        <input
        style={{width:"20rem" }}
          className="form-control "
          type="search"
          placeholder="Search a movie"
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default Navbar;
