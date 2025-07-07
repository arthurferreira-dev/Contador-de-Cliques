var clickTXT = document.getElementById('cliques');
clickTXT.innerHTML = '0';
var btnTXT = document.getElementById('txt-btn');
var button = document.getElementById('click-btn');
var click = 0;
var consquista = document.querySelector('aside#consquistas');
var paragraphe = document.createElement('p');
paragraphe.style.backgroundColor = '#999999';
paragraphe.style.padding = '4px'
var autoClickStarted = false;
var body = document.querySelector('body');

function addConquista(text) {
    const p = document.createElement('p');
    p.style.backgroundColor = '#999999';
    p.style.padding = '4px';
    p.innerHTML = text;
    consquista.appendChild(p);
}

function clique() {
    click += 1;
    clickTXT.innerHTML = `${click}`

    if (click == 50) {
        alert('Muito bem, você consegui sua primeira consquista. \"Primeira Conquista!\"')
        addConquista('\"Primeira Conquista!\" (50 cliques) <br>');
    }

    if (click == 100) {
        alert('Parabéns, você desbloqueou a consquista. \"100 muito fácil\"');
        addConquista('\"100 muito fácil\" (100 cliques) <br>');
    }

    if (click == 250) {
        alert('Boaa, você desbloqueou a conquista. \"250, tá de sacanagem?\"')
        addConquista('\"250, tá de sacanagem?\" (250 cliques) <br>');
        alert('Agora você tem clique automático com 4 segundos!')
        autoClick();
    }

    if (click == 500) {
        alert('Parabéns, você descubriu seu primeiro EASTEREGG. \"Roubo Louco\"');
        addConquista('\"Roubo Louco\" (500 cliques - Sadi Porera)')
    }

    if (click == 666) {
        alert('Você descubriu demais! \"O número da besta\"')
        addConquista('\"O número da besta...\" (666 cliques) <br>');
        button.style.backgroundColor = '#001'
        btnTXT.style.color = '#ff0000'
        btnTXT.innerText = 'PARE DE CLICAR'
    }
}

function autoClick() {
    if (!autoClickStarted) {
        autoClickStarted = true;
        setInterval(clique, 4000);
    }
}