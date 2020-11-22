import React from "react";
import { Button } from "react-bootstrap";

const VideoButton = () => {
  return (
    <Button
      style={{
        color: "white",
        fontSize: 12,
        fontWeight: 500,
        margin: "10%",
        boxShadow: "5px 5px 3px rgba(46, 46, 46, 0.62)",
      }}
      variant="dark"
    >
      Play song
    </Button>
  );
};

export default VideoButton;
