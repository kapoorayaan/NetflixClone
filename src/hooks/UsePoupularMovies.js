import { useDispatch } from "react-redux";
import { API_options } from "../Utils/constants";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const UsePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};
export default UsePopularMovies;
