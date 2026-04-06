import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { loginWorker, loginAdmin } from '../services/api';
import logo from '../assets/logo-blue.png';
import './Login.css';

export default function Login() {
  const [mode, setMode] = useState('worker');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { signIn } = useAuth();
  const navigate = useNavigate();

  function applyCpfMask(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    return digits
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  function handleCpfChange(e) {
    setCpf(applyCpfMask(e.target.value));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      let result;

      if (mode === 'worker') {
        const cleanCpf = cpf.replace(/\D/g, '');
        if (cleanCpf.length !== 11) {
          setError('CPF deve ter 11 digitos.');
          setSubmitting(false);
          return;
        }
        result = await loginWorker(cleanCpf, password);
      } else {
        result = await loginAdmin(email, password);
      }

      signIn(result.token, result.user);
      navigate('/', { replace: true });
    } catch (err) {
      setError(err.message || 'Erro ao fazer login.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card glass-panel">
        <div className="login-header">
          <img src={logo} alt="Inova" className="login-logo" />
          <p className="login-subtitle">Acesse a plataforma</p>
        </div>

        <div className="login-tabs">
          <button
            type="button"
            className={`login-tab ${mode === 'worker' ? 'active' : ''}`}
            onClick={() => { setMode('worker'); setError(''); }}
          >
            <User size={16} />
            Colaborador
          </button>
          <button
            type="button"
            className={`login-tab ${mode === 'admin' ? 'active' : ''}`}
            onClick={() => { setMode('admin'); setError(''); }}
          >
            <Mail size={16} />
            Administrador
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {mode === 'worker' ? (
            <div className="input-group">
              <User size={18} className="input-icon" />
              <input
                type="text"
                placeholder="CPF"
                value={cpf}
                onChange={handleCpfChange}
                autoComplete="username"
                required
              />
            </div>
          ) : (
            <div className="input-group">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>
          )}

          <div className="input-group">
            <Lock size={18} className="input-icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="login-button" disabled={submitting}>
            <LogIn size={18} />
            {submitting ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
