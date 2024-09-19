import { useState, useEffect } from "react";
import { fetchImages, fetchImagesByFolder, fetchImagesByTag } from "../services/imageService";
import { useImageContext } from "../contexts/ImageContext";
const useImageFetch = () => {
  const { images, setImages, nextCursor, setNextCursor } = useImageContext(); 

  const [loading, setLoading] = useState(false);

  // Fetch images with pagination
  const fetchImageData = async (cursor = null) => {
    setLoading(true);
    try {
      const data = await fetchImages(cursor);
      setImages((prevImages) => [
        ...prevImages,
        ...data.resources.filter(
          (newImage) =>
            !prevImages.some(
              (existingImage) => existingImage.public_id === newImage.public_id
            )
        ),
      ]);
      setNextCursor(data.next_cursor || null);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
    setLoading(false);
  };

  // Fetch images by folder
  const fetchImagesByFolderName = async () => {
    setLoading(true);
    try {
      const data = await fetchImagesByFolder("Cleo-in-Angelic");
      setImages(data.resources);
    } catch (error) {
      console.error("Error fetching images by folder:", error);
    }
    setLoading(false);
  };

  // Fetch images by tag
  const fetchImagesByTagName = async () => {
    setLoading(true);
    try {
      const data = await fetchImagesByTag("poster");
      setImages(data.resources);
    } catch (error) {
      console.error("Error fetching images by tag:", error);
    }
    setLoading(false);
  };

  // Handle loading more images
  const handleLoadMore = () => {
    if (nextCursor) {
      fetchImageData(nextCursor);
    }
  };

  // Initial fetch on mount
  useEffect(() => {
   
    if (images.length === 0) {
      fetchImageData();
    }

  }, []);

  return {
    images,
    loading,
    handleLoadMore,
    fetchImagesByFolderName,
    fetchImagesByTagName,
  };
};

export default useImageFetch;
