import React from 'react';

const DetailSelector = ({ label = 'Selecciona', options = [], onSelect = () => {}, value = '' }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-medium mb-2">{label}</label>
      <select
        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ease-in-out text-gray-800"
        onChange={(e) => onSelect(e.target.value)}
        value={value}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default DetailSelector;