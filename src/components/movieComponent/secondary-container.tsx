import { useSelector } from "react-redux";
import { AppStoreType } from "../../utils/type";
import { MovieCard } from "./movie-card";
import { useRef } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "../../utils/icons";

export function SecondaryContainer() {
  const user = useSelector((state: AppStoreType) => state.user);
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
  if (!movies) return null;

  const filterMovies = movies.slice(1);

  return (
    <div className="flex flex-col px-16 pb-6 gap-3">
      <h4 className="font-bold text-2xl text-white">
        Continue Watching for {user?.displayName}
      </h4>
      <Movie filterMovies={filterMovies} />
    </div>
  );
}

function Movie({ filterMovies }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const SCROLL_AMOUNT = 1200;

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({
      left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      <button
        onClick={() => scroll("left")}
        className="hidden group-hover:block absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 p-2 rounded-full"
      >
        <ArrowBackIcon />
      </button>
      <div
        ref={rowRef}
        className="
          flex flex-row gap-3 
          overflow-x-hidden    /* hide native scrollbars */
          overflow-y-hidden 
          snap-x snap-mandatory
          h-full
          scroll-smooth        /* smooth support for keyboard too */
        "
      >
        {filterMovies.map((movie) => (
          <div className="snap-start h-full rounded!">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <button
        className="hidden group-hover:block absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 p-2 rounded-full"
        onClick={() => scroll("right")}
      >
        <ArrowForwardIcon />
      </button>
    </div>
  );
}
