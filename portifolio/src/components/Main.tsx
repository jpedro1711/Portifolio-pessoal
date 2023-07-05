import React from 'react';

const Main = () => {
  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center p-4">
      <div className="container mx-auto flex-col justify-between items-center">
        <h1 className="text-4xl text-white">Olá, </h1>
        <p className="text-gray-300 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4">
          Sou João Pedro, estudante de Engenharia de software na Pontífica
          Universidade Católica do Paraná. Atualmente, desenvolvo projetos
          pessoais com o objetivo de aprender novas habilidades e fixar aquelas
          que já foram aprendidas. Meu foco é o desenvolvimento back-end.
        </p>
        <a
          href="#projetos"
          className="mt-2 inline-block bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-900 font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Projetos
        </a>
      </div>
    </div>
  );
};

export default Main;
