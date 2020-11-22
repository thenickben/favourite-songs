import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";

import Library from "./components/Library";
import Nav from "./components/Nav";
import MoreButton from "./components/MoreButton";
import More from "./components/More";
import "./styles/app.scss";
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [showMoreStatus, setShowMoreStatus] = useState(false);
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  const hideLibraryHandler = () => {
    if (libraryStatus) {
      setLibraryStatus(!libraryStatus);
    }
  };

  const hideMoreHandler = () => {
    if (showMoreStatus) {
      setShowMoreStatus(!showMoreStatus);
    }
  };

  const hideAllHandler = () => {
    hideLibraryHandler();
    hideMoreHandler();
  };

  return (
    <div>
      <div className="App" onClick={hideAllHandler}>
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <Song
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
        />
        <Player
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          currentSong={currentSong}
          audioRef={audioRef}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          songs={songs}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
        />
      </div>
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
      <MoreButton
        showMoreStatus={showMoreStatus}
        setShowMoreStatus={setShowMoreStatus}
      />
      <More currentSong={currentSong} showMoreStatus={showMoreStatus} />
    </div>
  );
}

export default App;
