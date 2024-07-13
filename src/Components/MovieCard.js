import React from "react";
import { IMG_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4 rounded-lg">
      <img src={IMG_URL + posterPath} alt="movie cover"></img>
    </div>
  );
};

export default MovieCard;
