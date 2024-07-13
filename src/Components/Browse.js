import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import UsePopularMovies from "../hooks/UsePoupularMovies";

const Browse = () => {
  useNowPlaying();
  UsePopularMovies();
  return (
    <div>
      <Header />

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
