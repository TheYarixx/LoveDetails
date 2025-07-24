import React from 'react';

const DetailImageUpload = ({ label = 'Sube una imagen', onImageChange = () => {}, previewUrl = '' }) => {
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onImageChange(e.target.files[0]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all duration-200 ease-in-out"
      />
      {previewUrl && (
        <div className="mt-2 p-2 border border-gray-200 rounded-lg bg-gray-50">
          <img src={previewUrl} alt="Previsualización" className="max-w-full h-32 object-cover rounded-md shadow-sm" />
        </div>
      )}
    </div>
  );
};

export default DetailImageUpload;