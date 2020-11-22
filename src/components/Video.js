import React from "react";
import ReactPlayer from "react-player/lazy";

const Video = ({ url, showMoreStatus }) => {
  return (
    <div>
      <ReactPlayer url={url} />
    </div>
  );
};
export default Video;
