import React from 'react';

const Footer = () => {
  return (
    <div>
      {' '}
      <footer className="footer bg-gray-200 p-5">
        <p className="text-gray-400 text-center">
          © {new Date().getFullYear()} João Pedro - Portfólio. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
