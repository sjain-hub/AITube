import { Bell, Menu, Mic, Search, UserCircle2, VideoIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { openMobile, toggleDesktop } from "../redux/slices/sidebarSlice";

const Navbar = ({ onToggleSidebar, toggle }) => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    if (window.innerWidth < 1024) {
      dispatch(openMobile());
    } else {
      dispatch(toggleDesktop());
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b">
      <div className="mx-auto flex h-14 max-w-[1800px] items-center gap-3 px-3 sm:px-4">
        {/* Left: menu + logo */}
        <button
          onClick={handleMenuClick}
          aria-label="Open menu"
          className="p-2 rounded-full hover:bg-gray-100 active:scale-95 transition"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 select-none">
          <div className="h-5 w-7 bg-red-600 rounded-[4px]" />
          <span className="text-lg font-semibold tracking-tight hidden sm:block">
            YouTube
          </span>
          <span className="text-xs text-gray-500 hidden sm:block">Clone</span>
        </div>

        {/* Center: search */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="ml-auto flex w-full max-w-2xl items-center gap-2"
          role="search"
          aria-label="Search videos"
        >
          <div className="flex flex-1 items-center rounded-full border bg-white focus-within:ring-2 focus-within:ring-blue-500 overflow-hidden">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="flex-1 px-4 py-2 outline-none text-sm"
            />
            <button
              type="submit"
              aria-label="Search"
              className="px-4 py-2 border-l hover:bg-gray-50"
            >
              <Search className="h-5 w-5" />
            </button>
          </div>
          <button
            type="button"
            aria-label="Voice search"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Mic className="h-5 w-5" />
          </button>
        </form>

        {/* Right: actions */}
        <div className="ml-2 hidden sm:flex items-center gap-2">
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Create"
          >
            <VideoIcon className="h-5 w-5" />
          </button>
          <button
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
          </button>
          <button className="ml-1 rounded-full border hover:shadow px-2 py-1">
            <UserCircle2 className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
