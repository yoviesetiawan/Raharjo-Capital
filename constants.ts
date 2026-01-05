import { NavItem, Service, TeamMember, PortfolioItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About Us', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact', id: 'contact' },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Private Equity',
    description: 'Strategic capital injection for high-growth potential companies across Southeast Asia.',
    icon: 'briefcase'
  },
  {
    id: 's2',
    title: 'Wealth Management',
    description: 'Tailored financial planning and asset management for high-net-worth individuals and families.',
    icon: 'trending-up'
  },
  {
    id: 's3',
    title: 'Corporate Advisory',
    description: 'Expert guidance on mergers, acquisitions, and restructuring to maximize shareholder value.',
    icon: 'users'
  },
  {
    id: 's4',
    title: 'Venture Capital',
    description: 'Early-stage funding and mentorship for disruptive technology startups.',
    icon: 'rocket'
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Budi Raharjo',
    role: 'Founder & CEO',
    bio: 'With over 25 years in investment banking, Budi leads the strategic vision of the firm.',
    imageUrl: 'https://picsum.photos/id/1005/400/400'
  },
  {
    id: 't2',
    name: 'Sarah Wijaya',
    role: 'Chief Investment Officer',
    bio: 'Sarah oversees global asset allocation and risk management strategies.',
    imageUrl: 'https://picsum.photos/id/1027/400/400'
  },
  {
    id: 't3',
    name: 'Michael Chen',
    role: 'Head of Fintech',
    bio: 'A visionary in the digital finance space, leading our tech-focused ventures.',
    imageUrl: 'https://picsum.photos/id/1012/400/400'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    client: 'Nusantara Logistics',
    category: 'Infrastructure',
    description: 'Series B funding and strategic restructuring for nationwide expansion.',
    value: '$45M',
    year: '2023',
    imageUrl: 'https://picsum.photos/id/1076/800/600'
  },
  {
    id: 'p2',
    client: 'GreenEnergy Indo',
    category: 'Renewables',
    description: 'Project finance for a 50MW solar farm development in East Java.',
    value: '$120M',
    year: '2022',
    imageUrl: 'https://picsum.photos/id/1018/800/600'
  },
  {
    id: 'p3',
    client: 'FinTech Asia',
    category: 'Technology',
    description: 'Seed investment and incubation for a leading payment gateway.',
    value: '$8M',
    year: '2024',
    imageUrl: 'https://picsum.photos/id/60/800/600'
  }
];