import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic } from "@fortawesome/free-solid-svg-icons";
//<FontAwesomeIcon icon={faMagic} />
const MoreButton = ({ showMoreStatus, setShowMoreStatus }) => {
  return (
    <div className="more-button">
      <button onClick={() => setShowMoreStatus(!showMoreStatus)}>
        Show me More
      </button>
    </div>
  );
};

export default MoreButton;
