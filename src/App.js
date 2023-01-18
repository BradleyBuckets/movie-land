import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

// my api key f9178b25
const API_URL = "https://www.omdbapi.com?apikey=f9178b25";

const App = () => {
  let [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    let data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search for moives"
          value="batman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search icon" onClick={() => {}} />
      </div>
      <div className="container">
        {movies.map((item) => (
          <MovieCard movie={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
