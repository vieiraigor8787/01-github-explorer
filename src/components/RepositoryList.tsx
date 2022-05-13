import { useEffect, useState } from "react";
import "../styles/repositories.scss";

import { RepositoryItem } from './RepositoryItem';

interface Repository {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repository, setRepository] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((res) => res.json())
      .then((data) => setRepository(data));
  }, []);

  return (
    <section>
      <h1>Lista de repositórios</h1>
      <ul>
       {repository.map(repo=> {
           return <RepositoryItem key={repo.name} repository={repo} />
       })}
      </ul>
    </section>
  );
}
