import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import { useState } from "react";
import Register from "../pages/Register";



const Router = () => {

  const [filterText, setFilterText] = useState()


  const onSearch = (e)=>{
    setFilterText(e.target.value)
  }

  



  return (
    <BrowserRouter>
      <Navbar onSearch={onSearch} filter={filterText}/>
      <Routes>
        <Route path="/" element={<MovieCard filterText={filterText}/>} />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
