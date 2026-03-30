import { FileText, Lock, Play } from 'lucide-react';
import './PresentationCard.css';

const PresentationCard = ({ presentation }) => {
    const isAvailable = presentation.status === 'available';

    return (
        <div className={`presentation-card glass-panel ${!isAvailable ? 'disabled' : ''}`}>
            <div className="card-status-badge">
                {isAvailable ? (
                    <span className="badge-available">{presentation.module}</span>
                ) : (
                    <span className="badge-soon">Em breve</span>
                )}
            </div>

            <div className="card-icon-wrapper">
                <div className="card-icon-bg">
                    {isAvailable ? <FileText size={32} /> : <Lock size={32} />}
                </div>
            </div>

            <div className="card-content">
                <h3 className="card-title">{presentation.title}</h3>
                <p className="card-description">{presentation.description}</p>

                <div className="card-actions">
                    {isAvailable ? (
                        <button className="btn btn-primary card-btn">
                            <Play size={16} /> Acessar
                        </button>
                    ) : (
                        <button className="btn btn-secondary card-btn" disabled>
                            Indisponível
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PresentationCard;
