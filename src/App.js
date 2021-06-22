import logo from "./logo.svg";
import YouTube from "react-youtube";
import "./App.css";

const VideoWidget = ({ videoId, videoAutoplay = false }) => {
  const opts = {
    playerVars: {
      autoplay: 1,
      muted: 1,
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <VideoWidget videoId="vkPxNwV3izw" videoAutoplay="true"></VideoWidget>
    </div>
  );
}

export default App;
