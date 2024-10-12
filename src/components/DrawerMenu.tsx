import React from 'react';
import { X } from 'lucide-react';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 bg-opacity-90 backdrop-blur-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-white mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Profile
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DrawerMenu;