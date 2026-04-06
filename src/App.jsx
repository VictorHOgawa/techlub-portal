import { AnimatePresence } from "framer-motion";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";
import Details from "./pages/Details";
import Downloads from "./pages/Downloads";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ModuleDetails from "./pages/ModuleDetails";
import ModulesList from "./pages/ModulesList";
import Search from "./pages/Search";

function AppLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return (
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
    );
  }

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/buscar" element={<ProtectedRoute><Search /></ProtectedRoute>} />
            <Route path="/detalhes/:id" element={<ProtectedRoute><Details /></ProtectedRoute>} />
            <Route path="/modulos" element={<ProtectedRoute><ModulesList /></ProtectedRoute>} />
            <Route path="/modulos/:moduleName" element={<ProtectedRoute><ModuleDetails /></ProtectedRoute>} />
            <Route path="/downloads" element={<ProtectedRoute><Downloads /></ProtectedRoute>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
