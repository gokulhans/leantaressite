import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Aboutus from './pages/Aboutus';
import Contactpage from './pages/Contactpage';
function App() {
  return (
    <>
      <Navbar />
      <div className='pt-16 dark:bg-gray-800'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
