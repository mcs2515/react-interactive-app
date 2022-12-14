import { Carousel } from "react-responsive-carousel";
import { demoImages } from "./demoImages";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/Carousel.css";
import { useEffect, useRef, useState } from "react";

export default function ImageCarousel() {
  const carouselRef = useRef();
  const [maxImageHeight, setMaxImageHeight] = useState("auto");

  const checkImageSize = (index, img) => {
    const width = img.props.children.props.width;
    const height = img.props.children.props.height;
    console.log("clicked");
    if (width < height) {
      const parentHeight = document.querySelector(".App-Content").clientHeight;

      setMaxImageHeight(parentHeight);
      return;
    }

    setMaxImageHeight("auto");
  };

  useEffect(() => {
    //automatically adjust first image's height
    carouselRef.current.click();
  }, []);

  return (
    <>
      <Carousel
        dynamicHeight={true}
        showThumbs={false}
        emulateTouch={true}
        infiniteLoop={true}
        showStatus={false}
        onChange={checkImageSize}
        onClickItem={checkImageSize}
      >
        {demoImages.map((image, index) => (
          <div
            ref={carouselRef}
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
