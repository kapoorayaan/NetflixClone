import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black rounded pl-12">
      <div className="-mt-52 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList title={"Horror Movies"} movies={movies.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
