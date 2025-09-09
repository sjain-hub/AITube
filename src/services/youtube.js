export const fetchVideos = async (
  query = "frontend development",
  pageToken = ""
) => {
  function formatAge(publishedAt) {
    const published = new Date(publishedAt);
    const now = new Date();
    const diffDays = Math.floor((now - published) / (1000 * 60 * 60 * 24));

    if (diffDays < 30) return `${diffDays || 1} days ago`;

    const months = Math.floor(diffDays / 30);
    if (months < 12) return `${months} months ago`;

    const years = Math.floor(months / 12);
    return `${years} years ago`;
  }

  function formatViews(views) {
    if (views >= 1_000_000) {
      return `${(views / 1_000_000).toFixed(1).replace(/\.0$/, "")}M views`;
    }
    if (views >= 1_000) {
      return `${(views / 1_000).toFixed(1).replace(/\.0$/, "")}K views`;
    }
    return `${views} views`;
  }

  try {
    const url = new URL(`${process.env.REACT_APP_YOUTUBE_BASE_URL}/search`);
    url.searchParams.append("part", "snippet");
    url.searchParams.append("maxResults", "20");
    url.searchParams.append("q", query);
    url.searchParams.append("type", "video");
    url.searchParams.append("key", process.env.REACT_APP_YOUTUBE_API_KEY);
    if (pageToken) url.searchParams.append("pageToken", pageToken);

    const response = await fetch(url);
    const data = await response.json();

    // Step 2: fetch details (views + duration)
    const videoIds = data.items.map((item) => item.id.videoId).join(",");
    const channelIds = data.items
      .map((item) => item.snippet.channelId)
      .join(",");
    const detailsUrl = `${process.env.REACT_APP_YOUTUBE_BASE_URL}/videos?part=statistics,contentDetails&id=${videoIds}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    const detailsRes = await fetch(detailsUrl);
    const detailsData = await detailsRes.json();

    const detailsMap = new Map(detailsData.items.map((d) => [d.id, d]));

    // Step 3: fetch channel avatars
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelIds}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    const channelRes = await fetch(channelUrl);
    const channelData = await channelRes.json();
    const channelMap = new Map(
      channelData.items.map((c) => [c.id, c.snippet.thumbnails.default.url])
    );

    // Step 3: normalize into your structure
    return {
      videos: data.items.map((item) => {
        const id = item.id.videoId;
        const snippet = item.snippet;
        const detail = detailsMap.get(id);

        // convert ISO8601 duration → m:ss
        const iso = detail?.contentDetails?.duration || "PT0M0S";
        const minutes = iso.match(/(\d+)M/)?.[1] || 0;
        const seconds = iso.match(/(\d+)S/)?.[1] || 0;
        const duration = `${minutes}:${String(seconds).padStart(2, "0")}`;

        return {
          id,
          title: snippet.title,
          channel: snippet.channelTitle,
          views: formatViews(Number(detail?.statistics?.viewCount || 0)),
          age: formatAge(snippet.publishedAt),
          thumb: snippet.thumbnails?.high?.url,
          avatar:
            channelMap.get(snippet.channelId) ||
            `https://ui-avatars.com/api/?background=random&name=${encodeURIComponent(
              snippet.channelTitle
            )}`,
          duration,
        };
      }),
      nextPageToken: data.nextPageToken || null,
    };
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return { videos: [], nextPageToken: null };
  }
};
