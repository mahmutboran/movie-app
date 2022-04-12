import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const UserProvider = (props) => {
  const API_KEY = "3ae99fcb249d40519289af2feb3212b9";
  const [movies, setMovies] = useState([]);
  const [filterText, setFilterText] = useState();
  const [user, setUser] = useState(null)


  const onSearch = (e) => {
    setFilterText(e.target.value);
  };



  const filterApi = async () => {
    const fiterMovies = await axios.get(
      ` https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${filterText}`
    );
    setMovies(   fiterMovies.data.results);
    //setMovies(((fiterMovies.data.results.length>0 && filterText===undefined) || filterText ==="" ) ? data.data.results :fiterMovies.data.results);
  };

  const fetchApi = async ()=>{
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    );
    setMovies( data.data.results);
  }



  
  useEffect(() => {
    if (!filterText) {
      fetchApi()
    } else{
      filterApi();
    }
  }, [filterText]);

  return (
    <AuthContext.Provider
      value={{
        movies,
        filterText,
        onSearch,
        setMovies,
        setFilterText,
        fetchApi,
        API_KEY,
        setUser,
        user
  
      
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
