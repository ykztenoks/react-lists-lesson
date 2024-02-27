// src/components/MovieList.jsx

import { useState } from "react";

// import the array of movie objects
import moviesData from "../movies-data.json";

function MovieList() {
  // Declare a state variable "movies"
  // and set the array from movies-data.json as the initial state
  const [movies, setMovies] = useState(moviesData);
  console.log(movies);

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return (
          <div key={movie._id} className="MovieCard">
            <h2>{movie.title}</h2>
            <p>Director: {movie.director}</p>
            <span>
              Oscar: {movie.hasOscars ? <span>🏆</span> : <span>❌</span>}
            </span>
            <p>Rating: {movie.IMDBRating}</p>
            <button className="btn-delete">Delete </button>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
