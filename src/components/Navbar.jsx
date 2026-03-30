import { Link, useLocation } from 'react-router-dom';
import { Search, Home, LayoutList } from 'lucide-react';
import logo from '../assets/logo-blue.png';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Início', path: '/', icon: <Home size={18} /> },
        { name: 'Módulos', path: '/modulos', icon: <LayoutList size={18} /> },
        { name: 'Buscar', path: '/buscar', icon: <Search size={18} /> },
    ];

    return (
        <header className="navbar-container glass-panel">
            <div className="navbar-content">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="TechLub" />
                </Link>

                <nav className="navbar-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
