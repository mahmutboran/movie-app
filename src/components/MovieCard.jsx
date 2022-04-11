import React, { useEffect, useState } from "react";

import axios from "axios";
import '../App.css';

const API_KEY = "3ae99fcb249d40519289af2feb3212b9";

const MovieCard = ({filterText}) => {
  const [movies, setMovies] = useState([]);

console.log(filterText?.length);


// const [overview, setOverview] = useState({
//   position: "absolute",
//   bottom: 0,
//   right: 0,
//   backgroundColor: "white",
//   padding: "1rem",
//   transform: "translateX(100%)",
//   zIndex: 1,
//   transition: "transform 0.7s ease-in-out",

  
// })

  const fetchApi = async () => {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    );

    const fiterMovies = await axios.get(
      ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${filterText}`
    )
;
  setMovies(filterText?.length>0 ?fiterMovies.data.results :data.data.results )
 
    //setMovies(((fiterMovies.data.results.length>0 && filterText===undefined) || filterText ==="" ) ? data.data.results :fiterMovies.data.results);
 
  };


//   const handleMouseOver = (e) => {
//     console.log(e);
// movies.map((item)=>(
//  item.id===e  && setOverview({...overview , transform : "translateY(0%)"})
// ))
//  };
  
  useEffect(() => {
    fetchApi();
  }, [filterText]);

  return (
    <div className="d-flex row justify-content-between gap-3 p-3 bg-light" >
      {movies.map((item) => (
        <div
          key={item.id}
          className="card position-relative m-3 p-0 "
          style={{ width: " 18rem" ,overflow: "hidden"}}
          //onMouseOver={()=>handleMouseOver(item.id)}
        >
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
          <div className="card-body bg-primary d-flex justify-content-between text-white  ">
            <h6 className="card-title">{item.title}</h6>
            <h5> <span
              className={`badge ${
                item.vote_average < 6 ? "bg-danger" : item.vote_average>8? "bg-success":"bg-warning"
              }`}
            >
              {item.vote_average}
            </span></h5>
          </div>
          <p className="card-text " style={{fontSize:".9rem"}}> <span className="fs-4 d-block">Overview:</span>  {item.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieCard;
