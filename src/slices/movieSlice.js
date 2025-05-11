import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailerVidoe: (state, action) => {
      state.movieTrailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailerVidoe } = movieSlice.actions;

export default movieSlice.reducer;
