import YouTube from "react-youtube";
import "./App.css";

const VideoWidget = ({ videoId, videoAutoplay = 0, videoMute = 0 }) => {
  const opts = {
    playerVars: {
      autoplay: videoAutoplay,
      mute: videoMute,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <VideoWidget
        videoId="vkPxNwV3izw"
        videoAutoplay="0"
        videoMute="0"
      ></VideoWidget>
      <VideoWidget
        videoId="vkPxNwV3izw"
        videoAutoplay="1"
        videoMute="1"
      ></VideoWidget>
    </div>
  );
}

export default App;
