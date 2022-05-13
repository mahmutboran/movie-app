import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const MovieDetail = () => {
  const { API_KEY } = useContext(AuthContext);
  const [item, setItem] = useState();
  const params = useParams();

  const navigate = useNavigate();

  const detailsApi = async () => {
    const details = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}`
    );
    setItem(details?.data);
  };

  useEffect(() => {
    detailsApi();
  }, []);

  console.log(item);
  return (
    <div>
      <div className="d-flex ">
        <div
          className=" position-relative m-3 p-0 "
          style={{ width: " 18rem", overflow: "hidden" }}
        >
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
            alt={item?.title}
          />
        </div>
        <div>
          <h1 className="card-title">{item?.title}</h1>
          <h3>{item?.vote_average}</h3>
          <p style={{ width: "10rem", fontSize: ".9rem" }}>
            Overview:{item?.overview}{" "}
          </p>
        </div>
      </div>
  
      <a href={item?.homepage} target="_blank"> Home Page</a>

      <button className="btn btn-primary" onClick={() => navigate(-1)}>
        Prev Page
      </button>
    </div>
  );
};

export default MovieDetail;
