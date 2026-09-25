import Header from "./components/Header";
import Home from "./components/Home";
import Expertise from "./components/Expertise"
import Services from "./components/services";
import Tools from "./components/tools";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Expertise />
      <Services/>
      <Tools/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
