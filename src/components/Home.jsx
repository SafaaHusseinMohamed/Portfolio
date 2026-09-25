// import "../App.css";
import Writer from "./hooks";
import carbonimg from "../imgs/carbon.png";
function Home() {
  const currentText = Writer([
    "Front-End Developer",
    "React Engineer",
    "Full-Stack Developer",
  ]);
  return (
    <div
      id="home"
      className=" pt-24 gap-12 pl-12  lg:flex-row flex-col flex lg:justify-around"
    >
      <div
        id="home-desc"
        className="lg:w-[700px] text-center lg:flex lg:flex-col lg:items-start  lg:mt-4 "
      >
        <div className="hover:-translate-y-2 trasition-all duration-500 flex gap-2 w-[250px] rounded-full  bg-blue-800/30  lg:ml-1 md:ml-55">
          <i className="fa-solid fa-circle text-[6px] text-blue-600/100 pt-3 ml-3"></i>
          <p className="capitalize  h-[30px] text-center   ml-2  ">
            available for opportunities
          </p>
        </div>
        <div>
          <h1 className="capitalize m-auto  text-[60px] font-bold mt-6">
            hi, i'm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent ">
              safaa
            </span>{" "}
            <br></br> <span className="mr-33"> hussein </span>
            <div className="text-[40px] font-bold bg-gradient-to-r from-purple-700 via-purple-600 to-cyan-300 bg-clip-text text-transparent mt-2 flex items-center justify-center lg:justify-start">
              <span>{currentText}</span>
              <span className="inline-block w-1 h-8  bg-purple-500 t ml-1 animate-pulse"></span>
            </div>
          </h1>
        </div>
        <p className="lg:w-[550px] w-[350px] text-gray-500  mt-4  m-auto lg:ml-[-10px]">
          {" "}
          Crafting
          <span className="text-white">
            {" "}
            beautiful, responsive web applications{" "}
          </span>{" "}
          with modern front-end technologies. Passionate about clean code,
          elegant UI, and delightful user experiences.
        </p>
        <div className="md:flex-row lg:gap-2 pl-4  lg:mt-6  lg:mb-20 flex  flex-col gap-4 justify-center mt-12">
          <button className="hover:-translate-y-2 trasition-all duration-500 w-[380px] md:w-[180px]   lg:ml-[-20px] bg-blue-600/100 hover:bg-blue-800/100  h-[45px] font-sans capitalize rounded-2xl lg:mt-6">
            <a href="#projects">veiw my projects</a>
          </button>
          <button className="hover:-translate-y-2 trasition-all duration-500 w-[380px] md:w-[170px]   border-[1px] border-gray-600 bg-gray-600/50 hover:bg-gray-600/20 h-[45px] font-sans capitalize rounded-2xl lg:mt-6">
            <a href="#contact">get in touch</a>
          </button>
        </div>
      </div>
      <div
        id="home-imgs"
        className="relative md:mt-28 mt-18 md:mr-12 lg:ml-[50px] mb-24"
      >
        <div className="reactdev z-10  capitalize  flex gap-3 absolute  ml-75 md:ml-[550px] lg:ml-90 w-[120px] bg-blue-700/20 text-center rounded-2xl mt-[-10px] h-[35px] pt-1 ">
          <i className="fa-solid fa-circle text-[6px] text-blue-600/100 pt-3 ml-3 "></i>{" "}
          react dev
        </div>
        <img
          src={carbonimg}
          alt="img"
          className="imgdev h-[300px] w-[350px] lg:ml-18  ml-4 md:ml-66  mb-12 "
        />

        <div className="styledev z-10 capitalize absolute lg:ml-6 ml-[-25px] md:ml-[220px] w-[100px] bg-blue-700/20 text-center rounded-2xl mt-[-70px]">
          ui / ux
        </div>
        
    <a href="#footer" className="ml-30 mt-15  md:ml-[620px] font-mono hover:text-gray-500 lg:ml-[250px] text-gray-400 absolute lg:mt-30  ">scroll to bottom <i className="fa-solid fa-arrow-down"></i></a>
      </div>
    </div>
  );
}
export default Home;
