import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import PresentationCard from '../components/PresentationCard';
import { searchPresentations, presentations } from '../data/presentations';
import './Search.css';

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const initialQuery = searchParams.get('q') || '';

    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (initialQuery) {
            setResults(searchPresentations(initialQuery));
        } else {
            setResults(presentations); // Show all if empty
        }
    }, [initialQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchParams({ q: query });
    };

    return (
        <PageTransition>
            <div className="search-page-container">

                <div className="search-header-panel glass-panel">
                    <h1 className="search-title">Buscar Módulos e Fluxos</h1>
                    <p className="search-subtitle">Encontre rapidamente a apresentação que você precisa.</p>

                    <form className="search-form-large" onSubmit={handleSearch}>
                        <SearchIcon className="search-icon-large" size={28} />
                        <input
                            type="text"
                            placeholder="Ex: Contas a Receber, Notas Fiscais..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="search-input-large"
                            autoFocus
                        />
                        <button type="submit" className="btn btn-primary search-btn-large">
                            Localizar
                        </button>
                    </form>
                </div>

                <div className="search-results-container">
                    <h3 className="results-count">
                        {results.length} resultado(s) encontrado(s) {initialQuery && `para "${initialQuery}"`}
                    </h3>

                    {results.length > 0 ? (
                        <div className="cards-grid">
                            {results.map((presentation) => (
                                <div key={presentation.id} onClick={() => navigate(`/detalhes/${presentation.id}`)}>
                                    <PresentationCard presentation={presentation} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-results glass-panel">
                            <SearchIcon size={64} className="no-results-icon" />
                            <h2>Nenhum resultado encontrado</h2>
                            <p>Tente buscar por outras palavras-chave, como "caixa", "auditoria" ou "relatórios".</p>
                        </div>
                    )}
                </div>

            </div>
        </PageTransition>
    );
};

export default Search;
