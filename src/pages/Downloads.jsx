import { Download, Smartphone, Wrench } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import './Downloads.css';

const apps = [
    {
        id: 'inova-app',
        name: 'App de Cadastros',
        description: 'Cadastro de empresas, equipamentos, materiais, colaboradores e configuração de rotas e planejamento.',
        icon: <Wrench size={32} />,
        fileName: 'inova-app.apk',
    },
    {
        id: 'inova-worker-app',
        name: 'App do Colaborador',
        description: 'Execução de ordens de serviço, rotas de manutenção e registro de ocorrências em campo.',
        icon: <Smartphone size={32} />,
        fileName: 'inova-worker-app.apk',
    },
];

export default function Downloads() {
    return (
        <PageTransition>
            <div className="downloads-page">
                <div className="downloads-header">
                    <h1>Downloads</h1>
                    <p>Baixe os aplicativos para dispositivos Android.</p>
                </div>

                <div className="downloads-grid">
                    {apps.map((app) => (
                        <div key={app.id} className="download-card glass-panel">
                            <div className="download-icon">{app.icon}</div>
                            <h2>{app.name}</h2>
                            <p>{app.description}</p>
                            <a
                                href={`/apks/${app.fileName}`}
                                download={app.fileName}
                                className="download-button"
                            >
                                <Download size={18} />
                                Baixar APK
                            </a>
                        </div>
                    ))}
                </div>

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
