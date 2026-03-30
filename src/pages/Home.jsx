import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search as SearchIcon, PlayCircle, BookOpen, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PresentationCard from '../components/PresentationCard';
import { presentations } from '../data/presentations';
import './Home.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/buscar?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const cadastros = presentations.filter(p => p.module === 'App de Cadastros');
    const administrativo = presentations.filter(p => p.module === 'Sistema Administrativo');
    const colaborador = presentations.filter(p => p.module === 'App do Colaborador');

    return (
        <PageTransition>
            <div className="home-container">

                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="hero-text-block"
                        >
                            <h1 className="hero-title">
                                Plataforma de Auxílio <span className="text-gradient">TechLub</span>
                            </h1>
                            <p className="hero-subtitle">
                                Acesse nossos fluxos e apresentações em PDF de forma rápida e moderna. Simplifique seu dia a dia.
                            </p>

                            <div className="hero-search-wrapper">
                                <form className="hero-search-form" onSubmit={handleSearch}>
                                    <SearchIcon className="search-icon" size={24} />
                                    <input
                                        type="text"
                                        placeholder="Busque por 'Cadastro de Empresa', 'Ordens de Serviço'..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="hero-search-input"
                                    />
                                    <button type="submit" className="btn btn-primary search-btn">
                                        Buscar
                                    </button>
                                </form>
                            </div>
                        </motion.div>

                        {/* 3D Floating Elements */}
                        <motion.div
                            className="hero-graphics"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <div className="floating-card c-1 glass-panel">
                                <PlayCircle size={40} className="float-icon" color="var(--primary-blue)" />
                                <h4>Cadastros</h4>
                                <p>App Completo</p>
                            </div>
                            <div className="floating-card c-2 glass-panel">
                                <BookOpen size={40} className="float-icon" color="var(--primary-green)" />
                                <h4>3 Módulos</h4>
                                <p>Disponíveis</p>
                            </div>
                            <div className="floating-card c-3 glass-panel">
                                <Award size={40} className="float-icon" color="var(--primary-green)" />
                                <h4>Excelência</h4>
                                <p>Operacional</p>
                            </div>

                            <div className="blob-bg"></div>
                        </motion.div>
                    </div>
                </section>

                {/* Módulo 1 — App de Cadastros */}
                <section className="modules-section">
                    <div className="section-header">
                        <h2 className="section-title">App de Cadastros</h2>
                        <p className="section-desc">Cadastro de empresas, colaboradores, equipamentos, materiais e configurações gerais.</p>
                    </div>

                    <div className="cards-grid">
                        {cadastros.map((presentation, i) => (
                            <motion.div
                                key={presentation.id}
                                onClick={() => navigate(`/detalhes/${presentation.id}`)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                            >
                                <PresentationCard presentation={presentation} />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Módulo 2 — Sistema Administrativo */}
                <section className="modules-section">
                    <div className="section-header">
                        <h2 className="section-title">Sistema Administrativo</h2>
                        <p className="section-desc">Planejamento, programação de ordens de serviço, rotas e tutoriais.</p>
                    </div>

                    <div className="cards-grid">
                        {administrativo.map((presentation, i) => (
                            <motion.div
                                key={presentation.id}
                                onClick={() => navigate(`/detalhes/${presentation.id}`)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                            >
                                <PresentationCard presentation={presentation} />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Módulo 3 — App do Colaborador */}
                <section className="modules-section">
                    <div className="section-header">
                        <h2 className="section-title">App do Colaborador</h2>
                        <p className="section-desc">Execução de ordens, pausa e retomada, relato de problemas e conclusão.</p>
                    </div>

                    <div className="cards-grid">
                        {colaborador.map((presentation, i) => (
                            <motion.div
                                key={presentation.id}
                                onClick={() => navigate(`/detalhes/${presentation.id}`)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                            >
                                <PresentationCard presentation={presentation} />
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </PageTransition>
    );
};

export default Home;
