const form = document.querySelector('form');
const searchInput = document.querySelector('#search-input');
const resultsList = document.querySelector('#results');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  resultsList.innerHTML = ""
  const searchQuery = searchInput.value;
  fetch(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&order=desc`)
    .then(response => response.json())
    .then(data => {
      const repositories = data.items;
      repositories.forEach(repository => {
        //console.log(repository)
        description = ""
        if(repository.description.lenght > 500)
            description = repository.description.substring(0,500)+"..."
        else
            description = repository.description
        const repositoryItem = document.createElement('li');
        repositoryItem.innerHTML = `
          <h2>${repository.name}</h2>
          <p>Stars: ${repository.stargazers_count}</p>
          <p>Owner: ${repository.owner.login}</p>
          <p>Language: ${repository.language}</p>
          <p>Forks: ${repository.forks}</p>
          <p>Last Update: ${repository.updated_at}</p>
          <p>Description: ${description}</p>
          <a href="${repository.html_url}" target="_blank">View on GitHub</a>
        `;
        resultsList.appendChild(repositoryItem);
      });
    });
});