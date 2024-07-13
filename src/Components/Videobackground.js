import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/UseMovieTrailer";

const Videobackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store?.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div>
      <div className="w-screen"> </div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId?.key +
          "?&autoplay=1&mute=1"
        }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobackground;
