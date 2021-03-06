import React, { useState, useRef } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

const Song = ({ currentSong, isPlaying, setIsPlaying, audioRef }) => {
  const imgRef = useRef(null);
  const link = currentSong.audio;
  const [show, setShow] = useState(false);

  const showLinkHandler = (currentSong) => {
    return (
      <Tooltip id="button-tooltip" {...currentSong}>
        <p style={{ color: "#6495ED", fontSize: 7 }}>{link}</p>
      </Tooltip>
    );
  };

  const clickPlayHandler = (currentSong) => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="song-container">
      <OverlayTrigger
        placement="bottom"
        delay={{ show: 250, hide: 400 }}
        overlay={showLinkHandler}
        target={imgRef}
        show={show}
      >
        <img
          alt={currentSong.name}
          src={currentSong.cover}
          ref={imgRef}
          onClick={clickPlayHandler}
        ></img>
      </OverlayTrigger>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
