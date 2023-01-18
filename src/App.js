import { useEffect } from "react";

// my api key f9178b25
const API_URL = "https://www.omdbapi.com?apikey=f9178b25";

const App = () => {
  const searchMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    let data = await response.json();

    console.log(data);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
};

export default App;
