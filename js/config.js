/**
 * ============================================================
 * CONFIGURAÇÃO CENTRAL — JC PRIME GUINCHO
 * ============================================================
 * Este é o ÚNICO arquivo onde os dados da empresa devem ser
 * alterados. Nenhum outro arquivo do projeto contém dados
 * "hardcoded" da empresa — tudo é lido a partir daqui.
 *
 * Para trocar telefone, WhatsApp, Instagram, nome, slogan,
 * horário ou lista de serviços, edite apenas os valores abaixo.
 * ============================================================
 */

const COMPANY = {
  name: "JC Prime Guincho",
  shortName: "JC Prime",
  slogan: "Rápido, Seguro e Confiável.",
  city: "São Paulo",
  state: "SP",
  fullLocation: "São Paulo - SP",

  // Telefone/WhatsApp em formato de exibição
  whatsappDisplay: "(11) 99479-7777",

  // Telefone/WhatsApp em formato técnico (usado nos links)
  whatsappNumber: "5511994797777", // formato internacional, só dígitos

  instagramHandle: "@jcprimeguinchos",
  instagramUrl: "https://www.instagram.com/jcprimeguinchos?stkn=MWlvY2YwNGowN2trMQ==",

  // Mensagem padrão enviada ao clicar em "Chamar no WhatsApp"
  whatsappDefaultMessage:
    "Olá! Encontrei a JC Prime Guincho pelo site e preciso de um serviço de guincho.",

  services: [
    {
      id: "guincho",
      name: "Guincho",
      description: "Transporte e remoção de veículos com segurança.",
      icon: "truck",
    },
    {
      id: "pane-seca",
      name: "Pane Seca",
      description: "Ficou sem combustível? Conte com nosso atendimento.",
      icon: "fuel",
    },
    {
      id: "troca-pneu",
      name: "Troca de Pneu",
      description: "Auxílio rápido para troca de pneu.",
      icon: "tire",
    },
    {
      id: "bateria",
      name: "Bateria",
      description: "Suporte para problemas relacionados à bateria do veículo.",
      icon: "battery",
    },
    {
      id: "transporte",
      name: "Transporte de Veículos",
      description: "Transporte seguro de veículos para diferentes destinos.",
      icon: "route",
    },
  ],

  faq: [
    {
      question: "Quais serviços a JC Prime oferece?",
      answer:
        "Guincho, pane seca, troca de pneu, bateria e transporte de veículos.",
    },
    {
      question: "Como solicitar um guincho?",
      answer:
        "Basta chamar a gente no WhatsApp ou preencher o formulário de contato com sua localização e o que aconteceu.",
    },
    {
      question: "A JC Prime realiza transporte de veículos?",
      answer: "Sim, fazemos transporte seguro de veículos para diferentes destinos.",
    },
    {
      question: "Vocês atendem situações de pane?",
      answer: "Sim, atendemos pane seca, problemas de bateria e troca de pneu.",
    },
    {
      question: "Como entrar em contato?",
      answer: "Pelo WhatsApp da JC Prime Guincho — é o canal mais rápido para falar com a gente.",
    },
  ],
};

/**
 * Monta a URL do WhatsApp com uma mensagem (texto simples, sem HTML).
 * Se nenhuma mensagem for passada, usa a mensagem padrão da empresa.
 */
function buildWhatsappUrl(message) {
  const text = message || COMPANY.whatsappDefaultMessage;
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

