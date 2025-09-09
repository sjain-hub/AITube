import { useEffect } from "react";
import VideoCard from "./VideoCard";

const VideoGrid = ({ videos, loading, loadVideos }) => {
  useEffect(() => {
    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
      if (bottomReached && !loading) {
        loadVideos();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadVideos, loading]);

  return (
    <div className="grid gap-6 sm:gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {videos.map((v) => (
        <VideoCard key={v.id} v={v} />
      ))}
      {loading && (
        <p className="col-span-3 text-center">Loading more videos...</p>
      )}
    </div>
  );
};

export default VideoGrid;
