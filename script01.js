let nome = prompt("Digite seu nome: ");

console.log(typeof nome);

if (isNaN(nome) && nome !== "") {
  alert("Olá, " + nome + "!");
} else {
  alert("Digite um nome válido!");
}

// console.log("Olá, " + nome + "!");
// Verificar se string é um numero
// console.log(isNaN(nome));
