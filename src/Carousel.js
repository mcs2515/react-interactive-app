import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/Carousel.css";

export default function ImageCarousel() {
  return (
    <div id="carouselContainer">
      <Carousel
        class="imageCarousel"
        dynamicHeight={true}
        showThumbs={false}
        emulateTouch={true}
        infiniteLoop={true}
        showStatus={false}
      >
        <div>
          <img alt="" src="https://via.placeholder.com/150" />
        </div>
        <div>
          <img alt="" src="https://via.placeholder.com/350x600" />
        </div>
        <div>
          <img alt="" src="https://via.placeholder.com/1200x900" />
        </div>
        <div>
          <img alt="" src="https://via.placeholder.com/835x1000" />
        </div>
        <div>
          <img alt="" src="https://via.placeholder.com/1600x600" />
        </div>
      </Carousel>
    </div>
  );
}
