import { useState, useEffect } from "react";

import { API_OPTION } from "../utils/constant";

export default function useGetMovieVideos(movieId) {
  const [movieTrailer, setMovieTrailer] = useState();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTION
    );
    const json = await data.json();
    const trailer = json.results[0];
    setMovieTrailer(trailer);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return {
    movieTrailer,
  };
}
