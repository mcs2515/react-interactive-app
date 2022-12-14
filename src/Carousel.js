import { Carousel } from "react-responsive-carousel";
import { demoImages } from "./demoImages";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/Carousel.css";
import { useEffect, useRef, useState } from "react";

export default function ImageCarousel() {
  const imageContainerRef = useRef();
  const [maxImageHeight, setMaxImageHeight] = useState("auto");
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const resizeImage = () => {
    const image = imageContainerRef.current;
    const imageWidth = image.clientWidth;
    const imageHeight = image.clientHeight;
    const parentHeight = document.querySelector(".App-Content").clientHeight;

    setMaxImageHeight("auto");
    if (imageWidth < imageHeight && imageHeight >= parentHeight) {
      setMaxImageHeight(parentHeight);
    }
  };

  useEffect(() => {
    resizeImage();
  }, []);

  useEffect(() => {
    resizeImage();
  }, [dimensions]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <Carousel
        dynamicHeight={true}
        showThumbs={false}
        emulateTouch={true}
        infiniteLoop={true}
        showStatus={false}
        onChange={resizeImage}
      >
        {demoImages.map((image, index) => (
          <div
            ref={imageContainerRef}
            key={index}
            className="imageContainer"
            style={{ height: maxImageHeight }}
          >
            <img
              alt={image.alt}
              src={image.src}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}
