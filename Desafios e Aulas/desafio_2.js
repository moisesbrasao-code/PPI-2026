/* Questão 1 — Média de notas e filtro de aprovados
Contexto
Você recebeu uma lista de alunos. Cada aluno possui um nome e um array de notas.

const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];
Considere que a média mínima para aprovação é 7.
*/

console.log(`Questão 1- Média de notas e filtro de aprovados`);
const alunos = [
  { nome: "Ana", notas: [8, 7, 9] },
  { nome: "Bruno", notas: [5, 6, 5] },
  { nome: "Carla", notas: [9, 9, 10] },
  { nome: "Diego", notas: [6, 7, 8] },
];

const alunosAprovados = alunos
  .map(aluno => ({
    nome: aluno.nome,
    media: aluno.notas.reduce((soma, nota) => soma + nota, 0) / aluno.notas.length
  }))
  .filter(aluno => aluno.media >= 7)
  .sort((a, b) => b.media - a.media);

console.log(alunosAprovados);




/*Questão 2 — Catálogo de filmes com busca e ordenação
Contexto
Você recebeu um catálogo de filmes. Cada filme possui título, ano e gênero.

const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];*/

console.log(`Questão 2-Catálogo de filmes com busca e ordenação`);
const filmes = [
  { titulo: "O Senhor dos Anéis", ano: 2001, genero: "fantasia" },
  { titulo: "Matrix", ano: 1999, genero: "ficção" },
  { titulo: "Interestelar", ano: 2014, genero: "ficção" },
  { titulo: "Divertida Mente", ano: 2015, genero: "animação" },
];

function buscarFilmes(genero, criterio) {
  const filmesFiltrados = filmes.filter(filme => filme.genero === genero);
  const filmesOrdenados = filmesFiltrados.slice().sort((a, b) => {
    if (criterio === "ano") {
      return b.ano - a.ano;
    }
    return a.titulo.localeCompare(b.titulo, "pt-BR", { sensitivity: "base" });
  });

  return filmesOrdenados.map(
    filme => `${filme.titulo} (${filme.ano}) - ${filme.genero}`
  );
}

console.log(buscarFilmes("ficção", "ano"));


 




