import React from "react";

function Hero() {
  return (
    <>
      <h1 className="text-center text-4xl font-bold mt-24 mb-8 text-white ">
        Experience
      </h1>
      <div className="mx-auto w-[70%] grid grid-cols-1 md:grid-cols-3 ">
        <div className="col-span-1 h-full md:h-[50%] text-white bg-indigo-900 w-full md:w-[70%] mb-10 md:mb-0 rounded-md p-5">
          <p>2024</p>
          <p>2 mois</p>
        </div>
        <div className="col-span-2 flex flex-col gap-4 text-white w-full p-4 md:p-8">
          <p className="text-2xl text-slate-300">Full Stack Web Developpeur</p>
          <p className="w-full">
            J’ai dirigé le développement et la maintenance d’un site web de
            livres en utilisant React.js, Laravel, MySQL, et Tailwind CSS. J’ai
            implémenté des API RESTful et intégré des bases de données MySQL.
            J’ai collaboré avec les parties prenantes pour définir les exigences
            du projet et les délais.
          </p>
          <p className="flex gap-3">
            <span className="bg-purple-900 font-bold text-slate-300 rounded p-2 text-center">
              Reactjs
            </span>
            <span className="bg-purple-900 font-bold text-slate-300 rounded p-2 text-center">
              Laravel
            </span>
            <span className="bg-purple-900 font-bold text-slate-300 rounded p-2 text-center">
              tailwindcss
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
