# Github-Repository-Search
![image](https://github.com/kuating/Github-Repository-Search/assets/34279732/7ba1ce74-8b66-428e-b08b-e1f3a54143f8)

## Funcionalidade
A aplicação foi hospedada na nuvem para fácil interação: https://github-repo-search-hzlguorog-kuating.vercel.app/
<br/><br/>
A busca é feita utilizando a GitHub REST API, se buscam divesos campos, inclusive nome de usuário. A ordenação é de mais para menos estrelas (supostamente, olhar problemas encontrados).
<br/>
Existe um limite pequeno de requests para proteger o sistema de spam, se esse limite for atingido a aplicação não mostrará resultados.
<br/><br/>
### Existem duas versões do mesmo programa:

* A primeira surgiu por limitação de tempo e conta apenas com a funcionalidade, o básico. Para rodar, abrir index.html no navegador.
* A segunda foi postada posteriormente e conta com frontend feito em React, utilizando Next.js.

<br/><br/>
## Problemas encontrados:
A busca ordenada por estrelas não funciona muito bem. Um exercício é pesquisar por "C", e ver a variedade de resultados. Aparentemente esse problema não foi exclusivo a mim [(Issue)]([url](https://github.com/isaacs/github/issues/1446)).
