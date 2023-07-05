'use client';

import Footer from '@/components/Footer';
import Formacao from '@/components/Formacao';
import Habilidades from '@/components/Habilidades';
import Header from '@/components/Header';
import Main from '@/components/Main';
import Projetos from '@/components/Projetos';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Formacao />
      <Habilidades />
      <Projetos />

      <section
        className="contato bg-gray-100 p-10"
        id="contato"
        aria-label="Contato"
      >
        <h2 className="subtitulo text-4xl mb-5">Contato</h2>
        <div className="contato-container">
          <p className="contato-texto text-lg text-gray-600 mb-10">
            Sinta-se à vontade para entrar em contato comigo. Estou disponível
            para projetos freelance ou oportunidades de trabalho.
          </p>
          <div className="flex-col">
            <div className="flex">
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-pedro-igeski-morais-4b9405235/"
                className="m-2"
                target="blank"
              >
                <img
                  src="https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png"
                  className="rounded-full  w-8 h-8"
                />
              </a>
              <a
                href="https://github.com/jpedro1711"
                className="m-2"
                target="blank"
              >
                <img
                  src="https://img.icons8.com/?size=512&id=12599&format=png"
                  className="rounded-full  w-8 h-8"
                />
              </a>
              <br />
            </div>
            <a href="mailto:joaopedroigeski@gmail.com" className="m-2">
              joaopedroigeski@gmail.com
            </a>
          </div>
        </div>
      </section>
      <button
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        Voltar ao início
      </button>
      <Footer />
    </div>
  );
}
