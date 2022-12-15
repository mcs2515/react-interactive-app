import { useState } from "react";
import AmbientMusic from "./AmbientMusic";
import ImageCarousel from "./Carousel";
import Lightbox from "./Lightbox";
import "./css/App.css";

function App() {
  const [showCarousel, setShowCarousel] = useState(false);

  const carouselClickHandler = (e) => {
    e.preventDefault();
    setShowCarousel(!showCarousel);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>React Interactive App</p>
      </header>

      <AmbientMusic />
      <button onClick={carouselClickHandler}>Toggle Carousel</button>
      <div className="App-Content">
        <Lightbox showCarousel={showCarousel} setShowCarousel={setShowCarousel} />
        {showCarousel ? <ImageCarousel /> : null}
      </div>
    </div>
  );
}

export default App;
