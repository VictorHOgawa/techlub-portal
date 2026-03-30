import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutGrid, ClipboardList, Settings, Smartphone } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './ModulesList.css';

const moduleGroups = [
    {
        id: 'cadastros',
        name: 'App de Cadastros',
        description: 'Cadastro de empresas, colaboradores, equipamentos, materiais e configurações gerais do sistema.',
        status: 'available',
        icon: <ClipboardList size={32} />
    },
    {
        id: 'administrativo',
        name: 'Sistema Administrativo',
        description: 'Planejamento, programação de ordens de serviço, rotas, visões e tutoriais para a equipe.',
        status: 'available',
        icon: <Settings size={32} />
    },
    {
        id: 'colaborador',
        name: 'App do Colaborador',
        description: 'Execução de ordens de serviço, pausa e retomada, relato de problemas e conclusão pelo colaborador.',
        status: 'available',
        icon: <Smartphone size={32} />
    }
];

const ModulesList = () => {
    const navigate = useNavigate();

    return (
        <PageTransition>
            <div className="modules-list-container">

                <div className="modules-header-panel glass-panel">
                    <h1 className="modules-title">
                        <LayoutGrid size={32} className="title-icon" />
                        Módulos do Sistema
                    </h1>
                    <p className="modules-subtitle">
                        Selecione um módulo para visualizar todos os seus fluxos e documentos de treinamento.
                    </p>
                </div>

                <div className="modules-grid-large">
                    {moduleGroups.map((mod, i) => {
                        const isAvailable = mod.status === 'available';

                        return (
                            <motion.div
                                key={mod.id}
                                className={`module-group-card glass-panel ${!isAvailable ? 'disabled' : ''}`}
                                onClick={() => isAvailable ? navigate(`/modulos/${mod.id}`) : null}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                            >
                                <div className="group-card-status">
                                    {isAvailable ? (
                                        <span className="badge-available">Disponível</span>
                                    ) : (
                                        <span className="badge-soon">Em breve</span>
                                    )}
                                </div>

                                <div className="group-card-icon-wrapper">
                                    <div className="group-card-icon-bg">
                                        {mod.icon}
                                    </div>
                                </div>

                                <div className="group-card-content">
                                    <h3 className="group-card-title">{mod.name}</h3>
                                    <p className="group-card-description">{mod.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </PageTransition>
    );
};

export default ModulesList;
