import VideoCard from "./VideoCard";

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {videos.map((v) => (
        <VideoCard key={v.id} v={v} />
      ))}
    </div>
  );
};

export default VideoGrid;
