import React from "react";

const Videos = ({ videos = [] }) => {
  if (videos.length <= 0) {
    return <h1>No videos found!</h1>;
  }

  return (
    <div>
      {videos.map((video, i) => (
        <h3 key={i}>{video}</h3>
      ))}
    </div>
  );
};

export default Videos;
