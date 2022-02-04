import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";

interface MovieSet {
  id: Date;
  title: string;
  year: number;
}

function App() {
  const [movies, setMovies] = useState<MovieSet[]>([]);

  const removeMovie = (id: Date) => {
    setMovies(
      movies.filter((movie) => {
        return movie.id !== id;
      })
    );
  };

  const renderMovies = movies.length
    ? movies.map((movie) => {
        return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
      })
    : "추가된 영화가 없습니다.";

  const addMovie = (movie: MovieSet) => {
    setMovies([...movies, movie]);
  };

  return (
    <div className="App">
      <Navbar />
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}

export default App;
