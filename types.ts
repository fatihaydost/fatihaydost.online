import type { ReactNode } from 'react';

export interface Command {
  cmd: string;
  description: string;
  action: () => void;
}

export interface HistoryItem {
  id: string;
  type: 'input' | 'output' | 'component';
  content: string | ReactNode;
}

export interface Project {
  id: number;
  title: string;
  url: string;
  tech: string[];
  description: string;
  status: 'ONLINE' | 'OFFLINE' | 'DEVELOPMENT';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  details: string[];
}
