import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logOut } from '../auth/firebase';

const Navbar = () => {
  const { onSearch, user } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            React Movie App
          </a>

          <div className="d-flex text-white align-item-center" >
          {user ? <h5 className="m-2 text-capitalize" >{user.displayName}</h5> :
            <NavLink className="btn btn-outline-light mx-3" to="/login">
              Login
            </NavLink>}
            {user ?   <NavLink className="btn btn-outline-light" to="/" onClick={()=>logOut()} >
              Logout
            </NavLink>:
            <NavLink className="btn btn-outline-light" to="/register">
              Register
            </NavLink>}
          
          </div>
        </div>
      </nav>
      <div className=" p-3 bg-secondary d-flex justify-content-center">
        <input
          style={{ width: "20rem" }}
          type="search"
          placeholder="Search a movie"
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default Navbar;
