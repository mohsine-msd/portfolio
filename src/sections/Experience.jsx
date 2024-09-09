import React from "react";
import img from "../assets/Developer.png";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="mx-auto w-[90%] md:w-[80%] mt-20 grid gap-4 grid-cols-1 md:grid-cols-3 items-center">
      <div className="w-full flex justify-center items-center col-span-1">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          src={img}
          className="w-full max-w-[400px] rounded-md mb-12"
        />
      </div>
      <div className="w-full space-y-3 col-span-2 flex flex-col justify-center h-auto">
        <motion.p
          initial={{ x: 100, opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-base md:text-lg lg:text-xl w-full md:w-[85%] ml-0 md:ml-7"
        >
          Je suis Messoudi Mouhcine, un développeur full stack passionné avec
          une solide maîtrise des technologies front-end comme HTML, CSS,
          Tailwind CSS, Bootstrap, JavaScript, et React.js, ainsi que des
          technologies back-end comme PHP, Laravel, MySQL, MongoDB, et Python.
          Mon parcours en développement web a commencé avec une curiosité
          profonde pour comprendre comment fonctionnent les choses, et cela
          s’est transformé en une carrière où je m’efforce continuellement
          d’apprendre et de m’adapter à de nouveaux défis. J’aime travailler
          dans des environnements collaboratifs et résoudre des problèmes
          complexes pour offrir des solutions de haute qualité. En dehors du
          codage, je reste actif, j’explore de nouvelles technologies et je
          contribue à des projets open-source.
        </motion.p>
      </div>
    </div>
  );
}

export default Experience;
