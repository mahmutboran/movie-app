import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { AuthContext } from "../context/AuthContext";

const Main = () => {
  const { movies } = useContext(AuthContext);
  console.log(movies);
  return (
    <div className="d-flex row justify-content-between gap-3 p-3 bg-light">
      {movies.map((item) => (
        <MovieCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Main;
