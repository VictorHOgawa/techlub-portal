import { useState, useEffect } from 'react';
import { Download, Loader2, Smartphone, Wrench } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './Downloads.css';

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

const APP_META = [
    {
        appId: 'inova-app',
        name: 'App de Cadastros',
        description: 'Cadastro de empresas, equipamentos, materiais, colaboradores e configuração de rotas e planejamento.',
        icon: <Wrench size={32} />,
    },
    {
        appId: 'inova-worker-app',
        name: 'App do Colaborador',
        description: 'Execução de ordens de serviço, rotas de manutenção e registro de ocorrências em campo.',
        icon: <Smartphone size={32} />,
    },
];

export default function Downloads() {
    const [apks, setApks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${BASE_URL}/apk`)
            .then((res) => res.json())
            .then((data) => setApks(Array.isArray(data) ? data : []))
            .catch(() => setApks([]))
            .finally(() => setLoading(false));
    }, []);

    function getApkData(appId) {
        return apks.find((a) => a.appId === appId);
    }

    return (
        <PageTransition>
            <div className="downloads-page">
                <div className="downloads-header">
                    <h1>Downloads</h1>
                    <p>Baixe os aplicativos para dispositivos Android.</p>
                </div>

                {loading ? (
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
                        <Loader2 size={32} className="animate-spin" style={{ color: '#ed6842' }} />
                    </div>
                ) : (
                    <div className="downloads-grid">
                        {APP_META.map((app) => {
                            const data = getApkData(app.appId);

                            return (
                                <div key={app.appId} className="download-card glass-panel">
                                    <div className="download-icon">{app.icon}</div>
                                    <h2>{app.name}</h2>
                                    <p>{app.description}</p>
                                    {data ? (
                                        <a
                                            href={data.url}
                                            download={data.fileName}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="download-button"
                                        >
                                            <Download size={18} />
                                            Baixar APK
                                        </a>
                                    ) : (
                                        <span
                                            className="download-button"
                                            style={{ opacity: 0.5, cursor: 'not-allowed' }}
                                        >
                                            <Download size={18} />
                                            Indisponível
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className="downloads-instructions">
                    <h3>Como instalar</h3>
                    <ol>
                        <li>Baixe o APK no seu dispositivo Android.</li>
                        <li>Abra o arquivo baixado e permita a instalação de fontes desconhecidas se solicitado.</li>
                        <li>Siga as instruções na tela para concluir a instalação.</li>
                        <li>Abra o app e faça o primeiro acesso com seu CPF e a senha temporária recebida.</li>
                    </ol>
                </div>
            </div>
        </PageTransition>
    );
}
