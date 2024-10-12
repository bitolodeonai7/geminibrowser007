import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-full"
        src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-network-connection-9105-large.mp4"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default VideoBackground;