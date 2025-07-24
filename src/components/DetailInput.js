import React from 'react';

const DetailInput = ({ label = 'Texto', type = 'text', placeholder = '', value = '', onChange = () => {} }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800"
      />
    </div>
  );
};

export default DetailInput;