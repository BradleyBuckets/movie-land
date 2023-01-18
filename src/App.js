import { useState } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

// my api key f9178b25
const API_URL = "https://www.omdbapi.com?apikey=f9178b25";

const App = () => {
  let [movies, setMovies] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    let data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input
          placeholder="Search for moives"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}
        />
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
