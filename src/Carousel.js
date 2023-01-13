import { Carousel } from "react-responsive-carousel";
import { demoImages } from "./demoImages";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/Carousel.css";
import { useEffect, useState, useRef } from "react";

export default function ImageCarousel() {
  const padding = 5;
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const carouselRef = useRef();

  const resizeImage = (image) => {
    const imageWidth = image.width;
    const imageHeight = image.height;
    const appHeight = document.querySelector(".App-Content").clientHeight;

    if (imageHeight > imageWidth && imageHeight > appHeight) {
      const percentage = 100 - ((imageHeight - appHeight) / imageHeight) * 100;
      return percentage - padding;
    }
  };

  useEffect(() => {
    const cacheImage = (image) => {
      return new Promise((resolve, reject) => {
        const newImage = new Image();
        newImage.src = image.src;

        newImage.onload = () => {
          resolve(image.src);
        };
        newImage.onerror = (err) => reject(err);
      });
    };

    Promise.all(demoImages.map((image) => cacheImage(image)))
      .then(setAllImagesLoaded(true))
      .catch((err) => console.log("Failed to loade images", err));
  }, []);

  return (
    <>
      {allImagesLoaded ? (
        <Carousel
          ref={carouselRef}
          dynamicHeight={true}
          showThumbs={false}
          emulateTouch={true}
          infiniteLoop={true}
          showStatus={false}
          autoPlay={false}
        >
          {demoImages.map((image, index) => (
            <div
              key={index}
              className="imageContainer"
              style={{ height: resizeImage(image) + "%" }}
            >
              <img
                id={index}
                alt={image.alt}
                src={image.src}
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </Carousel>
      ) : null}
    </>
  );
}
