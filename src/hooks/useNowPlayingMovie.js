import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../slices/movieSlice";
import { API_OPTION } from "../utils/constant";

export default function useNowPlayingMovie() {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}
