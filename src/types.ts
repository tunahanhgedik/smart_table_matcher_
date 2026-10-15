export type Step =
  | 'welcome'
  | 'domains'
  | 'social_style'
  | 'hobbies'
  | 'expectations'
  | 'atmosphere'
  | 'table_ready';

export interface DomainItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface ChoiceOption {
  id: string;
  badge?: string;
  title: string;
  desc: string;
  icon?: string;
  tagColor?: string;
}

export interface TableAssignment {
  tableNumber: string;
  name: string;
  domainFocus: string;
  vibe: string;
  icebreaker: string;
  backupIcebreakers: string[];
  capacity: number;
  currentCount: number;
  members: Array<{
    name: string;
    role: string;
    domain: string;
    avatarColor: string;
  }>;
}

export interface UserSelections {
  fullName: string;
  selectedDomains: string[];
  socialStyle: string; // 'opt-a' | 'opt-b' | 'opt-c'
  hobby: string; // 'opt-a' | 'opt-b' | 'opt-c' | 'opt-d'
  expectation: string; // 'networking' | 'hackathon' | 'community' | 'inspiration'
  atmosphere: string; // 'dynamic' | 'calm' | 'flexible'
  isCheckedIn: boolean;
  assignedTable?: TableAssignment;
}
