import React, { useState, useRef } from 'react';
import DetailHeader from './components/DetailHeader';
import DetailSelector from './components/DetailSelector';
import DetailInput from './components/DetailInput';
import DetailImageUpload from './components/DetailImageUpload';
import DetailPreviewCard from './components/DetailPreviewCard';
import EmojiModal from './components/EmojiModal';
import { defaultTemplates } from './mock/templates';

const App = () => {
  const [selectedMessage, setSelectedMessage] = useState('¡Eres increíble!');
  const [customMessage, setCustomMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('😊');
  const [customText, setCustomText] = useState('Con mucho cariño para ti.');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [selectedBackground, setSelectedBackground] = useState('bg-gradient-to-br from-blue-100 to-green-100');
  const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
  const [selectedFrame, setSelectedFrame] = useState('');
  const [selectedSticker, setSelectedSticker] = useState('');
  const [isEmojiModalOpen, setIsEmojiModalOpen] = useState(false);
  const previewCardRef = useRef(null);

  const messageOptions = [
    { label: '¡Eres increíble!', value: '¡Eres increíble!' },
    { label: 'Te quiero mucho.', value: 'Te quiero mucho.' },
    { label: 'Gracias por todo.', value: 'Gracias por todo.' },
    { label: 'Siempre en mi corazón.', value: 'Siempre en mi corazón.' },
    { label: 'Personalizado', value: 'custom' },
  ];

  const allEmojis = [
    '😊', '😂', '😍', '🥰', '🤩', '🥳', '😎', '🤗', '👍', '👏', '💖', '❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍',
    '🌟', '✨', '💫', '💯', '🎉', '🎊', '🎂', '🎁', '🎈', '🌸', '🌼', '🌻', '🌹', '🌷', '🍀', '🌈', '🚀', '💡', '👑', '🏆',
    '👨‍👩‍👧‍👦', '👨‍👧‍👦', '👩‍👧‍👦', '🐶', '🐱', '🐻', '🐼', '🦊', '🦁', '🐯', '🐨', '🐷', '🐸', '🐢', '🐠', '🦋', '🐞', '🐝', '🌳', '🌲',
    '☀️', '🌙', '⭐', '☁️', '☔', '❄️', '🔥', '💧', '🌊', '🌍', '🌎', '🌏', '🍎', '🍓', '🍒', '🍇', '🍉', '🍊', '🍋', '🍍',
    '🍕', '🍔', '🍟', '🍦', '🍩', '🍪', '🍫', '☕', '🍵', '🍺', '🍷', '🍸', '🍹', '🥂', '🍿', '🌮', '🍣', '🍜', '🍝', '🍞',
  ];

  const backgroundOptions = [
    { label: 'Azul y Verde Suave', value: 'bg-gradient-to-br from-blue-100 to-green-100' },
    { label: 'Amarillo Cálido', value: 'bg-yellow-100' },
    { label: 'Rosa Pastel', value: 'bg-pink-100' },
    { label: 'Gris Elegante', value: 'bg-gray-200' },
    { label: 'Imagen Personalizada', value: 'custom_image' },
  ];

  const frameOptions = [
    { label: 'Ninguno', value: '' },
    { label: 'Dorado', value: '#FFD700' },
    { label: 'Plateado', value: '#C0C0C0' },
    { label: 'Rojo Festivo', value: '#FF0000' },
    { label: 'Azul Marino', value: '#000080' },
  ];

  const stickerOptions = [
    { label: 'Ninguno', value: '' },
    { label: '⭐ Estrella', value: '⭐' },
    { label: '❤️ Corazón', value: '❤️' },
    { label: '🎈 Globo', value: '🎈' },
    { label: '🎁 Regalo', value: '🎁' },
    { label: '🥳 Fiesta', value: '🥳' },
    { label: '✨ Brillo', value: '✨' },
  ];

  const templateOptions = defaultTemplates.map(template => ({
    label: template.name,
    value: template.name
  }));

  const handleImageChange = (file) => {
    setSelectedImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl('');
    }
  };

  const handleBackgroundImageChange = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImageUrl(reader.result);
        setSelectedBackground('custom_image');
      };
      reader.readAsDataURL(file);
    } else {
      setBackgroundImageUrl('');
    }
  };

  const handleTemplateChange = (templateName) => {
    const template = defaultTemplates.find(t => t.name === templateName);
    if (template) {
      setSelectedMessage(template.message);
      setCustomMessage('');
      setSelectedEmoji(template.emoji);
      setCustomText(template.customText);
      setSelectedBackground(template.background);
      setBackgroundImageUrl('');
      setSelectedFrame(template.frame);
      setSelectedSticker(template.sticker);
    }
  };

  const handleDownloadDetail = () => {
    if (previewCardRef.current) {
      alert('Simulando descarga: En una aplicación real, aquí se generaría y descargaría la imagen del detalle.');
    } else {
      alert('No se pudo encontrar el detalle para descargar.');
    }
  };

  const handleShareWhatsApp = () => {
    if (previewCardRef.current) {
      const messageToShare = selectedMessage === 'custom' ? customMessage : selectedMessage;
      const text = `¡Mira este detalle cariñoso que creé para ti!\n\n"${messageToShare}"\n${selectedEmoji}\n${customText}`;
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
      alert('Simulando compartir: Compartiendo el texto del detalle por WhatsApp. La imagen no se puede compartir directamente sin una librería externa o un backend.');
    } else {
      alert('No se pudo encontrar el detalle para compartir.');
    }
  };

  const currentMessage = selectedMessage === 'custom' ? customMessage : selectedMessage;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <DetailHeader />
      <main className="flex flex-col lg:flex-row w-full max-w-6xl p-4 gap-8">
        <section className="flex-1 bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Personaliza tu Detalle</h2>
          <DetailSelector
            label="Elige una plantilla especial"
            options={[{ label: 'Ninguna', value: '' }, ...templateOptions]}
            onSelect={handleTemplateChange}
            value={''}
          />
          <DetailSelector
            label="Selecciona un mensaje bonito"
            options={messageOptions}
            onSelect={setSelectedMessage}
            value={selectedMessage}
          />
          {selectedMessage === 'custom' && (
            <DetailInput
              label="Escribe tu mensaje personalizado"
              placeholder="Tu mensaje especial aquí..."
              value={customMessage}
              onChange={setCustomMessage}
            />
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-2">Elige un emoji o ícono</label>
            <button
              onClick={() => setIsEmojiModalOpen(true)}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800 text-left flex items-center justify-between"
            >
              <span>{selectedEmoji}</span>
              <span className="text-gray-500">▼</span>
            </button>
          </div>
          <DetailInput
            label="Agrega texto personalizado"
            placeholder="Escribe algo especial..."
            value={customText}
            onChange={setCustomText}
          />
          <DetailImageUpload
            label="Sube o elige una imagen para el detalle"
            onImageChange={handleImageChange}
            previewUrl={imageUrl}
          />
          <DetailSelector
            label="Elige un fondo personalizado"
            options={backgroundOptions}
            onSelect={setSelectedBackground}
            value={selectedBackground}
          />
          {selectedBackground === 'custom_image' && (
            <DetailImageUpload
              label="Sube una imagen para el fondo"
              onImageChange={handleBackgroundImageChange}
              previewUrl={backgroundImageUrl}
            />
          )}
          <DetailSelector
            label="Elige un marco"
            options={frameOptions}
            onSelect={setSelectedFrame}
            value={selectedFrame}
          />
          <DetailSelector
            label="Elige un sticker"
            options={stickerOptions}
            onSelect={setSelectedSticker}
            value={selectedSticker}
          />
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleDownloadDetail}
              className="flex-1 bg-purple-600 text-white py-3 rounded-xl shadow-lg hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300 font-semibold"
            >
              Descargar Detalle
            </button>
            <button
              onClick={handleShareWhatsApp}
              className="flex-1 bg-green-500 text-white py-3 rounded-xl shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-green-300 font-semibold"
            >
              Compartir por WhatsApp
            </button>
          </div>
        </section>

        <section className="flex-1 flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Vista Previa</h2>
          <div ref={previewCardRef}>
            <DetailPreviewCard
              message={currentMessage}
              emoji={selectedEmoji}
              customText={customText}
              imageUrl={imageUrl}
              background={selectedBackground}
              backgroundImageUrl={backgroundImageUrl}
              frame={selectedFrame}
              sticker={selectedSticker}
            />
          </div>
        </section>
      </main>
      <EmojiModal
        isOpen={isEmojiModalOpen}
        onClose={() => setIsEmojiModalOpen(false)}
        onSelectEmoji={setSelectedEmoji}
        emojis={allEmojis}
      />
    </div>
  );
};

export default App;