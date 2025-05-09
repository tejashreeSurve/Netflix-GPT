import { MOVIE_POSTER } from "../../utils/constant";

export function MovieCard({ movie }) {
  const { poster_path } = movie;
  return (
    <div className="w-60 rounded  relative overflow-visible">
      <img
        className="w-full h-auto object-cover rounded"
        src={MOVIE_POSTER + poster_path}
        alt="movie-bg-image"
      />
    </div>
  );
}
