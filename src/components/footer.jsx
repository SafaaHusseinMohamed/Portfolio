import "../App.css";
function Footer() {
  return (
    <div id="footer" className="pt-12 flex mb-12 flex-col items-start  ">
      <div id="update " className="md:flex md:mb-6 lg:justify-around ">
        <div className="pl-12 lg:ml-24">
          <h2 className="text-[30px] font-bold">stay update</h2>
          <p>subscribe to see my latest projects & articles</p>
        </div>
        <div className="pl-4 lg:ml-88">
          <input
            type="email"
            placeholder="enter your email .."
            className=" mt-6 bg-gray-700 p-4 w-[320px] h-[40px] rounded-xl lg:w-[400px] hover:-translate-y-1 transition-all duration-300  "
          />
          <button className="hover:-translate-y-2 trasition-all duration-500 capitalize bg-blue-800/100 w-[120px] p-2 rounded-xl ml-2 hover:bg-blue-500/100">
            subscribe
          </button>
        </div>
      </div>
      <div id="links" className="lg:flex lg:justify-around">
        <div className=" mt-12 flex flex-col gap-6 ml-12 max-w-[400px] md:ml-48">
          <div className="flex gap-2 ">
            <i className="fa-solid fa-circle text-[8px] text-blue-500 mt-3"></i>
            <p>portfolio</p>
          </div>
          <p className="text-gray-500">
            Specialized in building scalable, high-performance React interfaces
            with clean code and seamless user experiences
          </p>
          <div className="flex gap-8 text-gray-500">
            <a
              href="https://www.linkedin.com/in/safaa-hussein-68350333b"
              className="hover:-translate-y-2 trasition-all duration-500 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors"
            >
              <i className="trasition-all duration-500 fa-brands fa-linkedin-in"></i>
            </a>

            <a
              href="https://github.com/SafaaHusseinMohamed"
              className=" hover:-translate-y-2 trasition-all duration-500 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
            >
              <i className="trasition-all duration-500 fa-brands fa-github"></i>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=safaahusseinahmed597@gmail.com"
              className="hover:-translate-y-2 trasition-all duration-500 trasition-all duration-500 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>

            <a
              href="https://www.facebook.com/safaa.hussein.168477/"
              className="hover:-translate-y-2 trasition-all duration-500 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400 transition-colors duration-300"
            >
              <i className="trasition-all duration-500 fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>
        <div>
          <h2 className="my-6 ml-12 md:ml-48 capitalize">navigation</h2>
          <div className="flex flex-col ml-14 gap-2 text-gray-500 md:ml-50 ">
            <a href="#home">
              {" "}
              <p className="hover:text-gray-200 transition all">home</p>
            </a>

            <a href="#Expertise">
              {" "}
              <p className="hover:text-gray-200 transition all">skills</p>
            </a>
              <a href="#services">
              {" "}
              <p className="hover:text-gray-200 transition all">services</p>
            </a>
            <a href="#projects">
              {" "}
              <p className="hover:text-gray-200 transition all">projects</p>
            </a>
            <a href="#contact">
              {" "}
              <p className="hover:text-gray-200 transition all">contact</p>
            </a>
          </div>
        </div>
        <div>
          <h2 className="my-6 ml-12 md:ml-48 capitalize">what i do</h2>
          <div className="flex flex-col ml-14 gap-2 text-gray-500 md:ml-50">
            <p className="text-gray-400 mb-2 hover:text-gray-200 transition all">
              Front-End Development
            </p>
            <p className="text-gray-400 mb-2 hover:text-gray-200 transition all">
              Responsive Web Design
            </p>
            <p className="text-gray-400 mb-2 hover:text-gray-200 transition all">
              React & Tailwind Projects
            </p>
            <p className="text-gray-400 mb-2 hover:text-gray-200 transition all">
              UI / UX Implementation
            </p>
            <p className="text-gray-400 mb-2 hover:text-gray-200 transition all">
              Component Architecture
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-500 my-12"></div>
      <div className="flex gap-2 m-auto text-gray-500 ">
        <i className="fa-regular fa-copyright mt-1.5 text-white"></i>

        <p className="capitalize hover:text-gray-100">
          all rights reserved in sebtamber 2026{" "}
          <span
            id="portfolio"
            className="ml-20 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent font-bold text-[20px] "
          >
            portfolio
          </span>
        </p>
        
      </div>
<a className="text-gray-400  text-center mt-6 md:mt-[-24px] ml-48  md:ml-auto mr-12 hover:text-gray-500" href="#home">back to top <i className="fa-solid fa-arrow-up"></i></a>
    </div>
  );
}
export default Footer;
