export type ProjectStatus = 'Live' | 'Testing' | 'In progress' | 'Exploring';

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  question: string;
  description: string;
  status: ProjectStatus;
  href?: string;
  action?: string;
  screenshot?: {
    src: string;
    alt: string;
  };
}

export const projects: Project[] = [
  {
    id: 'oyesun',
    number: '01',
    name: 'OyeSun',
    category: 'AI companion',
    question: 'Can an AI feel easier to talk to when it speaks the way you do?',
    description: 'I’m building an AI companion for people who want someone to listen, in the languages and everyday mix they naturally speak.',
    status: 'Live',
    href: 'https://oyesun.fimolabs.com',
    action: 'Open OyeSun',
    screenshot: {
      src: '/media/oyesun.webp',
      alt: 'OyeSun’s public homepage introducing its multilingual AI companion.'
    }
  },
  {
    id: 'support-router',
    number: '02',
    name: 'AI Support Router',
    category: 'Local AI · Evals',
    question: 'Can a local model route complaints and prove when it is wrong?',
    description: 'A local model routes fictional delivery complaints. I’m building evals to expose wrong queues and measure improvements.',
    status: 'In progress'
  },
  {
    id: 'check-in',
    number: '03',
    name: 'Check In',
    category: 'Voice AI · Family',
    question: 'Can a daily AI call improve the next family conversation?',
    description: 'A short daily voice call for parents that sends families concise WhatsApp context before they call home.',
    status: 'In progress',
    href: 'https://checkin.fimolabs.com',
    action: 'Open Check In',
    screenshot: {
      src: '/media/checkin.webp',
      alt: 'Check In’s public homepage explaining its daily calls and family updates.'
    }
  },
  {
    id: 'digital-twin',
    number: '04',
    name: 'Digital Twin',
    category: 'Health · Simulation',
    question: 'How could a digital twin model health scenarios?',
    description: 'An exploration of how a digital twin could model health scenarios using simulated data.',
    status: 'Exploring'
  },
  {
    id: 'automation-bot',
    number: '05',
    name: 'AI Automation Bot',
    category: 'AI · Interaction',
    question: 'What if an assistant could do the work while you watch?',
    description: 'I’m designing a floating assistant to sit on top of an app and carry out tasks while you watch. The long term goal is to make it work across different apps.',
    status: 'Exploring'
  }
];
