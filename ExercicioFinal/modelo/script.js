let valores = [];
let soma = 0;
let num = document.getElementById('txtn');
let lista = document.getElementById('selnum');
let res = document.getElementById('res');

function add() {
    if(num.value.length == 0) {
        window.alert("Por favor, insira um número para ser adicionado!");
    } else if (num.value >= 1 && num.value <= 100) {
        res.innerHTML = '';
        let n = Number(num.value);
        valores.push(n);
        let item = document.createElement('option');
        item.text = `Valor ${n} adicionado.`;
        lista.appendChild(item);
        soma += n;
    } else {
        window.alert('Valor não permitido!')
    }
    
}

function total() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    } else {
        valores.sort();
        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${valores[valores.length - 1]}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${valores[0]}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores é ${soma/valores.length}.</p>`;
    }
}
