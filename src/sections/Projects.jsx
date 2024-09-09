import React from "react";
import bookimg from "../assets/Books-mala_2.avif";
import affimg from "../assets/Affiliate-Marketing-101.png.webp";

function Projects() {
  return (
    <>
    <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-light text-center mt-20">Projects</h1>
       <div className="mx-auto w-full  md:w-[70%] h-auto mt-9 grid gap-11 grid-cols-1 md:grid-cols-3 items-center">
       <div className=" col-span-1 ms-10 md:ms-0">
          <img
            src={bookimg}
            alt=""
            className="rounded-lg overflow-hidden w-full"
          />
        </div>
        <div className=" col-span-2 flex flex-col gap-2 ml-11">
          <h1 className="text-white  text-3xl">Book Store</h1>
          <p className="text-white w-[90%] md:w-4/5">
            Un site web dédié aux livres où vous pouvez facilement acheter, lire
            en ligne, ou télécharger une grande variété de titres. Que vous
            soyez à la recherche des dernières nouveautés ou de classiques
            intemporels, notre plateforme vous permet de découvrir et d’accéder
            aux livres qui vous passionnent, le tout depuis un seul endroit.
            Profitez d’une expérience de lecture flexible et adaptée à vos
            besoins, avec des options pour chaque type de lecteur.
          </p>
          <p className="flex gap-3">
            <span className="bg-purple-900  font-bold text-slate-300 rounded p-2 text-center pt-2">
              Reactjs
            </span>
            <span className="bg-purple-900  font-bold text-slate-300 rounded p-1 text-center pt-2">
              Laravel
            </span>
            <span className="bg-purple-900  font-bold text-slate-300 rounded p-1 text-center pt-2">
              tailwindcss
            </span>
          </p>
        </div>
      </div>
      <div className="mx-auto w-full  md:w-[70%] h-auto mt-20 grid gap-11 grid-cols-1 md:grid-cols-3 items-center">
        <div className=" col-span-1 ms-10 md:ms-0">
          <img
            src={affimg}
            alt=""
            className="rounded-lg  w-full "
          />
        </div>
        <div className=" col-span-2 flex flex-col gap-2 ml-11">
          <h1 className="text-white  text-3xl">Affiliate website</h1>
          <p className="text-white  w-[90%] md:w-4/5">
            Un site web affilié qui vous permet de découvrir et d’accéder aux
            meilleures offres et produits de nos partenaires. Que vous cherchiez
            des recommandations, des promotions exclusives ou des comparatifs de
            produits, notre plateforme vous guide vers les meilleures options
            pour faire vos achats en toute confiance. Profitez d’une expérience
            utilisateur simplifiée et de conseils avisés pour tirer le meilleur
            parti de vos achats en ligne grâce à notre réseau d’affiliés.
          </p>
          <p className="flex gap-3">
            <span className="bg-purple-900  font-bold text-slate-300 rounded p-1 text-center pt-2">
              Laravel
            </span>
            <span className="bg-purple-900  font-bold text-slate-300 rounded p-1 text-center pt-2">
              tailwindcss
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
