import { useState } from "react";
import "../App.css";
import fragrance from "../imgs/fragrance.png";
import portfolio from "../imgs/portfolio.png";
import gifts from "../imgs/gifts-store.png";
import educode from "../imgs/tailwindeducode.png";
import ecommerse from "../imgs/e-commerse.png";

function Projects() {
  // قائمة جميع المشاريع
  const Allprojects = [
    {
      id: 1,
      src: fragrance,
      title: "fragrance, perfume-brand",
      desc: "An interactive e-commerce web application for a luxury perfume brand, featuring dynamic shopping cart functionality, item persistence using localStorage, and responsive product showcase",
      link:" https://safaahusseinmohamed.github.io/Fragrance-project-JS/",
      sp1: "html",
      sp2: "css",
      sp3: "javascript",
    },
    {
      id: 2,
      src: portfolio,
      title: "Portfolio Website",
      desc:"A modern, responsive personal portfolio built with React and Tailwind CSS to showcase web development projects, technical skills, and clean UI components",
      link: "https://safaahusseinmohamed.github.io/Portfolio/",
      sp1: "react",
      sp2: "tailwind",
      sp3: "javascript",
    },
    {
      id: 3,
      src: ecommerse,
      title: "E-Commerce Store",
      desc: "A multi-category e-commerce frontend interface featuring dynamic product card layouts, interactive client actions, and seamless CSS animations.",
      link: "https://safaahusseinmohamed.github.io/E-Commerse-app/",
      sp1: "html",
      sp2: "css",
      sp3: "javascript",
    },
    {
      id: 4,
      src: gifts,
      title: "Gifts Store",
      desc: "A clean and elegant frontend web store designed for gift browsing with custom product cards, structured category layouts, and modern UI styling.",
      link: "https://safaahusseinmohamed.github.io/Gifts-app/",
      sp1: "html",
      sp2: "css",
      sp3: "javascript",
    },
    {
      id: 5,
      src: educode,
      title: "Educode Platform",
      desc: "A educational landing platform designed for coding courses, featuring interactive content cards, modern Tailwind layout structure, and responsive design.",
      link: "https://safaahusseinmohamed.github.io/educode-bootcamp-tailwind/",
      sp1: "html",
      sp2: "tailwind",
      sp3: "javascript",
    },
  ];

  // أجزاء المصفوفات للفلترة
  const webapp = [Allprojects[0], Allprojects[2], Allprojects[3], Allprojects[4]];
  const myportfolio = [Allprojects[1]];

  // State للفلترة
  const [displayedProjects, setDisplayedProjects] = useState(Allprojects);
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div id="projects" className="px-4 pb-20">
      {/* العناوين */}
      <h2 className="capitalize bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 text-[15px] mt-12 text-center bg-clip-text text-transparent">
        my work
      </h2>
      <h1 className="uppercase font-bold text-[30px] text-center py-4 text-white">
        featured projects
      </h1>
      <div className="h-[4px] w-[100px] bg-gradient-to-r from-purple-700 to-blue-600 m-auto"></div>
      <p className="max-w-[450px] m-auto mt-4 text-center text-gray-400/80">
        Real-world applications built with modern technologies and best practices.
      </p>

      {/* أزرار الفلترة */}
      <div className="flex justify-center gap-2 items-center mx-auto my-8 border border-gray-700/80 w-fit p-1.5 rounded-full bg-gray-900/60 backdrop-blur-md">
        <button
          className={`px-5 py-2 rounded-full text-sm capitalize transition-all duration-300 ${
            activeTab === "all"
              ? "bg-purple-600 text-white font-semibold shadow-lg shadow-purple-600/30"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => {
            setDisplayedProjects(Allprojects);
            setActiveTab("all");
          }}
        >
          all projects
        </button>

        <button
          className={`px-5 py-2 rounded-full text-sm capitalize transition-all duration-300 ${
            activeTab === "web"
              ? "bg-purple-600 text-white font-semibold shadow-lg shadow-purple-600/30"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => {
            setDisplayedProjects(webapp);
            setActiveTab("web");
          }}
        >
          web projects
        </button>

        <button
          className={`px-5 py-2 rounded-full text-sm capitalize transition-all duration-300 ${
            activeTab === "portfolio"
              ? "bg-purple-600 text-white font-semibold shadow-lg shadow-purple-600/30"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => {
            setDisplayedProjects(myportfolio);
            setActiveTab("portfolio");
          }}
        >
          portfolio
        </button>
      </div>

      {/* شبكة الكروت */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
        {displayedProjects.map((product) => (
          <Drawcarts key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// مكون رسم الكارت
function Drawcarts({ product }) {
  return (
    <div className="bg-[#0b1726] rounded-2xl overflow-hidden border border-gray-800 shadow-xl flex flex-col justify-between transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-900/20">
      
      {/* حاوية الصورة مع احتواء كامل للصورة object-contain */}
      <div id="imgdiv" className="relative group overflow-hidden h-56 bg-gray-950 flex items-center justify-center p-2">
        <img
          src={product.src}
          alt={product.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* شارة حالة المشروع */}
        <div className="absolute top-3 left-3 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs px-2.5 py-1 rounded-full font-medium backdrop-blur-md z-10">
          Completed
        </div>

        {/* زر View Project عند الـ Hover */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
          <a
            href={product.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg"
          >
            View Project
          </a>
        </div>
      </div>

      {/* التفاصيل والوصف */}
      <div id="imgdesc" className="p-5 flex flex-col gap-3">
        <h2 className="text-white font-bold text-lg">{product.title}</h2>
        <p className="text-gray-400 text-sm line-clamp-3">{product.desc}</p>

        {/* التقنيات */}
        <div className="flex gap-2 mt-2 flex-wrap">
          <span className="bg-purple-900/40 text-purple-300 border border-purple-700/40 text-xs px-2.5 py-1 rounded-md uppercase font-medium">
            {product.sp1}
          </span>
          <span className="bg-purple-900/40 text-purple-300 border border-purple-700/40 text-xs px-2.5 py-1 rounded-md uppercase font-medium">
            {product.sp2}
          </span>
          <span className="bg-purple-900/40 text-purple-300 border border-purple-700/40 text-xs px-2.5 py-1 rounded-md uppercase font-medium">
            {product.sp3}
          </span>
        </div>
      </div>

    </div>
  );
}

export default Projects;