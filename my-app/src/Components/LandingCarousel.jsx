import React, { useState, useEffect } from "react";
import { Image,Box } from "@chakra-ui/react";
const images = [
  "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80",
  "https://images.unsplash.com/photo-1631217872822-1c2546d6b864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2091&q=80",
  "https://images.unsplash.com/photo-1570057811613-5ac715e0afec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
  "https://plus.unsplash.com/premium_photo-1661765677302-927b0469923e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
];
// Add more image URLs as needed

function BackgroundSlideshow() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const slideshowTimer = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change slide every 5 seconds

    return () => {
      clearTimeout(slideshowTimer);
    };
  }, [currentImage]);

  const backgroundImageStyle = {
    position: "absolute",
    backgroundImage: `url(${images[currentImage]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

  return <Box boxStyle={backgroundImageStyle}
  borderRadius={{ base: "0", md: "0", lg: "0", xl: "10px" }}
  borderRightRadius={{ base: "10px", md: "10px", lg: "10px", xl: "10px" }}
   height="100vh">
    <Image src={images[currentImage]} alt=""/>
  {/* Your content here */}</Box>;
}

export default BackgroundSlideshow;
