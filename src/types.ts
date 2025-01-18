export interface ProgramItem {
  text: string;
  icon: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  items: ProgramItem[];
}
