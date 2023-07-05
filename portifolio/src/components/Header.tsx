import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <a href="#" className="text-white text-lg font-semibold" id="logo">
          João Pedro
        </a>
        <div className="space-x-4">
          <a href="#formacao" className="text-gray-300 hover:text-white">
            Formação
          </a>
          <a href="#contato" className="text-gray-300 hover:text-white">
            Contato
          </a>
          <a href="#projetos" className="text-gray-300 hover:text-white">
            Projetos
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
