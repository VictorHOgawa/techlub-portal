export const presentations = [
  // Módulo 1 — App de Cadastros
  {
    id: "cad-1",
    title: "Login e Acesso",
    description:
      "Apresentação do acesso ao aplicativo de cadastros, restrito a usuários administrativos. Explica os níveis de permissão: admin geral (acesso a todas as empresas) e admin individual (acesso somente à própria empresa).",
    module: "App de Cadastros",
    status: "available",
    pdfUrl: "/pdfs/module1/1.0-Módulo.pdf",
  },
  {
    id: "cad-2",
    title: "Cadastro de Empresa",
    description:
      "Como criar e configurar uma empresa no sistema, incluindo dados básicos (razão social, CNPJ, telefone, e-mail, endereço), upload de logo, e a definição dos dias e horários de funcionamento.",
    module: "App de Cadastros",
    status: "available",
    pdfUrl: "/pdfs/module1/1.2-Cadastro-de-Empresa.pdf",
  },
  {
    id: "cad-3",
    title: "Cadastros Gerais",
    description:
      "Gerenciamento das tabelas de referência do sistema: catálogo, equipes, funções/cargos, serviços, tempo de execução, períodos, prioridades, condições, procedimentos, medidores, ferramentas, EPIs, unidades e toolkits.",
    module: "App de Cadastros",
    status: "available",
    pdfUrl: "/pdfs/module1/1.3-Cadastros-Gerais.pdf",
  },
  {
    id: "cad-4",
    title: "Cadastro de Materiais",
    description:
      "Formulário para registro de materiais (lubrificantes, consumíveis, peças). Seletores com cadastro direto, informações de estoque, especificações técnicas e vínculo com catálogo.",
    module: "App de Cadastros",
    status: "available",
    pdfUrl: "/pdfs/module1/1.4-Cadastro-de-Materiais.pdf",
  },
  {
    id: "cad-5",
    title: "Modelos de Equipamentos",
    description:
      "Conceito de modelos para evitar retrabalho. Três métodos de criação: base existente, planilha Excel ou manual. Estrutura de conjuntos, subconjuntos e CIPs.",
    module: "App de Cadastros",
    status: "available",
    pdfUrl: "/pdfs/module1/1.5-Modelos-de-Equipamentos.pdf",
  },
  {
    id: "cad-6",
    title: "Detalhes da Empresa — Colaboradores",
    description:
      "Cadastro de colaboradores com vínculo às funções dos cadastros gerais. As funções determinam quais ordens de serviço cada colaborador poderá visualizar e executar.",
    module: "App de Cadastros",
    status: "available",
    pdfUrl: "/pdfs/module1/1.6-Detalhes-da-Empresa.pdf",
  },
  {
    id: "cad-7",
    title: "Detalhes da Empresa — Layout",
    description:
      "Cadastro da estrutura física da empresa através de áreas e setores. O layout é a base para o posicionamento dos equipamentos dentro da planta.",
    module: "App de Cadastros",
    status: "available",
    pdfUrl: "/pdfs/module1/1.7-Detalhes-da-Empresa-Layout.pdf",
  },
  {
    id: "cad-8",
    title: "Detalhes da Empresa — Equipamentos",
    description:
      "Cadastro dos equipamentos reais da empresa. Estrutura similar aos modelos, com tag, criticidade (A/B/C), especificações mecânicas e vínculo com materiais.",
    module: "App de Cadastros",
    status: "available",
    pdfUrl: "/pdfs/module1/1.8-Detalhes-da-Empresa-Equipamentos.pdf",
  },

  // Módulo 2 — Sistema Administrativo
  {
    id: "adm-1",
    title: "Login e Visão Geral",
    description:
      "Acesso ao sistema administrativo com a mesma conta do aplicativo de cadastros. Dashboard com KPIs operacionais: status da planta, aderência ao plano, anomalias críticas e alertas de estoque.",
    module: "Sistema Administrativo",
    status: "available",
    pdfUrl: "/pdfs/module2/2.1.pdf",
  },
  {
    id: "adm-2",
    title: "Planejamento — Rotas",
    description:
      "Conceito de rotas: agrupamento de serviços para consolidar ordens de serviço. Sem rotas, cada serviço gera uma ordem individual; com rotas, gera-se uma única ordem.",
    module: "Sistema Administrativo",
    status: "available",
    pdfUrl: "/pdfs/module2/2.2-Planejamento-Rotas.pdf",
  },
  {
    id: "adm-3",
    title: "Planejamento Automático",
    description:
      "Geração automática do planejamento com balanceamento por quantidade de OS ou por horas, considerando dias úteis, horários de funcionamento e pausas.",
    module: "Sistema Administrativo",
    status: "available",
    pdfUrl: "/pdfs/module2/2.3-Planejamento-Automático.pdf",
  },
  {
    id: "adm-4",
    title: "Planejamento — Visões e Ajuste Fino",
    description:
      "Visualizações por dia, semana, mês e ano. Permite movimentação manual de itens entre dias, ajuste fino da distribuição e atribuição de funções específicas.",
    module: "Sistema Administrativo",
    status: "available",
    pdfUrl: "/pdfs/module2/2.4-Planejamento-Visões-e-Ajuste-Fino.pdf",
  },
  {
    id: "adm-5",
    title: "Planejamento — Ações Especiais",
    description:
      "Deslocamento de período (adiar/antecipar serviços e rotas) e filtros avançados para localização precisa de serviços por múltiplas dimensões.",
    module: "Sistema Administrativo",
    status: "available",
    pdfUrl: "/pdfs/module2/2.5-Planejamento-Ações-Especiais.pdf",
  },
  {
    id: "adm-6",
    title: "Programação — Ordens de Serviço",
    description:
      "Emissão e acompanhamento de ordens de serviço. Emissão individual ou por período, acompanhamento de status e visões por dia, semana, mês e ano.",
    module: "Sistema Administrativo",
    status: "available",
    pdfUrl: "/pdfs/module2/2.6-Programação-Ordens-de-Serviço.pdf",
  },
  {
    id: "adm-7",
    title: "Tutoriais",
    description:
      "Área para compartilhar materiais de treinamento com colaboradores. Upload de arquivos (PDF, DOC, imagens) ou URLs de vídeo. Conteúdo disponível na Universidade do app.",
    module: "Sistema Administrativo",
    status: "available",
    pdfUrl: "/pdfs/module2/2.7-Tutoriais.pdf",
  },

  // Módulo 3 — App do Colaborador
  {
    id: "col-1",
    title: "Primeiro Acesso e Login",
    description:
      "No primeiro acesso, o colaborador insere seu CPF e cria sua própria senha. Nos acessos seguintes, basta informar CPF e senha para realizar o login.",
    module: "App do Colaborador",
    status: "available",
    pdfUrl: "/pdfs/module3/3.1.pdf",
  },
  {
    id: "col-2",
    title: "Home e Universidade",
    description:
      "Tela inicial do aplicativo com acesso à Universidade TechLub, onde o colaborador pode visualizar documentos e vídeos de treinamento cadastrados pelo administrativo.",
    module: "App do Colaborador",
    status: "available",
    pdfUrl: "/pdfs/module3/3.2-Home-e-Universidade.pdf",
  },
  {
    id: "col-3",
    title: "Ordens de Serviço — Visão Geral",
    description:
      "O colaborador visualiza suas ordens organizadas em três abas: A Fazer (pendentes), Em Andamento (iniciadas ou pausadas) e Concluídas (finalizadas ou canceladas).",
    module: "App do Colaborador",
    status: "available",
    pdfUrl: "/pdfs/module3/3.3-Ordens-de-Serviço-Visão-Geral.pdf",
  },
  {
    id: "col-4",
    title: "Execução de Ordem",
    description:
      "Ao iniciar a execução, o sistema registra o tempo. Detalhes exibem serviços da ordem, informações do equipamento, ferramentas necessárias e materiais.",
    module: "App do Colaborador",
    status: "available",
    pdfUrl: "/pdfs/module3/3.4-Execução-de-Ordem.pdf",
  },
  {
    id: "col-5",
    title: "Pausa e Retomada",
    description:
      "O colaborador pode pausar a execução para que o tempo parado não seja contabilizado. Ao retornar, basta retomar e o cronômetro continua de onde parou.",
    module: "App do Colaborador",
    status: "available",
    pdfUrl: "/pdfs/module3/3.5-Pausa-e-Retomada.pdf",
  },
  {
    id: "col-6",
    title: "Relato de Problemas",
    description:
      "Caso não consiga concluir um serviço, o colaborador relata o problema selecionando o serviço, indicando o motivo (pré-cadastrado ou texto livre) e registrando o cancelamento.",
    module: "App do Colaborador",
    status: "available",
    pdfUrl: "/pdfs/module3/3.6-Relato-de-Problemas.pdf",
  },
  {
    id: "col-7",
    title: "Conclusão de Ordem",
    description:
      "Ao concluir, o colaborador confirma que todos os serviços sem relato de problema foram executados com sucesso. A ordem é marcada como concluída e pode ser consultada posteriormente.",
    module: "App do Colaborador",
    status: "available",
    pdfUrl: "/pdfs/module3/3.7-Conclusão-de-Ordem.pdf",
  },
];

export const getAvailablePresentations = () => {
  return presentations.filter((p) => p.status === "available");
};

export const searchPresentations = (query) => {
  const q = query.toLowerCase();
  return presentations.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.module.toLowerCase().includes(q),
  );
};

export const getPresentationById = (id) => {
  return presentations.find((p) => p.id === id);
};
