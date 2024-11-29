function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNaTela('h1', 'SITE DE TREINO');
exibirTextoNaTela('p', 'Já treinou baiano?');

// seu código inicia aqui em baixo

function tabuadaComFor(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    };
};

tabuadaComFor(1);

function fingeEnter() {
    console.log('')
};

fingeEnter();

let i = 1;

function tabuadaComWhile(numero) {
    while (i <= 10) {
        let resultado = numero * 1;
        console.log(`${numero} x ${i} = ${resultado}` );
        i++;
    };
};

tabuadaComWhile(2);