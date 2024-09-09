import React from "react";
import img from "../assets/definition-developpeur-web-comtogether.webp";
import { motion } from "framer-motion";
import cv from '../assets/Mouhcine Messoudi CV.pdf'

function About() {
  return (
    <div className="mx-auto w-[90%] md:w-[80%] mt-20 grid gap-4 grid-cols-1 md:grid-cols-3 items-center">
      <div className="w-full space-y-3 col-span-2 flex flex-col justify-center h-auto">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-light"
        >
          Messoudi Mouhcine
        </motion.h1>
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="text-white text-2xl md:text-3xl lg:text-4xl"
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          initial={{ x: -100, opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-base md:text-lg lg:text-xl"
        >
          Je m’appelle Messoudi Mouhcine, et je suis un développeur full stack
          passionné. J’ai une solide maîtrise des technologies front-end comme
          HTML, CSS, JavaScript, React js, et Tailwind CSS, ainsi que des
          technologies back-end comme Laravel, PHP, MySQL, Python, et MongoDB.
          En plus, je possède des compétences en outils bureautiques tels que
          Word, Excel, et bien d’autres. Mon objectif est de mettre à profit mon
          expertise pour créer des solutions innovantes qui favorisent la
          croissance des entreprises et offrent une expérience utilisateur
          exceptionnelle . <a className=" cursor-pointer text-cyan-500" href={cv} target="_blank">
        Voir mon CV
      </a>
        </motion.p>
      </div>
      <div className="w-full flex justify-center items-center col-span-1">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          src={img}
          className="w-full max-w-[400px] rounded-md mb-12"
        />
      </div>
    </div>
  );
}

export default About;