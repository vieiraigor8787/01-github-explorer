import { useEffect, useState } from "react";
import "../styles/repositories.scss";

import { RepositoryItem } from './RepositoryItem';

export function RepositoryList() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <section>
      <h1>Lista de repositórios</h1>
      <ul>
       {repos.map(repo=> {
           return <RepositoryItem key={repo.name} repo={repo}/>
       })}
      </ul>
    </section>
  );
}
