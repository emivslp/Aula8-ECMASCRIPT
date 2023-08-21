const nome = "victor";
const sobreNome = "santos";
const cartao = "4841"

// maneira simples 
// var nomeCompleto = nome + " " + sobreNome;
// var nomeCompleto = `${nome} + " " + ${sobreNome}`;

var nomeCompletoStart = sobreNome.padStart(12,nome);
console.log(nomeCompletoStart);

var nomeCompletoEnd = sobreNome.padEnd(12, nome);
console.log(nomeCompletoEnd)

const cartaoEscondido = cartao.padStart(16,"*");
console.log(cartaoEscondido);