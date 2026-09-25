import"../App.css"

function Tools() {
  const skillCategories = [
    {
      id: 1,
      category: "Languages & Frameworks",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "React Router",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
      id: 2,
      category: "Styling & UI",
      skills: ["Tailwind CSS", "Flexbox", "CSS Grid", "Responsive Design"],
    },
    {
      id: 3,
      category: "Developer Tools & Workflow",
      skills: ["Git", "GitHub", "VS Code", "Vite", "Canva"],
    },
  ];
  function Drawskills({ skill }) {
    return (
      <div key={skill.id} id="afterr" className="group relative   border-gray-700 border hover:shadow[0_20px_60px_rgba(34,211,238,.12)] hover:border-purple-500/40 rounded-3xl  p-4 mb-4  hover:shadow-[0_0_20px_rgba(168,85,247,0.35),0_0_10px_rgba(34,211,238,0.25)] hover:-translate-y-2 transition-all duration-500 ">
        <div className="flex justify-between">
          <h2 className="">{skill.category}</h2>
          <p className="text-gray-300 group-hover:drop-shadow-[0_0_8px_rgb(712,211,238)]">0{skill.id}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {skill.skills.map((skill, id) => (
            <span key={id} className=" hover:-translate-y-1 hover:text-white rounded-full border border-white/[.07] bg-white/[.02] px-3.5 py-2 text-xs text-slate-400 transition-all duration-300 ">{skill}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className=" max-w-7xl m-12 lg:m-auto mt-24 ">
        <div className="tools-parent">
      <h2 className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent font-serif text-[20px]">
        My Toolbox
      </h2>
      <div className="bg-gray-400 h-[1px] w-20 mb-4"></div>
      <h2 className="capitalize text-[40px] font-bold">
        Skills & Technologies
      </h2>
      <p className="text-gray-500 mb-12 hover:text-white transition-colors duration-600">
        The modern technologies, frameworks, and tools I use to bring web
        applications to life.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((tech) => (
          <Drawskills skill={tech} />
        ))}
      </div>
      </div>
    </div>
  );
}
export default Tools;
