import { useMemo } from "react";
import "./App.css";
import { makeVideos } from "./utils/helper";
import Navbar from "./components/Navbar";
import ChipBar from "./components/ChipBar";
import VideoGrid from "./components/VideoGrid";
import Sidebar from "./components/Sidebar";

function App() {
  const videos = useMemo(() => makeVideos(28), []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <div className="flex mx-auto max-w-[1800px]">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <ChipBar />
          <div className="px-3 sm:px-4 py-6">
            <VideoGrid videos={videos} />
          </div>
        </main>
      </div>

      {/* Small UX niceties */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

export default App;
