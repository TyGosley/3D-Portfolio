import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
  Resume,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Navbar />
          <div className="relative z-0">
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <About />
        <Tech />
        <Projects />
        <Experience />
        {/* <Feedbacks /> */}
          <Contact />
        <Resume />
        <div className="relative z-0">
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
