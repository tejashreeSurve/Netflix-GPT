import { useSelector } from "react-redux";
import useGetMovieVideos from "../../hooks/useGetMovieVideos";

export function VideoTrailer({ movieId }) {
  useGetMovieVideos(movieId);
  const trailerVideo = useSelector((state) => state?.movies.movieTrailerVideo);
  if (!trailerVideo) return null;

  return (
    <iframe
      className="aspect-video w-screen block"
      src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&modestbranding=1`}
      allow="autoplay; encrypted-media"
    ></iframe>
  );
}
