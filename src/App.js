import { useEffect } from "react";

import SearchIcon from "./search.svg";

// my api key f9178b25
const API_URL = "https://www.omdbapi.com?apikey=f9178b25";

const App = () => {
  const searchMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    let data = await response.json();

    console.log(data.Search);
  };

  let movie = {
    Title: "Batman v Superman: Dawn of Justice",
    Year: "2016",
    imdbID: "tt2975590",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
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
        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img
              src={
                movie.Poster === "N/A"
                  ? "https://via.placeholder.com/400"
                  : movie.Poster
              }
              alt={movie.Title}
            />
          </div>
          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
