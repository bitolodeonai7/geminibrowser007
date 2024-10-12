import React, { useState, useEffect } from 'react';
import { Search, Menu, Sun, Moon } from 'lucide-react';
import VideoBackground from './components/VideoBackground';
import SearchBar from './components/SearchBar';
import DrawerMenu from './components/DrawerMenu';
import MediaPlayer from './components/MediaPlayer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <VideoBackground />
      <div className="relative z-10 p-4">
        <nav className="flex justify-between items-center mb-4">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Menu size={24} />
          </button>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-white hover:text-gray-300 transition-colors"
          >
            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </nav>
        <SearchBar />
        <MediaPlayer />
      </div>
      <DrawerMenu isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
};

export default App;