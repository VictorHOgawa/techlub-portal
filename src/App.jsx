import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./index.css";
import Details from "./pages/Details";
import Home from "./pages/Home";
import ModuleDetails from "./pages/ModuleDetails";
import ModulesList from "./pages/ModulesList";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/buscar" element={<Search />} />
              <Route path="/detalhes/:id" element={<Details />} />
              <Route path="/modulos" element={<ModulesList />} />
              <Route path="/modulos/:moduleName" element={<ModuleDetails />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
