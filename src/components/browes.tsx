import useNowPlayingMovie from "../hooks/useNowPlayingMovie";
import Header from "./header";
import { MainContainer } from "./movieComponent/main-container";

function Browes() {
  useNowPlayingMovie();

  return (
    <div className="bg-black">
      <Header />
      <MainContainer />
    </div>
  );
}

export default Browes;
