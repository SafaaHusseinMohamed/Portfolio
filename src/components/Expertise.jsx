import { useState } from "react";
import "../App.css";

function Expertise() {
  const skills = [
    { name: "HTML5", percent: "95%", ringClass: "ring-95" },
    { name: "CSS3", percent: "90%", ringClass: "ring-90" },
    { name: "JavaScript", percent: "85%", ringClass: "ring-85-js" },
    { name: "React.js", percent: "85%", ringClass: "ring-88" },
    { name: "Redux", percent: "85%", ringClass: "ring-85-redux" },
    { name: "Tailwind CSS", percent: "90%", ringClass: "ring-90-tailwind" },
  ];

  const [page, setPage] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    if ((page + 1) * itemsPerPage < skills.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const visibleSkills = skills.slice(
    page * itemsPerPage,
    (page + 1) * itemsPerPage,
  );

  return (
    <div id="Expertise" className="expertise-section h-[700px] lg:h-[600px] ">
      <h2 className="capitalize bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 text-[15px] mt-8 text-center bg-clip-text text-transparent">
          Technical Expertise
      </h2>
      <h1 className="uppercase font-bold text-[30px] text-center py-2 text-white">
      front-end skills
      </h1>
      <div className="h-[4px] w-[100px] bg-gradient-to-r from-purple-700 to-blue-600 m-auto"></div>
      <p className="max-w-[450px] m-auto mt-4 text-center text-gray-400/80 px-4">
        Real-world applications built with modern technologies and best
        practices.
      </p>

      <div className="relative max-w-5xl mx-auto mt-12 px-12 flex items-center justify-center">
        {/* سهم اليسار */}
        <button
          onClick={handlePrev}
          disabled={page === 0}
          className={`absolute left-0 z-10 p-3 bg-gray-800/80 border-2 hover:border-purple-400  text-white  rounded-full  border-gray-700  transition-all  ${
            page === 0
              ? "opacity-30 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
        >
          &#10094;
        </button>

        {/* عرض العناصر المقتطعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center w-full min-h-[180px] items-center">
          {visibleSkills.map((skill, index) => (
            <div
              key={`${page}-${index}`}
              className="flex flex-col items-center"
            >
              <div className="expertise-wrap">
                <div className={`expertise-ring ${skill.ringClass}`}>
                  <div className="expertise-inner">
                    <span className="expertise-percent">{skill.percent}</span>
                  </div>
                </div>
              </div>
              <h2 className="mt-4 text-white font-semibold capitalize">
                {skill.name}
              </h2>
            </div>
          ))}
        </div>

        {/* سهم اليمين */}
        <button
          onClick={handleNext}
          disabled={(page + 1) * itemsPerPage >= skills.length}
          className={`absolute right-0 z-10 p-3  bg-gray-800/80 border-2 hover:border-purple-400  text-white  rounded-full  border-gray-700  transition-all ${
            (page + 1) * itemsPerPage >= skills.length
              ? "opacity-30 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Expertise;
