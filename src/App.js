import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from "./Pages/About";
import Business from "./Pages/Business";
import Pricing from "./Pages/Pricing";
import Resources from "./Pages/Resources";
import SuccessStories from "./Pages/SuccessStories";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Pricing" element={<Business />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/success" element={<SuccessStories />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
