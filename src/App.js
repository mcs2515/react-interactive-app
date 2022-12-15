import { useState } from "react";
import AmbientMusic from "./AmbientMusic";
import ImageCarousel from "./Carousel";
import Lightbox from "./Lightbox";
import Video from "./Video";
import "./css/App.css";

function App() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const carouselClickHandler = (e) => {
    e.preventDefault();
    setShowCarousel(!showCarousel);
  };

  const videoClickHandler = (e) => {
    e.preventDefault();
    setShowVideo(!showVideo);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>React Interactive App</p>
      </header>

      <AmbientMusic />
      <button onClick={carouselClickHandler}>Toggle Carousel</button>
      <button onClick={videoClickHandler}>Toggle Video</button>
      <div className="App-Content">
        <Lightbox showCarousel={showCarousel} setShowCarousel={setShowCarousel} />
        {showCarousel ? <ImageCarousel /> : null}
        {showVideo ? <Video /> : null}
      </div>
    </div>
  );
}

export default App;
