import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ClipboardList, Settings, Smartphone } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PresentationCard from '../components/PresentationCard';
import { presentations } from '../data/presentations';
import './ModuleDetails.css';

const moduleInfo = {
    cadastros: {
        name: 'App de Cadastros',
        moduleName: 'App de Cadastros',
        icon: <ClipboardList size={40} className="module-icon-large" />,
        description: 'Cadastro de empresas, colaboradores, equipamentos, materiais e configurações gerais do sistema.'
    },
    administrativo: {
        name: 'Sistema Administrativo',
        moduleName: 'Sistema Administrativo',
        icon: <Settings size={40} className="module-icon-large" />,
        description: 'Planejamento, programação de ordens de serviço, rotas, visões e tutoriais para a equipe.'
    },
    colaborador: {
        name: 'App do Colaborador',
        moduleName: 'App do Colaborador',
        icon: <Smartphone size={40} className="module-icon-large" />,
        description: 'Execução de ordens de serviço, pausa e retomada, relato de problemas e conclusão pelo colaborador.'
    }
};

const ModuleDetails = () => {
    const { moduleName } = useParams();
    const navigate = useNavigate();

    if (!moduleInfo[moduleName]) {
        return (
            <PageTransition>
                <div className="module-not-found glass-panel">
                    <h2>Módulo não encontrado</h2>
                    <button className="btn btn-secondary" onClick={() => navigate('/modulos')}>
                        <ArrowLeft size={18} /> Voltar para Módulos
                    </button>
                </div>
            </PageTransition>
        );
    }

    const info = moduleInfo[moduleName];

    const modulePresentations = presentations.filter(
        (p) => p.module === info.moduleName && p.status === 'available'
    );

    return (
        <PageTransition>
            <div className="module-details-container">

                <button className="btn back-btn" onClick={() => navigate('/modulos')}>
                    <ArrowLeft size={18} /> Todos os Módulos
                </button>

                <div className="module-header-banner glass-panel">
                    <div className="module-banner-icon">
                        {info.icon}
                    </div>
                    <div className="module-banner-text">
                        <h1 className="module-banner-title">{info.name}</h1>
                        <p className="module-banner-desc">{info.description}</p>
                    </div>
                </div>

                <div className="module-section-header">
                    <h2>Todos os Documentos do {info.name}</h2>
                    <span className="doc-count">{modulePresentations.length} fluxos disponíveis</span>
                </div>

                <div className="cards-grid">
                    {modulePresentations.map((presentation, i) => (
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

            </div>
        </PageTransition>
    );
};

export default ModuleDetails;
