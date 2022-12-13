import { useState } from "react";
import ImageCarousel from "./Carousel";
import "./css/App.css";

function App() {
  const [showCarousel, setShowCarousel] = useState(false);
  const carouselClickHandler = () => setShowCarousel(!showCarousel);

  return (
    <div className="App">
      <header className="App-header">
        <p>React Interactive App</p>
      </header>
      <button onClick={carouselClickHandler}>Toggle Carousel</button>
      <div className="App-Content">{showCarousel ? <ImageCarousel /> : null}</div>
    </div>
  );
}

export default App;
