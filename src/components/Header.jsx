import { useState } from "react";
import "../App.css"
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full z-50 header-parent p-4 bg-gradient-to-r from-black to-black-300 shadow-blue-950/20 shadow-xl flex  justify-around items-center">
      <h3 className="text-[20px] font-['Arial_Black']">
        <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent font-bold m-1">
          Safaa
        </span>
        Hussein
      </h3>
      <ul className="lg:flex gap-4 capitalize text-gray-300 font-medium  hidden">
        <li className="hover:text-purple-400 cursor-pointer transition-colors">
          <a href="#home">home</a>
        </li>

        <li className="hover:text-purple-400 cursor-pointer transition-colors">
          <a href="#Expertise">skills</a>
        </li>
           <li className="hover:text-purple-400 cursor-pointer transition-colors">
          <a href="#services">services</a>
        </li>
        <li className="hover:text-purple-400 cursor-pointer transition-colors">
          <a href="#projects">projects</a>
        </li>
        <li className="hover:text-purple-400 cursor-pointer transition-colors">
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="lg:flex gap-4 items-center hidden">
        <a
          href="https://www.linkedin.com/in/safaa-hussein-68350333b"
          className="hover:-translate-y-1 trasition-all duration-500 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
        >
          <i className="fa-brands fa-linkedin-in trasition-all duration-500"></i>
        </a>

        <a
          href="https://github.com/SafaaHusseinMohamed"
          className="hover:-translate-y-1 trasition-all duration-500 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
        >
          <i className="fa-brands fa-github trasition-all duration-500"></i>
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=safaahusseinahmed597@gmail.com"
          className="hover:-translate-y-1 trasition-all duration-500 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
        >
          <i className="fa-solid fa-envelope trasition-all duration-500"></i>
        </a>

        <a
          href="https://www.facebook.com/safaa.hussein.168477/"
          className="hover:-translate-y-1 trasition-all duration-500 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
        >
          <i className="fa-brands fa-facebook trasition-all duration-500"></i>
        </a>
        <a href="#contact" className=" transitin-all duration-1000">
          <button className="hover:-translate-y-1 trasition-all duration-500 rounded-2xl w-[135px]  bg-gradient-to-r from-purple-500 to-cyan-500 h-[38px] flex justify-center items-center p-2 hover:from-purple-700 to-cyan-700 ">
            Let's Contact
          </button>
        </a>
      </div>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="w-10 lg:hidden h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
      >
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </a>
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-gray-900 p-6 flex flex-col items-start gap-6 shadow-2xl border-b border-gray-800 ">
          <ul className="capitalize text-gray-400 font-medium flex flex-col items-start gap-4 w-full">
            <li className="hover:text-purple-400 cursor-pointer transition-colors">
              <a href="#home">home</a>
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition-colors">
              <a href="#Expertise">skills</a>
            </li>
                 <li className="hover:text-purple-400 cursor-pointer transition-colors">
              <a href="#services">services</a>
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition-colors">
              <a href="#projects">projects</a>
            </li>
            <li className="hover:text-purple-400 cursor-pointer transition-colors">
              <a href="#contact">contact</a>
            </li>
          </ul>
          <div className="flex gap-4 pt-4 border-t border-gray-800 w-full justify-start">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
            >
              <i className="fa-brands fa-discord"></i>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
export default Header;
