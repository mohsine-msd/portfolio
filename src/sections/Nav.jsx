import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Nav() {
    return (
    <nav className="flex justify-around  h-16 items-center  ">
        <div className="navbar-logo">
            <h1 className='font-bold uppercase text-[25px] text-indigo-400 '>Messoudi</h1>
        </div>
        <ul className="flex gap-4">
         <li> <a href="https://www.linkedin.com/in/messoudi-mouhcine-5082762b3/" target="_blank"><FaLinkedin  className='text-slate-100' size={25}/></a> </li>
         <li> <a href="https://github.com/mohsine-msd"target="_blank" > <FaGithub className='text-slate-100'  size={25}/></a></li>
        </ul>
    </nav>
    );
  }
  

export default Nav