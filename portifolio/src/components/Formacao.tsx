import React from 'react';

const Formacao = () => {
  return (
    <div className="bg-gray-800 py-8 h-screen px-2">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white py-4" id="formacao">
          Formação
        </h2>
        <div>
          <p className="formacao-texto text-lg text-gray-400">
            Atualmente estou cursando Engenharia de software. Além disso, sempre
            busco conhecimento com cursos extensivos on-line.
          </p>

          <div className="w-full md:w-2/3 my-4">
            <ul className="flex flex-wrap gap-6 md:gap-20 mb-5">
              <li className="p-5 rounded flex-1 bg-gray-100">
                <span className="text-blue-500">Bacharel</span>
                <h3 className="faculdade-curso text-2xl">
                  Engenharia de software (2022-2025)
                </h3>
                <span className="faculdade-instituicao text-gray-400">
                  PUCPR
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="formacao-texto text-lg text-gray-400">Idiomas</p>

          <div className="w-full md:w-2/3 my-4">
            <ul className="flex flex-wrap gap-6 md:gap-20 mb-5">
              <li className="p-5 rounded flex-1 bg-gray-100">
                <span className="text-blue-500">Cambridge B2 certificate</span>
                <h3 className="faculdade-curso text-2xl">Inglês</h3>
                <span className="faculdade-instituicao text-gray-400">
                  Avançado
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formacao;
