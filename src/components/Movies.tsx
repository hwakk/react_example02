import React, { useState } from "react";
import Movie from "./Movie";
import MovieForm from "./MovieForm";

interface MovieSet {
  id: Date;
  title: string;
  year: number;
}

const Movies = () => {
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
    <React.Fragment>
      <h1>Movie List</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </React.Fragment>
  );
};

export default Movies;
