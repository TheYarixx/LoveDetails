import React from 'react';

const EmojiModal = ({ isOpen = true, onClose = () => {}, onSelectEmoji = () => {}, emojis = [] }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-md relative">
        <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Elige un Emoji</h3>
        <div className="grid grid-cols-6 gap-2 max-h-60 overflow-y-auto p-2 border border-gray-200 rounded-md">
          {emojis.map((emoji, index) => (
            <button
              key={index}
              onClick={() => { onSelectEmoji(emoji); onClose(); }}
              className="p-2 text-3xl hover:bg-gray-100 rounded-md transition-colors duration-200 flex justify-center items-center"
            >
              {emoji}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default EmojiModal;