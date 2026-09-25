function Services() {
  const servicesall = [
    {
      id: 1,
      title: "Modern Web Development",
      icon: "fa-solid fa-code text-purple-400 text-lg",
      desc: "Building interactive, fast, and scalable single-page applications using React.js, Vite, and clean JavaScript (ES6+).",
      skills: [
        "React.js",
        "Vite",
        "JavaScript (ES6+)",
        "Components Architecture",
        
      ],
    },
    {
      id: 2,
      title: "Responsive & Pixel-Perfect Design",
      icon: "fa-solid fa-laptop-code text-purple-400 text-lg",
      desc: "Converting UI/UX designs into fully responsive, mobile-first web pages that look seamless across all screen sizes.",
      skills: ["Tailwind CSS", "Flexbox", "CSS Grid", "Media Queries"],
    },
    {
      id: 3,
      title: "Interactive Logic & Web Storage",
      icon: "fa-solid fa-database text-purple-400 text-lg",
      desc: " Implementing state management, dynamic client-side filtering, e-commerce cart logic, and data persistence using browser local storage.",
      skills: [
        "State Management",
        "localStorage API",
        "DOM Manipulation",
        "E-commerce Logic",
      ],
    },
    {
      id: 4,
      title: "Code Quality & Performance Optimization",
      icon: "fa-solid fa-gears text-purple-400 text-lg",
      desc: "Writing clean, modular, and maintainable code with strict adherence to version control and UI performance best practices.",
      skills: ["Git & GitHub", "Clean Code"],
    },
  ];

  function Drawservices({ service }) {
    return (
      <div key={service.id} className="group relative  rounded-2xl p-6 border border-slate-800 transition-all duration-500 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.35),0_0_10px_rgba(34,211,238,0.25)] hover:-translate-y-2 trasition-all duration-500 p-4 mb-4 border-1 hover:shadow[0_20px_60px_rgba(34,211,238,.12)] border-gray-600  bg-slate-900  rounded-3xl ">
        <div className="flex justify-between pb-4">
            <p className="text-gray-400">0{service.id}</p>
            <a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-700/80 flex items-center justify-center transition-all duration-500 text-[8px] mt-3 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]">
            <i className={`${service.icon} transition-all duration-300  group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]`} />
            </a>
        </div>
        <h2>{service.title}</h2>
        <p className="text-gray-400">{service.desc}</p>
        <div className="h-[1px] w-[330px] bg-gray-700 m-4"></div>
        <div className=" mt-6 flex flex-wrap gap-2.5 " >
          {service.skills.map((skill, index) => (
            <span key={index} className="text-purple-500 hover:-translate-y-1 px-3.5 py-2 trasition-all duration-300 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent border-[1px] border-gray-500  font-mono  rounded-3xl  ">
              {skill+"    "}
            </span>
          ))}
        </div>
        {/* skills ال */}
      </div>
      // الservice
    );
  }

  return (
    <div id="services" className="m-12 ">
      <h2 className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent font-serif text-[20px]">My Services</h2>
      <div className="bg-gray-400 h-[1px] w-20 mb-4"></div>
      <h2 className="capitalize text-[40px] font-bold">what i can help you build</h2>
      <p className="text-gray-500 mb-12 hover:text-white transition-colors duration-600">
        High-quality frontend development solutions tailored to build fast,<br/>
        responsive, and user-friendly web applications.
      </p>
      <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:w-[1400px]">
        {servicesall.map((service) => <Drawservices service={service} />
        )}
      </div>
    </div>
  );
}
export default Services;
