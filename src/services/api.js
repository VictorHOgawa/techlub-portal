const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

export async function loginWorker(cpf, password) {
  const res = await fetch(`${BASE_URL}/auth/worker/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cpf, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Erro ao fazer login.');
  }

  return {
    token: data.access_token,
    user: {
      name: data.worker.name,
      type: 'worker',
    },
  };
}

export async function loginAdmin(email, password) {
  const res = await fetch(`${BASE_URL}/admin/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Erro ao fazer login.');
  }

  return {
    token: data.accessToken,
    user: {
      name: email,
      type: 'admin',
    },
  };
}
