import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      {/* TODO: Edit pattern below */}
      <div >
        <Navbar />
        <div className="relative z-0">
        <Hero />
        <StarsCanvas />
        </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
     
    </div>
    </BrowserRouter>
  )
}

export default App
