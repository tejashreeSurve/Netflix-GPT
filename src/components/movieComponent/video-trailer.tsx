import useGetMovieVideos from "../../hooks/useGetMovieVideos";

export function VideoTrailer({ movieId }) {
  const { movieTrailer } = useGetMovieVideos(movieId);
  if (!movieTrailer) return null;

  return (
    <iframe
      className="aspect-video w-full block"
      src={`https://www.youtube.com/embed/${movieTrailer.key}?autoplay=1&mute=1&modestbranding=1`}
      allow="autoplay; encrypted-media"
    ></iframe>
  );
}
