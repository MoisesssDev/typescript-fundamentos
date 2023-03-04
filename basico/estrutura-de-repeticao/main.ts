// for
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while
let i: number = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Do while
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);

//for in
let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (let index in pessoa) {
    console.log(`${index}: ${pessoa[index]}`);
}

//forEach
let numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero) => {
    console.log(numero);
});