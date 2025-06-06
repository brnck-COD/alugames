function contarJogosAlugados() {
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');

    let totalAlugados = jogosAlugados.length;
    console.log(`Total de jogos alugados: ${totalAlugados}`);
    let totalAlugadosElement = document.getElementById('total-alugados');
    return totalAlugados;

}


function alterarStatus(id) {

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    
    if (imagem.classList.contains('dashboard__item__img--rented')){
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
         }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
    
    contarJogosAlugados();  
}

