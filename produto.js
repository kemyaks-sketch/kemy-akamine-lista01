const produto = {
    nome: "Notebook Pro",
    preco: 4500.99,
    estoque: 15
};

console.log("Propriedades e valores do produto:");

for (let propriedade in produto) {
    // Exibe o nome da propriedade e o valor associado a ela
    console.log(`${propriedade}: ${produto[propriedade]}`);
}
