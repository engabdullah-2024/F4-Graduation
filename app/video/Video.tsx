"use client"
import React, { useRef } from "react";

const VideoPlayer = ({ src, title }) => {
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) video.play();
    else video.pause();
  };

  const handleSkip = (seconds) => {
    const video = videoRef.current;
    video.currentTime += seconds;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-8 max-w-3xl w-full">
      <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
      <video
        ref={videoRef}
        src={src}
        className="w-full rounded-lg mb-4"
        controls
      />
      <div className="flex justify-center space-x-4">
        <button
          onClick={() => handleSkip(-10)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          ⏪ -10s
        </button>
        <button
          onClick={handlePlayPause}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          ⏯ Play / Pause
        </button>
        <button
          onClick={() => handleSkip(10)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          ⏩ +10s
        </button>
      </div>
    </div>
  );
};

const VideoPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-100 to-purple-100 p-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-purple-800 mb-10 text-center">
        🎥 Graduation Memories - Videos
      </h2>
      <VideoPlayer src="/public/" title="Graduation Celebration Video 1" />
      <VideoPlayer src="../muaalo/video2.mp4" title="Graduation Celebration Video 2" />
    </section>
  );
};

export default VideoPage;
