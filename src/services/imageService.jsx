import axios from "axios";

// Fetch images with pagination (default behavior)
export const fetchImages = async (nextCursor = null) => {
  const response = await axios.get("https://hegre-backend.vercel.app/api/images", {
    params: { next_cursor: nextCursor },
  });
  return response.data;
};

// Fetch images by folder name
export const fetchImagesByFolder = async (folder) => {
  const response = await axios.get(
    `https://hegre-backend.vercel.app/api/images/folder/${folder}`
  );
  return response.data;
};

// Fetch images by tag
export const fetchImagesByTag = async (tag) => {
  const response = await axios.get(
    `https://hegre-backend.vercel.app/api/images/tag/${tag}`
  );
  return response.data;
};
