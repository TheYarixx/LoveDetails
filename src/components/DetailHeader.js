import React from 'react';

const DetailHeader = ({ title = 'Crea un Detalle Cariñoso' }) => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-green-600 p-4 shadow-lg">
      <h1 className="text-2xl font-bold text-white text-center tracking-tight">{title}</h1>
    </header>
  );
};

export default DetailHeader;