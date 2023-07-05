import React from 'react';

const Card = (props: any) => {
  return (
    <div className="max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-auto my-4">
      <img src={props.imgSrc} className="w-full h-40 object-cover" />
      <div className="p-4 p-4 flex-col justify-end items-end flex-grow h-full">
        <div className="flex-col justify-end items-end">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            {props.title}
          </h4>
          <p className="text-gray-600 text-sm my-2">{props.text}</p>
          <ul className="list-disc list-inside">
            Tecnologias utilizadas
            {props.tecnologias.map((t: string) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="flex-col justify-end items-end">
          <a
            href={props.link}
            target="blank"
            className="block mt-2 text-blue-500 font-semibold hover:text-blue-600"
          >
            Ver mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
