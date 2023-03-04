// let nome: string = "João";
// let idade: number = 20;
// let isAtivo: boolean = true;

//if - else
if (idade >= 18) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}

//switch
let diaDaSemana: number = 1;
switch (diaDaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    default:
        console.log("Dia inválido");
        break;
}

// operador ternario
let mensagem = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";
console.log(mensagem);