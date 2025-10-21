export interface GitHubUser {
  login: string;          // nome de usuário
  avatar_url: string;     // foto
  name: string | null;    // nome real (pode ser null)
  bio: string | null;     // biografia
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;       // link do perfil
}