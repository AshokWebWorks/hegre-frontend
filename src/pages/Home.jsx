import React from "react";
import Hero from '../components/Hero/Hero';
import Gallery from "../components/Gallery/Gallery";
import useImageFetch from "../hooks/useImageFetch";

function Home() {
  const {
    images,
    loading,
    handleLoadMore,
    fetchImagesByFolderName,
    fetchImagesByTagName
  } = useImageFetch(); // Custom hook

  return (
    <main className="flex-grow mt-3 pt-[40px]">
      <Hero />
      <div className="controls">
        <button onClick={fetchImagesByFolderName}>Fetch by Folder</button>
        <button onClick={fetchImagesByTagName}>Fetch by Tag</button>
      </div>
      <Gallery images={images} loading={loading} handleLoadMore={handleLoadMore} />
    </main>
  );
}

export default Home;
