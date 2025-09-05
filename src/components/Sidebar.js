import {
  Clock,
  Compass,
  Film,
  Flame,
  Gamepad2,
  History,
  Home,
  Laptop,
  Library,
  ListVideo,
  Music2,
  PlaySquare,
  Radio,
  ThumbsUp,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { closeMobile } from "../redux/slices/sidebarSlice";
import { classNames } from "../utils/helper";

const Sidebar = ({ close }) => {
  const { mode } = useSelector((s) => s.sidebar);
  const dispatch = useDispatch();

  const baseLink =
    "flex items-center gap-4 px-3 py-2 rounded-xl hover:bg-gray-100 active:scale-[.99]";

  const content = (
    <nav className="flex flex-col gap-2 p-3">
      <a className={baseLink} href="#">
        <Home className="h-5 w-5" /> {mode !== "collapsed" && <span>Home</span>}
      </a>
      <a className={baseLink} href="#">
        <Compass className="h-5 w-5" />{" "}
        {mode !== "collapsed" && <span>Explore</span>}
      </a>
      <a className={baseLink} href="#">
        <ListVideo className="h-5 w-5" />{" "}
        {mode !== "collapsed" && <span>Subscriptions</span>}
      </a>

      <div className="my-2 h-px bg-gray-200" />

      <a className={baseLink} href="#">
        <Library className="h-5 w-5" />{" "}
        {mode !== "collapsed" && <span>Library</span>}
      </a>
      <a className={baseLink} href="#">
        <History className="h-5 w-5" />{" "}
        {mode !== "collapsed" && <span>History</span>}
      </a>
      <a className={baseLink} href="#">
        <PlaySquare className="h-5 w-5" />{" "}
        {mode !== "collapsed" && <span>Your videos</span>}
      </a>
      <a className={baseLink} href="#">
        <Clock className="h-5 w-5" />{" "}
        {mode !== "collapsed" && <span>Watch later</span>}
      </a>
      <a className={baseLink} href="#">
        <ThumbsUp className="h-5 w-5" />{" "}
        {mode !== "collapsed" && <span>Liked videos</span>}
      </a>

      {mode !== "collapsed" && (
        <>
          <div className="my-2 h-px bg-gray-200" />

          <div className="px-3 text-xs uppercase tracking-wider text-gray-500">
            Explore
          </div>
          <a className={baseLink} href="#">
            <Flame className="h-5 w-5" />{" "}
            {mode !== "collapsed" && <span>Trending</span>}
          </a>
          <a className={baseLink} href="#">
            <Music2 className="h-5 w-5" />{" "}
            {mode !== "collapsed" && <span>Music</span>}
          </a>
          <a className={baseLink} href="#">
            <Film className="h-5 w-5" />{" "}
            {mode !== "collapsed" && <span>Movies</span>}
          </a>
          <a className={baseLink} href="#">
            <Radio className="h-5 w-5" />{" "}
            {mode !== "collapsed" && <span>Live</span>}
          </a>
          <a className={baseLink} href="#">
            <Gamepad2 className="h-5 w-5" />{" "}
            {mode !== "collapsed" && <span>Gaming</span>}
          </a>
          <a className={baseLink} href="#">
            <Laptop className="h-5 w-5" />{" "}
            {mode !== "collapsed" && <span>Tech</span>}
          </a>
        </>
      )}
    </nav>
  );

  return (
    <>
      {/* Desktop static sidebar */}
      <aside
        className={`hidden shrink-0 border-r h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto lg:block ${
          mode === "collapsed" ? "w-20" : "w-64"
        }`}
      >
        {content}
      </aside>

      {/* Mobile drawer */}
      <div
        className={classNames(
          "fixed inset-0 z-50 bg-black/40 transition-opacity lg:hidden",
          mode === "mobileOpen"
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => dispatch(closeMobile())}
        aria-hidden={mode !== "mobileOpen"}
      />
      <aside
        className={classNames(
          "fixed top-14 bottom-0 left-0 z-50 w-72 bg-white border-r shadow-lg transition-transform lg:hidden",
          mode === "mobileOpen" ? "translate-x-0" : "-translate-x-full"
        )}
        aria-hidden={mode !== "mobileOpen"}
      >
        <div className="h-full overflow-y-auto">{content}</div>
      </aside>
    </>
  );
};

export default Sidebar;
