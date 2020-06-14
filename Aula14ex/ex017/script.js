function contar() {
    var inicio = document.querySelector('input#itxt');
    var fim = document.querySelector('input#ftxt');
    var passo = document.querySelector('input#ptxt');
    var res = document.querySelector('div#res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        var i = Number(inicio.value);
        var f = Number(fim.value);
        var p = Number(passo.value);
        if (p == 0) {
            alert('Passo inválido. Considerando passo 1.');
            p = 1;
        } 

        if (i > f) {
            p = -p;
        }

        res.innerHTML = `<p>Contando: <p>`;

        // operador ternario monitora se vai ser indo ou voltando 
        for (var k = i; (p > 0? k <= f: k >= f); k += p) {
            res.innerHTML += `${k} \u{1F449} `;
        }

        res.innerHTML += `\u{1F3C1}`;
    }

}