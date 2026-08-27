const turmas = [
    {
        nomeProfessor: "Prof. Carlos",
        alunos: [
            { nome: "Ana", nota: 5.5 },
            { nome: "Bruno", nota: 9.0 },
            { nome: "Cecília", nota: 6.8 }
        ]
    }
    {
        nomeProfessor: "Profa. Marta",
        alunos: [
            { nome: "Diego", nota: 8.5 },
            { nome: "Eduarda", nota: 4.2 },
            { nome: "Felipe", nota: 7.0 }
        ]
    }
];

function ordenarAlunosPorNota(listaTurmas) {
    listaTurmas.forEach(turma => {
               turma.alunos.sort((a, b) => a.nota - b.nota);
    });
}

function imprimirStatusAlunos(listaTurmas) {
    listaTurmas.forEach(turma => {
        console.log(`\n--- Turma do(a) ${turma.nomeProfessor} ---`);
        
        for (let aluno of turma.alunos) {
            if (aluno.nota >= 7) {
                console.log(`Parabéns ${aluno.nome} , você foi aprovado com a nota ${aluno.nota}`);
            } else {
                console.log(`Não foi dessa vez ${aluno.nome}, você reprovou com a nota ${aluno.nota}`);
            }
        }
    });
}
