import { useEffect, useRef, useState } from "react";

export default function AmbientMusic() {
  const audioRef = useRef();
  const link = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3";

  const [playAmbientMusic, setPlayAmbientMusic] = useState(false);

  const toggleAmbientMusic = (e) => {
    e.preventDefault();
    setPlayAmbientMusic(!playAmbientMusic);
  };

  useEffect(() => {
    if (playAmbientMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playAmbientMusic]);

  return (
    <>
      <button id="muteAudio" onClick={toggleAmbientMusic}>
        Toggle Ambient Music
      </button>
      <audio ref={audioRef} src={link} loop>
        Your browser does not support the audio tag.
      </audio>
    </>
  );
}
