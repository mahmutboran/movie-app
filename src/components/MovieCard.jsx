
import { useNavigate } from 'react-router-dom';
import '../App.css';

const MovieCard = ({item}) => {
const navigate = useNavigate()

//!Learn
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


//!Learn
//   const handleMouseOver = (e) => {
//     console.log(e);
// movies.map((item)=>(
//  item.id===e  && setOverview({...overview , transform : "translateY(0%)"})
// ))
//  };

  return (
          <div 
          key={item.id}
          className="card position-relative m-3 p-0 "
          style={{ width: " 18rem" ,overflow: "hidden"}}
          onClick={()=>navigate(`/moviedetail/${item.id}`)}
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
  
  );
};

export default MovieCard;
