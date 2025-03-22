function alterarQtd(produto, acao) {
    const qtd = document.getElementById('qtd' + produto);
    const valor = document.getElementById('valor' + produto);
    const total = document.getElementById('total' + produto);

    if (acao == '-' && qtd.innerHTML == 0) {
        
    } else {
        acao == '+' ? qtd.innerHTML++ : qtd.innerHTML--;
        total.innerHTML = (qtd.innerHTML * valor.innerHTML).toFixed(2);
        soma();
    }
}

function soma() {
    let soma = 0;

    for(let i = 1; i < 4; i++) {
        soma += Number(document.getElementById('total' + i).innerHTML);
    }

    document.getElementById('subTotal').innerHTML = soma.toFixed(2);
}