const nome = "Carlos";
const idade = 17;


function verificarDireitoVoto(nomeUsuario, idadeUsuario) {
    // No Brasil, o voto é obrigatório a partir dos 18 anos
    // e facultativo para jovens de 16 e 17 anos
    if (idadeUsuario >= 16) {
        console.log(`Olá, ${nomeUsuario}. Você tem ${idadeUsuario} anos e JÁ PODE votar este ano!`);
    } else {
        console.log(`Olá, ${nomeUsuario}. Você tem ${idadeUsuario} anos e AINDA NÃO PODE votar este ano.`);
    }
}

verificarDireitoVoto(nome, idade);
