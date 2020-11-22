import React from "react";
import Video from "./Video";

const More = ({ currentSong, showMoreStatus }) => {
  return (
    <div className={`more ${showMoreStatus ? "active-more" : "hide-more"}`}>
      <h1>{currentSong.name}</h1>
      <h4>{currentSong.artist}</h4>
      <h2>Album</h2>
      <h3>{currentSong.album}</h3>
      <h2>Genre</h2>
      <h3>{currentSong.genre}</h3>
      <h2>Band info</h2>
      <h3>{currentSong.about}</h3>
      <h2>Song info</h2>
      <h3>{currentSong.song_desc}</h3>
      <h2>Full song</h2>
      <Video url={currentSong.link} showMoreStatus={showMoreStatus} />
    </div>
  );
};

export default More;
