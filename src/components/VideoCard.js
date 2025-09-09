const VideoCard = ({ v }) => {
  return (
    <article className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100">
        <img
          src={v.thumb}
          alt={v.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-semibold text-white">
          {v.duration}
        </span>
      </div>
      <div className="mt-3 flex gap-3">
        <img
          src={v.avatar}
          alt={v.channel}
          className="h-9 w-9 rounded-full object-cover"
          loading="lazy"
        />
        <div className="min-w-0">
          <h3 className="line-clamp-2 font-medium leading-snug">{v.title}</h3>
          <div className="mt-1 text-sm text-gray-600">
            <div className="truncate">{v.channel}</div>
            <div className="truncate">
              {v.views} views • {v.age}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;
