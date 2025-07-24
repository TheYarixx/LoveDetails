import React from 'react';

const DetailPreviewCard = ({
  message = '¡Hola!',
  emoji = '😊',
  customText = 'Un detalle para ti.',
  imageUrl = '',
  background = 'bg-gradient-to-br from-blue-100 to-green-100',
  backgroundImageUrl = '',
  frame = '',
  sticker = ''
}) => {
  const backgroundStyle = backgroundImageUrl
    ? { backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }
    : {};

  return (
    <div
      className={`relative w-full max-w-sm mx-auto rounded-2xl shadow-xl p-6 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 ${backgroundImageUrl ? '' : background}`}
      style={backgroundStyle}
    >
      {frame && (
        <div className="absolute inset-0 border-8 rounded-2xl" style={{ borderColor: frame }}></div>
      )}
      <div className="text-center mb-4">
        <p className="text-gray-800 text-lg font-semibold transition-all duration-300 ease-in-out">{message}</p>
        <span className="text-5xl block mt-2 transition-all duration-300 ease-in-out transform hover:scale-110">{emoji}</span>
      </div>
      {imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden shadow-md">
          <img src={imageUrl} alt="Imagen personalizada" className="w-full h-48 object-cover" />
        </div>
      )}
      <p className="text-gray-600 text-center text-md italic transition-all duration-300 ease-in-out">{customText}</p>
      {sticker && (
        <span className="absolute bottom-2 right-2 text-4xl transition-all duration-300 ease-in-out transform hover:rotate-12">{sticker}</span>
      )}
    </div>
  );
};

export default DetailPreviewCard;