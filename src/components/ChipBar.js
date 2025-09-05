import React from "react";
import { classNames } from "../utils/helper";

const ChipBar = () => {
  const chips = [
    "All",
    "JavaScript",
    "React",
    "Tailwind",
    "Music",
    "Live",
    "Gaming",
    "AI",
    "UX",
    "Podcasts",
    "Mixes",
    "Shorts",
  ];
  return (
    <div className="sticky top-14 z-30 bg-white border-b">
      <div className="mx-auto max-w-[1800px] px-3 sm:px-4 py-3 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2">
          {chips.map((c, i) => (
            <button
              key={i}
              className={classNames(
                "whitespace-nowrap rounded-full border px-3 py-1 text-sm hover:bg-gray-50",
                i === 0 && "bg-black text-white border-black hover:bg-black"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChipBar;
