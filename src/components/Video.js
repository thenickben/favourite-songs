import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import VideoButton from "./VideoButton";

const Video = () => {
  // *** Hooks ***
  const [video, setVideo] = useState({
    url: null,
  });

  const [show, setShow] = useState(false);

  // *** Event Handlers ***
  const showHandler = () => {
    setShow(!show);
  };

  const getUrlHandler = (e) => {
    e.preventDefault();
    setVideo({ url: e.target.value });
  };

  // *** main ***
  if (show) {
    return (
      <div className="video">
        <h1>YouTube music player</h1>
        <input type="text" name="url" onChange={getUrlHandler} />
        <p onClick={showHandler}>
          <VideoButton />
        </p>
        <p style={{ visibility: "hidden" }}>
          <ReactPlayer
            width="1px"
            height="1px"
            playing="true"
            url={video.url}
          />
        </p>
      </div>
    );
  } else {
    return (
      <div className="video">
        <h1>YouTube music player</h1>
        <input type="text" name="url" onChange={getUrlHandler} />
        <p onClick={showHandler}>
          <VideoButton />
        </p>
      </div>
    );
  }
};

export default Video;
