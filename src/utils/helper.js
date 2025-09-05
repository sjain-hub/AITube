export const classNames = (...c) => c.filter(Boolean).join(" ");

// Generate placeholder videos deterministically so thumbs look varied
export const makeVideos = (count = 24) => {
  const channels = [
    "TechNova",
    "Pixel Forge",
    "CodeCraft",
    "Daily Dev",
    "UI Studio",
    "Frontend Fuel",
    "Algo Atlas",
    "Design Den",
  ];
  const titles = [
    "Master Responsive Layouts with Tailwind",
    "React Performance Tips You Need in 2025",
    "Build a YouTube Clone in 20 Minutes",
    "Top 10 VSCode Extensions for Devs",
    "Dark Mode UX Done Right",
    "Animations with Framer Motion",
    "Clean Code Patterns for Frontend",
    "Microfrontends: Pros & Cons",
  ];

  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    const seed = (i + 13) * 91;
    const views = Math.floor(Math.pow(10, 4 + (i % 3)) + (seed % 1000));
    const ageDays = (i * 7) % 360;
    const minutes = 3 + (i % 15);
    const seconds = (seed % 60).toString().padStart(2, "0");
    const duration = `${minutes}:${seconds}`;

    return {
      id,
      title: `${titles[i % titles.length]}`,
      channel: channels[i % channels.length],
      views,
      age:
        ageDays < 30
          ? `${ageDays || 1} days ago`
          : `${Math.floor(ageDays / 30)} months ago`,
      thumb: `https://picsum.photos/seed/youtube-${seed}/640/360`,
      avatar: `https://picsum.photos/seed/chan-${seed}/64/64`,
      duration,
    };
  });
};
