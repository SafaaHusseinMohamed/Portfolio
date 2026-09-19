// import "../App.css";
function Contact() {
  return (
    <>
      <h2 className="capitalize bg-gradient-to-r from-purple-700 via-blue-400 to-purple-300 text-[15px] mt-12  text-center bg-clip-text text-transparent">
        say hello
      </h2>
      <h1
        id="contact"
        className="uppercase font-bold text-[30px] text-center py-4  "
      >
        get in touch
      </h1>
      <div className="h-[4px] w-[100px] bg-gradient-to-r from-purple-700 to-blue-600 m-auto "></div>
      <p className="w-[450px] pt-4 text-center m-auto text-gray-400/80">
        Open to freelance projects, internships, and full-time opportunities.
        Let's build something great together.
      </p>
      <div
        id="contactt"
        className="mt-[40px]   ml-[20px] lg:ml-[40px]  mb-12  lg:flex lg:justify-evenly   "
      >
        <div
          id="icons"
          className="bg-blue-700/10 pl-6 pb-4 rounded-xl w-[420px] lg:w-[420px]  md:w-[810px] lg:pt-8 lg:rounded-3xl"
        >
          <a href="#" className="text-[40px] text-gray-400 ">
            <i className="fa-solid fa-laptop-code bg-gradient-to-r from-purple-400/100 to-blue-400/100 bg-clip-text text-transparent"></i>
          </a>

          <h2 className="capitalize text-[25px] font-bold bg-gradient-to-r from-purple-500 via-blue-800 to-cyan-700 bg-clip-text text-transparent">
            safaa hussein
          </h2>
          <p className="w-[400px] text-gray-400/80">
            Full-Stack Developer based in Egypt. I love building elegant,
            responsive web applications and am always open to new opportunities.
          </p>
          <div id="icon1" className="flex gap-6 mt-10">
            <i className="fa-solid fa-location-dot mt-4"></i>
            <div className="">
              <p className=" text-gray-400/80">location</p>
              <p className="capitalize">fayoum, egypt </p>
            </div>
          </div>
          <div id="icon1" className="flex gap-6 mt-6">
            <i className="fa-solid fa-envelope mt-4"></i>
            <div className="">
              <p className=" text-gray-400/80">email</p>
              <p>safaahusseinahmed597@gmail.com</p>
            </div>
          </div>
          <div id="icon1" className="flex gap-6 mt-6">
            <i className="fa-solid fa-code mt-4"></i>
            <div className="">
              <p className=" text-gray-400/80">focus</p>
              <p className="capitalize">front-end development</p>
            </div>
          </div>
        </div>

        <div
          id="form"
          className="mt-12 border-[2px] border-white rounded-3xl mr-7 lg:mr-1 lg:w-[450px] w-[420px] md:w-[810px] lg:w-[500px] lg:mt-3 "
        >
          <h2 className="capitalize text-[30px] ml-6 lg:ml-12  md:ml-18 mt-8 bg-gray-700 bg-gradient-to-r from-blue-800 via-purple-700 to-purple-800 bg-clip-text text-transparent ">
            send message
          </h2>
          <div className="mt-6 mb-6 flex justify-evenly">
            <input
              type="text"
              placeholder="First Name"
              className="w-[180px] md:w-[250px] capitalize bg-gray-700/40 p-2 rounded-lg lg:w-[220px]"
            />
            <input
              type="text"
              placeholder="last Name"
              className="w-[180px] md:w-[250px] capitalize bg-gray-700/40 p-2  rounded-lg lg:w-[220px]"
            />
          </div>
          <div className="mt-6 mb-6 flex justify-evenly">
            <input
              type="email"
              placeholder="email"
              className="w-[180px] md:w-[250px] capitalize bg-gray-700/40 p-2 rounded-lg lg:w-[220px]"
            />
            <input
              type="text"
              placeholder="phone no (optional)"
              className="w-[180px] md:w-[250px] capitalize bg-gray-700/40 p-2 rounded-lg lg:w-[220px]"
            />
          </div>

          <input
            type="text"
            className=" capitalize bg-gray-700/30 h-[140px] rounded-xl w-[370px] md:w-[610px] ml-6 md:ml-25 mb-12 p-4 pb-[50px] lg:ml-5 lg:w-[460px]"
            placeholder="Your Message"
          />
          <button className="capitalize  text-center  w-[370px] md:ml-25 md:w-[610px] bg-blue-800/100 h-[40px] rounded-lg ml-6 mb-12 hover:bg-blue-600/100 lg:ml-5 lg:w-[460px]">
            send message
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-500 my-12"></div>
    </>
  );
}
export default Contact;
