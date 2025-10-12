import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import './App.css';

// Motion helpers (from src/components/Motion.jsx)
import { PageTransition } from "./components/Motion";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Universities from "./pages/Universities";
import Students from "./pages/Students";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/universities" element={<PageTransition><Universities /></PageTransition>} />
        <Route path="/students" element={<PageTransition><Students /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<PageTransition><div className="page-container">404 – Not Found</div></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}