
export interface ProcessLinks {
  videoLink: string;
  docLink: string;
  reqLink: string;
  figmaLink: string;
}

export interface Process {
  id: string;
  name: string;
  links: ProcessLinks;
}

export interface Phase {
  id: string;
  title: string;
  icon: string;
  processes: Process[];
}
