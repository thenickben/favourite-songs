import React from "react";
import ReactPlayer from "react-player/lazy";

const Video = ({ url, showMoreStatus }) => {
  return (
    <div className="video">
      <ReactPlayer url={url} />
    </div>
  );
};
export default Video;
