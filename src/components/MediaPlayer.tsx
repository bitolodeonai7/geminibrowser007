import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';

const MediaPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-300 transition-colors">
            <SkipBack size={24} />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="hover:text-gray-300 transition-colors"
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <SkipForward size={24} />
          </button>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Now Playing</p>
          <p className="text-gray-400">Artist - Song Title</p>
        </div>
      </div>
      <div className="mt-2">
        <div className="bg-gray-700 h-1 rounded-full">
          <div className="bg-blue-500 h-1 w-1/3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;