export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  description: string | null;
}

export interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  body?: string | null;
  state: string;
  html_url: string;
}

export interface GitHubCommitResult {
  sha: string;
  html_url: string;
  message: string;
}

export interface MCPToolResponse {
  content: Array<{
    type: "text";
    text: string;
  }>;
  isError?: boolean;
}