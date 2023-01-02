import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
function App() {
  return (
    <>
      <Navbar />
      {/* <div className='pt-16 dark:bg-gray-800'> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default App;
