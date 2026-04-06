import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Home, LayoutList, LogOut, Download } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo-blue.png';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, signOut } = useAuth();

    const navLinks = [
        { name: 'Inicio', path: '/', icon: <Home size={18} /> },
        { name: 'Modulos', path: '/modulos', icon: <LayoutList size={18} /> },
        { name: 'Buscar', path: '/buscar', icon: <Search size={18} /> },
        { name: 'Downloads', path: '/downloads', icon: <Download size={18} /> },
    ];

    function handleLogout() {
        signOut();
        navigate('/login', { replace: true });
    }

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

                {user && (
                    <div className="navbar-user">
                        <span className="navbar-user-name">{user.name}</span>
                        <button className="navbar-logout" onClick={handleLogout} title="Sair">
                            <LogOut size={18} />
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
