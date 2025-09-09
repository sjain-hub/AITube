import { useEffect, useState, useCallback } from "react";
import { fetchVideos } from "../services/youtube";

export const useYouTubeVideos = (query = "frontend development") => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadVideos = useCallback(async () => {
    if (loading) return;
    setLoading(true);

    const { videos: newVideos, nextPageToken: newToken } = await fetchVideos(
      query,
      nextPageToken
    );

    setVideos((prev) => [...prev, ...newVideos]);
    setNextPageToken(newToken);
    setLoading(false);
  }, [query, nextPageToken, loading]);

  useEffect(() => {
    loadVideos();
  }, [query]);

  return { videos, loadVideos, loading };
};
