import logo from '../assets/logo-white.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-brand">
                    <img src={logo} alt="TechLub" className="footer-logo" />
                    <p>Plataforma de Treinamentos e Capacitação</p>
                </div>
                <div className="footer-links">
                    <p>&copy; {new Date().getFullYear()} TechLub. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
