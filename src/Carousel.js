import { Carousel } from "react-responsive-carousel";
import { demoImages } from "./demoImages";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/Carousel.css";

export default function ImageCarousel() {
  return (
    <div id="carouselContainer">
      <Carousel
        dynamicHeight={true}
        showThumbs={false}
        emulateTouch={true}
        infiniteLoop={true}
        showStatus={false}
      >
        {demoImages.map((image, index) => (
          <div key={index} className="imageContainer">
            <img
              alt={image.alt}
              src={image.src}
              width={image.width}
              height={image.height}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
