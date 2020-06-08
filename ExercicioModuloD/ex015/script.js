function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas`;

    hora = 20
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanha.png';
        document.body.style.background = '#b2917e';
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'fototarde.png';
        document.body.style.background = '#c29e24';
    } else {
        //Boa noite
        img.src = 'fotonoite.png';
        document.body.style.background = '#461a0b';

    }
}