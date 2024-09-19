import React, { createContext, useContext, useState } from "react";

// Create a context
const ImageContext = createContext();

// Custom hook to use ImageContext
export const useImageContext = () => useContext(ImageContext);

// Context provider component
export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [nextCursor, setNextCursor] = useState(null);
  
  return (
    <ImageContext.Provider value={{ images, setImages, nextCursor, setNextCursor }}>
      {children}
    </ImageContext.Provider>
  );
};
