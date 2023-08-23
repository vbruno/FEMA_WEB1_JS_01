// 1 - variável sem atribuição de valor
var variavel1;
// 2 - variável com atribuição de valor
var variavel2 = 10;
// 3 - variável com atribuição de valor do tipo let
let variavel3 = 20;
// 4 - variável com atribuição de valor do tipo const
const variavel4 = 30;

// 5 - Dados primitivos
// 5.1 - String
// let nome = "João";
// let nome1 = "joão";
// let dado = "25";

// 5.2 - Number
// let idade = 25;
// let idade1 = 25.5;
// console.log(typeof idade);
// console.log(typeof idade1);

// 5.3 - Boolean
// let possuiCarro = true;
// let possuiCasa = false;
// console.log(typeof possuiCarro);
// console.log(typeof possuiCasa);

// 5.4 - Undefined
// let nome2;
// console.log(typeof nome2);

// 5.5 - Null
// let nome3 = null;
// console.log(typeof nome3);

// 5.6 - NaN
// let nome4 = "João";
// let idade2 = 25;
// console.log(nome4 * idade2);

// 5.7 - Infinity
// console.log(5 / 0);

// 6 - Dados não primitivos
// 6.1 - Array
let frutas = ["maçã", 35, true];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(typeof frutas);

console.log("\n--------------------\n\n");

// 6.2 - Object
let carro = {
  modelo: "Fiat",
  ano: 2018,
};

console.log(carro);
console.log(carro.modelo);
console.log(carro.ano);
console.log(typeof carro);

console.log("\n--------------------\n\n");

// 6.3 - Function
// 6.3.1 - Função sem parâmetro
function exibirMensagem() {
  console.log("Olá, mundo!");
}

exibirMensagem();

// 6.3.2 - Função com parâmetro
function exibirNome(nome) {
  console.log("Olá, " + nome + "!");
}

exibirNome("Bruno");

// 6.3.3 - Função com retorno
function soma(a, b) {
  return a + b;
}

let resultado = soma(10, 20);

// 7 - Operadores
// 7.1 - Aritméticos
// 7.1.1 - Soma
let soma1 = 10 + 20;
console.log(soma1);

// 7.1.2 - Subtração
let subtracao = 10 - 20;
console.log(subtracao);

// 7.1.3 - Multiplicação
let multiplicacao = 10 * 20;
console.log(multiplicacao);

// 7.1.4 - Divisão
let divisao = 10 / 20;
console.log(divisao);

// 7.1.5 - Módulo
let modulo = 10 % 20;
console.log(modulo);

// 7.1.6 - Incremento
let incremento = 10;
incremento = incremento + 1;
incremento++;

console.log(incremento);

// 7.1.7 - Decremento
let decremento = 10;
decremento = decremento - 1;
decremento--;

console.log(decremento);

// 7.1.8 - Exponenciação
let exponenciacao = 10 ** 2;
console.log(exponenciacao);

// 7.1.9 - Operador de agrupamento
let agrupamento = (10 + 20) * 30;
console.log(agrupamento);

// 7.1.10 - Operador de negação
let negacao = -10;
console.log(negacao);

// 7.1.11 - Operador de concatenação
let nome5 = "João";
let sobrenome = "Silva";

let nomeCompleto = nome5 + " " + sobrenome;
console.log(nomeCompleto);

// 7.1.12 - Operador de comparação
let valor = 10;
let valor1 = 20;

console.log(valor > valor1);
console.log(valor < valor1);
console.log(valor >= valor1);
console.log(valor <= valor1);

// 7.1.13 - Operador de igualdade restrita
let valor3 = 10;
let valor4 = "10";

console.log(valor3 === valor4);
console.log(valor3 !== valor4);

// 7.1.14 - Operador de igualdade solta
let valor5 = 10;
let valor6 = "10";

console.log(valor5 == valor6);
console.log(valor5 != valor6);

// 7.1.15 - Operador lógico AND
let valor7 = 10;
let valor8 = 20;

console.log(valor7 > 5 && valor8 < 30);

// 7.1.16 - Operador lógico OR
let valor9 = 10;
let valor10 = 50;

console.log(valor9 > 5 || valor10 < 30);

// 7.1.17 - Operador lógico NOT
let valor11 = 10;
let valor12 = 50;

console.log(!(valor11 > 5 || valor12 < 30));

// 7.2 - Atribuição
// 7.2.1 - Atribuição de soma
let soma2 = 10;
soma2 += 20;
console.log(soma2);

let letras = "abc";
letras += "def";
console.log(letras);

// 7.2.2 - Atribuição de subtração

let subtracao1 = 10;
subtracao1 -= 20;
console.log(subtracao1);

// 7.2.3 - Atribuição de multiplicação

let multiplicacao1 = 10;
multiplicacao1 *= 20;
console.log(multiplicacao1);

// 7.2.4 - Atribuição de divisão

let divisao1 = 10;
divisao1 /= 20;
console.log(divisao1);

// 7.2.5 - Atribuição de módulo

let modulo1 = 10;
modulo1 %= 20;
console.log(modulo1);

// 7.2.6 - Atribuição de exponenciação

let exponenciacao1 = 10;
exponenciacao1 **= 20;
console.log(exponenciacao1);

// 7.3 - Decisão (if/else);
// 7.3.1 - if
let idade3 = 25;

if (idade3 >= 18) {
  console.log("Pode dirigir!");
}

// 7.3.2 - if/else
let idade4 = 15;
if (idade4 >= 18) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir!");
}

// 7.3.3 - if/else if/else
let idade5 = 16;
if (idade5 >= 18) {
  console.log("Pode dirigir!");
} else if (idade5 >= 16) {
  console.log("Pode dirigir com acompanhante!");
} else {
  console.log("Não pode dirigir!");
}

// 7.3.4 - if aninhado
let idade6 = 16;
let possuiCNH = true;

if (idade6 >= 18) {
  if (possuiCNH) {
    console.log("Pode dirigir!");
  } else {
    console.log("Não pode dirigir!");
  }
}

// 7.3.5 - Operador ternário
let idade7 = 16;

idade7 >= 18 ? console.log("Pode dirigir!") : console.log("Não pode dirigir!");

// 7.3.6 - Operador ternário aninhado
let idade8 = 20;
let possuiCNH1 = false;

idade8 >= 18 && possuiCNH1
  ? console.log("Pode dirigir!")
  : console.log("Não pode dirigir!");

// 7.3.7 - Switch
let dia = 1;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido!");
    break;
}

// 7.4 - Repetição (for)
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 7.5 - Repetição (while)
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// 7.6 - Repetição (do while)
let i1 = 0;
do {
  console.log(i1);
  i1++;
} while (i1 < 10);
