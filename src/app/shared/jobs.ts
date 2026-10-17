export interface Job {
  key: string;
  url: string;
  start: string;
  end: string | null;
  items: number[];
}

// Do mais recente para o mais antigo. Textos em assets/i18n ("experiences.<key>...").
export const JOBS: Job[] = [
  { key: 'benner', url: 'https://www.benner.com.br/', start: '2024-12', end: null, items: [1, 2, 3, 4, 5, 6, 7, 8] },
  { key: 'sinck', url: 'https://sinck.com.br/', start: '2024-06', end: '2024-12', items: [1, 2, 3, 4, 5, 6] },
  { key: 'wakke', url: 'https://escolaweb.com.br/', start: '2022-01', end: '2023-07', items: [1, 2, 3, 4, 5] },
];
