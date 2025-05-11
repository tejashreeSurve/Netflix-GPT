import { useEffect } from "react";

import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieTrailerVidoe } from "../slices/movieSlice";

export default function useGetMovieVideos(movieId) {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTION
    );
    const json = await data.json();
    const trailer = json.results[0];
    dispatch(addMovieTrailerVidoe(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
}
