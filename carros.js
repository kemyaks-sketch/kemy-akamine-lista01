const carros = [
    { marca: "Toyota", modelo: "Corolla", ano: 2018 },
    { marca: "Ford", modelo: "Fiesta", ano: 2014 },
    { marca: "Chevrolet", modelo: "Onix", ano: 2020 },
    { marca: "Volkswagen", modelo: "Gol", ano: 2012 },
    { marca: "Honda", modelo: "Civic", ano: 2016 }
];

console.log("Carros fabricados depois de 2015:");

carros.forEach(carro => {
    if (carro.ano > 2015) {
        console.log(`${carro.marca} ${carro.modelo} - Ano: ${carro.ano}`);
    }
});
