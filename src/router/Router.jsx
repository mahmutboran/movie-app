import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Login from "../pages/Login";

import Register from "../pages/Register";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar  />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/moviedetail/:id" element={ <MovieDetail/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
