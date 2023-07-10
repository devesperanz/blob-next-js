import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";
async function fetchRepos() {
  const response = await fetch(
    "https://api.github.com/users/bradtraversy/repos"
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const repos = await response.json();
  return repos;
}

async function ReposPage() {
  const repos = await fetchRepos();
  console.log(repos);
  return (
    <div className="repos-container">
      <h1>Repositories</h1>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.escription}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.forks_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReposPage;
