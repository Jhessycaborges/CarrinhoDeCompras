function alterarQtd(produto, acao) {
    const qtd = document.getElementById('qtd' + produto);
    const valor = document.getElementById('valor' + produto);
    const total = document.getElementById('total' + produto);

    acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--;
    total.innerHTML = (qtd.innerHTML * valor.innerHTML).toFixed(2);
}