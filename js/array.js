const aprovados = ['Victor', 'Marcela','Leo','Mike'];

const pesquisaNome = aprovados.indexOf('Alice');
if(pesquisaNome === -1){
    console.log("não encontrado")
}else{
    console.log(`O elemento foi encontrado, seu indice é: ${pesquisaNome}`)
}

// includes

var lojinha = ['Kiwi', 'Pera','Uva','Maça'];

const pesquisaFruta = lojinha.includes('Uva');
if(pesquisaFruta === false){
    console.log("não encontrado")
}else{
    console.log(`O elemento foi encontrado, seu indice é: ${pesquisaFruta}`)
};

// includes trabalha com true or false
