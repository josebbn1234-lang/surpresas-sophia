// ==============================================================================
// CONFIGURAÇÃO DO SITE - 1 ANO E 6 MESES DE NAMORO
// NETO & MARIA SOPHIA
// ==============================================================================
// Todas as informações editáveis estão centralizadas aqui para fácil personalização.

/**
 * DATA DE INÍCIO DO NAMORO
 * Formato obrigatório: "AAAA-MM-DD" (Exemplo: "2025-04-11")
 * Altere para o dia exato em que o namoro começou.
 */
export const DATA_INICIO_NAMORO = "2025-04-11";

export interface CoupleConfig {
  partnerName: string;      // Nome dela
  authorName: string;       // Seu nome
  milestoneTitle: string;   // Marco comemorado
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  counterPhrase: string;
  audioPath: string;        // Caminho da música em /public
}

export interface TimelineEvent {
  id: string;
  tag: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  video?: string;           // Vídeo mudo (tem prioridade sobre a imagem)
  caption?: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  aspect?: 'tall' | 'wide' | 'square';
  featured?: boolean;
}

export interface LoveLetterConfig {
  title: string;
  salutation: string;
  paragraphs: string[];
  finalNote: string;
  signature: string;
}

export interface SurpriseConfig {
  teaser: string;
  buttonText: string;
  primaryQuote: string;
  secondaryMessage: string;
}

export interface FinalSectionConfig {
  headline: string;
  loveDeclaration: string;
  signature: string;
}

// Configurações Gerais do Casal
export const COUPLE_DATA: CoupleConfig = {
  partnerName: "Maria Sophia",
  authorName: "Neto",
  milestoneTitle: "1 ano e 6 meses",
  heroTitle: "Para o amor da minha vida, Maria Sophia ❤️",
  heroSubtitle: "1 ano e 6 meses da nossa história... e eu escolheria você em todas as versões da minha vida.",
  heroButtonText: "Clique para começar nossa história",
  counterPhrase: "1 ano e 6 meses de nós. E ainda parece que meu coração está descobrindo você pela primeira vez.",
  audioPath: "/audio/nossa-musica.mp3",
};

// Linha do Tempo: Momentos marcantes
export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: "comeco",
    tag: "O Começo",
    title: "O começo da nossa história",
    date: "O primeiro contato",
    description: "Aquele primeiro instante em que nossos caminhos se cruzaram e o universo conspirou para que você se tornasse o meu pensamento favorito todos os dias.",
    image: "/images/nos.jpg",
    video: "/images/o-comeco-da-nossa-historia.mp4",
    caption: "O sorriso que mudou o meu mundo para sempre."
  },
  {
    id: "dia-especial",
    tag: "Oficialmente Nós",
    title: "O dia em que tudo começou",
    date: "O pedido inesquecível",
    description: "Quando demos as mãos com a certeza de que ali começava a melhor aventura das nossas vidas. O 'sim' que preencheu meus dias de paz e amor.",
    image: "/images/o-dia-em-que-tudo-comecou.jpeg",
    caption: "O instante em que dois corações escolheram caminhar juntos."
  },
  {
    id: "memorias",
    tag: "Nossas Aventuras",
    title: "Nossas memórias favoritas",
    date: "Momentos inesquecíveis",
    description: "Cada viagem, cada gargalhada compartilhada até a barriga doer, cada abraço apertado depois de um dia longo. As memórias que guardo como joias no peito.",
    image: "/images/nossas-memorias-favoritas.jpeg",
    caption: "Guardado no melhor lugar da minha memória."
  },
  {
    id: "simplicidade",
    tag: "O Amor nos Detalhes",
    title: "Os momentos simples que se tornaram especiais",
    date: "A beleza do cotidiano",
    description: "Conversar sobre tudo e sobre nada, o café da manhã devagar, assistir séries juntos enrolados na coberta. É na calma de estar com você que eu encontro o meu lar.",
    image: "/images/os-momentos-simples.jpeg",
    caption: "A felicidade mais pura está nas coisas simples com você."
  },
  {
    id: "futuro",
    tag: "Nosso Amanhã",
    title: "Tudo o que ainda vamos viver juntos",
    date: "Infinitos capítulos pela frente",
    description: "Sonhos que ainda vamos realizar, viagens que ainda vamos fazer e todas as conquistas que construiremos lado a lado. O futuro é lindo porque tem você nele.",
    image: "/images/tudo-o-que-ainda-vamos-viver-juntos.png",
    caption: "Apenas o comecinho de uma vida inteira juntos."
  }
];

// Galeria de Fotos do Álbum de Memórias
export const GALLERY_PHOTOS: PhotoItem[] = [
  {
    id: "foto-1",
    title: "Nós Dois",
    caption: "O seu abraço é o meu lugar seguro favorito no mundo inteiro.",
    image: "/images/nos-dois.jpeg",
    aspect: "tall",
    featured: true
  },
  {
    id: "foto-2",
    title: "Seu Sorriso",
    caption: "A razão pela qual os meus dias são infinitamente mais coloridos.",
    image: "/images/seu-sorriso.jpeg",
    aspect: "square"
  },
  {
    id: "foto-4",
    title: "Cumplicidade",
    caption: "Dois corações que se entendem até no silêncio de um olhar.",
    image: "/images/cumplicidade.jpeg",
    aspect: "square"
  },
  {
    id: "foto-6",
    title: "Para Sempre",
    caption: "1 ano e 6 meses... e a certeza inabalável de te amar cada dia mais.",
    image: "/images/para-sempre.jpeg",
    aspect: "wide"
  }
];

// Carta de Amor
export const LOVE_LETTER: LoveLetterConfig = {
  title: "Uma carta para você, meu amor",
  salutation: "Minha Maria Sophia,",
  paragraphs: [
    "Hoje celebramos 1 ano e 6 meses da nossa história, e eu só consigo pensar na sorte que tenho por ter você na minha vida.",
    "Entre tantos caminhos que eu poderia seguir, sou feliz por ter encontrado o meu ao seu lado. Você tornou muitos momentos mais especiais e me mostrou que o amor também está nas pequenas coisas: nos sorrisos, nas conversas, nos abraços e na felicidade de simplesmente estar perto de você.",
    "Se eu pudesse reviver tudo desde o começo, com todos os momentos bons e os desafios que fizeram parte da nossa história, eu ainda escolheria conhecer você, me apaixonar por você e continuar construindo tudo isso ao seu lado.",
    "Obrigado por ser minha companheira, por fazer parte da minha vida e por compartilhar comigo essa história tão nossa.",
    "Feliz 1 ano e 6 meses, meu amor. Que esse seja apenas mais um capítulo de uma história que ainda tem tantas páginas bonitas para escrever."
  ],
  finalNote: "Eu te amo, Maria Sophia. ❤️",
  signature: "Com todo o meu amor,\nNeto."
};

// Seção Surpresa
export const SURPRISE_DATA: SurpriseConfig = {
  teaser: "Preparei uma coisinha especial para você...",
  buttonText: "Abrir minha surpresa ❤️",
  primaryQuote: "Se eu tivesse que escolher novamente, entre todas as pessoas do mundo, meu coração ainda procuraria você.",
  secondaryMessage: "Você é uma das partes mais bonitas da minha vida. Feliz 1 ano e 6 meses, minha princesa. ❤️ — Neto"
};

// Seção Final
export const FINAL_SECTION: FinalSectionConfig = {
  headline: "1 ano e 6 meses de uma história que eu quero continuar escrevendo com você. ❤️",
  loveDeclaration: "Eu te amo, Maria Sophia.",
  signature: "Para sempre seu, Neto."
};
