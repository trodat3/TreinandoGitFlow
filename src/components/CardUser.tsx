import { type GitHubUser } from "../interface/GithubAPI";

interface CardUserProps {
  user: GitHubUser;
}

export default function CardUser({ user }: CardUserProps) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "20px",
      width: "250px",
      textAlign: "center",
      margin: "20px auto",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <img src={user.avatar_url} width={100} style={{ borderRadius: "50%" }} />
      <h3>{user.name}</h3>
      <p>@{user.login}</p>
      <p>{user.bio}</p>
      <p>Repos: {user.public_repos}</p>
    </div>
  );
}