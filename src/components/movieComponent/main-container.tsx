import { useSelector } from "react-redux";
import { VideoTitle } from "./video-title";
import { VideoTrailer } from "./video-trailer";
import { SecondaryContainer } from "./secondary-container";

export function MainContainer() {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);

  if (!movies || !movies.length) return <div>Loading....</div>;
  const mainMovie = movies[0];

  return (
    <div className="relative w-full overflow-hidden">
      <VideoTitle movie={mainMovie} />
      <VideoTrailer movieId={mainMovie.id} />
      <SecondaryContainer />
      <SecondaryContainer />
      <SecondaryContainer />
    </div>
  );
}
