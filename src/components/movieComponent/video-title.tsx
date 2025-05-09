import { MoreInfoIcon, PlayIcon } from "../../utils/icons";

export function VideoTitle({ movie }) {
  const { original_title, poster_path, overview } = movie;

  return (
    <div className="w-full absolute flex flex-col gap-4  items-start top-120 left-25">
      <h3 className="text-5xl font-bold text-white">{original_title}</h3>
      <p className=" w-120 font-medium text-white">{overview}</p>
      <div className="flex gap-2">
        <button className="flex items-center gap-2 py-1 px-6 bg-gray-200 font-bold text-black-10 text-lg rounded">
          <PlayIcon className="size-10" />
          Play
        </button>
        <button className="flex items-center gap-2 py-2 px-6 bg-gray-400 font-bold text-white text-lg rounded">
          <MoreInfoIcon className="fill-white" /> More info
        </button>
      </div>
    </div>
  );
}
