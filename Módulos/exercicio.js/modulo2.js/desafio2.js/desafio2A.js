const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 4.0 },
  { nome: "Carla", nota: 7.0 },
  { nome: "Diego", nota: 5.5 },
  { nome: "Elena", nota: 9.5 },
  { nome: "Felipe", nota: 6.0 }
];

let somaNotas = 0;
let quantidadeAprovados = 0;
let maiorNota = alunos[0].nota;
let alunoMaiorNota = alunos[0].nome;

for (let i = 0; i < alunos.length; i++) {
  let aluno = alunos[i];
  let situacao;

  if (aluno.nota >= 7) {
    situacao = "Aprovado";
    quantidadeAprovados++;
  } else if (aluno.nota >= 5) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }

  console.log(`${aluno.nome}: ${situacao}`);

  somaNotas += aluno.nota;

  if (aluno.nota > maiorNota) {
    maiorNota = aluno.nota;
    alunoMaiorNota = aluno.nome;
  }
}

const mediaTurma = somaNotas / alunos.length;

console.log(`Média da turma: ${mediaTurma}`);
console.log(`Quantidade de aprovados: ${quantidadeAprovados}`);
console.log(`Aluno com maior nota: ${alunoMaiorNota} (${maiorNota})`);