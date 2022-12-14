import { useEffect, useRef } from "react";
import "./css/Lightbox.css";

export default function Lightbox(props) {
  const lightBoxRef = useRef();

  const clickHandler = (e) => {
    e.preventDefault();
    if (props.showCarousel) {
      props.setShowCarousel(false);
    }
  };

  useEffect(() => {
    if (props.showCarousel) {
      lightBoxRef.current.style.display = "block";
    } else {
      lightBoxRef.current.style.display = "none";
    }
  }, [props.showCarousel]);

  return (
    <div id="lightboxContainer" ref={lightBoxRef}>
      <div id="lightbox"></div>
      <button id="closeLightbox" onClick={clickHandler}>
        &#x2715;
      </button>
    </div>
  );
}
