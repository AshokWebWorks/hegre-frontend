import React from "react";
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import LazyLoad from 'react-lazyload';

function Gallery({ images, loading, handleLoadMore }) {
  return (
    <div className="images-container">
      {/* Skeleton loader when loading */}
      {loading && (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 250: 1, 350: 2, 750: 3, 900: 4 }}
        >
          <Masonry gutter="6px">
            {/* Generate skeleton placeholders to match the grid layout */}
            {Array(6).fill().map((_, index) => (
              <div key={index} className="grid-item">
                <Skeleton height={300} />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}

      {/* Images rendering after loading */}
      {!loading && (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 250: 1, 350: 2, 750: 3, 900: 4 }}
        >
          <Masonry gutter="6px">
            {images.map((image) => (
              <LazyLoad
                key={image.public_id}
                height={300}
                placeholder={<Skeleton height={300} />}
                className="grid-item"
              >
                <img
                  src={image.url}
                  alt={image.public_id}
                  style={{ width: "100%", display: "block" }}
                />
              </LazyLoad>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}

      {/* Load More Button */}
      {images.length > 0 && (
        <button onClick={handleLoadMore} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}

export default Gallery;
