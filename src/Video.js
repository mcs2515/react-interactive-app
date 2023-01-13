import "./css/Video.css";

export default function Video() {
  return (
    <div id="videoContainer">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/lAIGb1lfpBw"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
