import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    iconName: "sun",
    message: "It's Summer!"
  },
  winter: {
    iconName: "snowflake",
    message: "It's Winter!"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { message, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive icon ${iconName}`} />
      <h1>{message}</h1>
      <i className={`icon-right massive icon ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
