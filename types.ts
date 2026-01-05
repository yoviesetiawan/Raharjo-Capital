export type PageView = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export interface NavItem {
  label: string;
  id: PageView;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface PortfolioItem {
  id: string;
  client: string;
  category: string;
  description: string;
  value: string;
  year: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}