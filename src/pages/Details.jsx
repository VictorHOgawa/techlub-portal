import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Calendar, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { getPresentationById } from '../data/presentations';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const presentation = getPresentationById(id);

    if (!presentation) {
        return (
            <PageTransition>
                <div className="details-not-found glass-panel">
                    <h2>Apresentação não encontrada</h2>
                    <button className="btn btn-secondary" onClick={() => navigate('/')}>
                        <ArrowLeft size={18} /> Voltar ao Início
                    </button>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="details-container">

                <button className="btn back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={18} /> Voltar
                </button>

                <div className="details-header glass-panel">
                    <div className="details-header-content">
                        <div className="details-top-bar">
                            <div className="details-badge">{presentation.module}</div>
                            {presentation.pdfUrl && (
                                <a
                                    href={presentation.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-download-top"
                                >
                                    <Download size={16} /> Baixar PDF
                                </a>
                            )}
                        </div>
                        <h1 className="details-title">{presentation.title}</h1>
                        <p className="details-description">{presentation.description}</p>

                        <div className="details-meta-container">
                            <div className="details-meta">
                                <span><FileText size={16} /> PDF Document</span>
                                <span><Calendar size={16} /> Atualizado recentemente</span>
                                <span><Clock size={16} /> ~15 min de leitura</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pdf-viewer-container glass-panel">
                    <div className="pdf-viewer-header">
                        <h3>Visualização do Documento</h3>
                    </div>
                    <div className="pdf-viewer-content">
                        {presentation.pdfUrl ? (
                            <object
                                data={presentation.pdfUrl}
                                type="application/pdf"
                                className="pdf-object"
                            >
                                <div className="pdf-fallback">
                                    <p>Seu navegador não suporta visualização direta de PDFs.</p>
                                    <a href={presentation.pdfUrl} className="btn btn-primary" download>
                                        <Download size={18} /> Baixar o Arquivo
                                    </a>
                                </div>
                            </object>
                        ) : (
                            <div className="pdf-coming-soon">
                                <FileText size={48} className="text-muted" />
                                <p>O PDF para este módulo será disponibilizado em breve.</p>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </PageTransition>
    );
};

export default Details;
