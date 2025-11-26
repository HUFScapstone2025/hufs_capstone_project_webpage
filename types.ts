export interface Scenario {
  id: string;
  title: string;
  errorCode: string;
  description: string;
  logSnippet: string;
  aiAnalysis: string;
  solution: string;
}

export interface WorkflowStep {
  id: number;
  title: string;
  description: string;
  tool: string;
  iconName: string;
}