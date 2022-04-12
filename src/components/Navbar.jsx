import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { onSearch, user ,setUser} = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            React Movie App
          </a>

          <div className="d-flex text-white align-item-center" >
          {user?.length>0 ? <h5 className="m-2 text-capitalize">{user}</h5> :
            <NavLink className="btn btn-outline-light mx-3" to="/login">
              Login
            </NavLink>}
            {user?.length>0 ?   <NavLink className="btn btn-outline-light" to="/" onClick={()=>setUser()} >
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
