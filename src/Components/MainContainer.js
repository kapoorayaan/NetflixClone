import React from "react";
import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import Videobackground from "./Videobackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies == null) return;
  const mainMovie = movies[0];
  const { original_title, overview, id, backdrop_path } = mainMovie;
  return (
    <div>
      <Videotitle
        title={original_title}
        overview={overview}
        path={backdrop_path}
      />
      <Videobackground movieId={id} />
    </div>
  );
};

export default MainContainer;
