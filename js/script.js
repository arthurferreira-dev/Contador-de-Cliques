    var clickTXT = document.getElementById('cliques');
    var btnTXT = document.getElementById('txt-btn');
    var button = document.getElementById('click-btn');
    var consquista = document.querySelector('aside#consquistas');
    var autoClickStarted = false;
    var autoClickStarted2 = false;
    var autoClickStarted3 = false;
    var autoClickStarted4 = false;

    var click = parseInt(localStorage.getItem('clicks')) || 0;
    clickTXT.innerHTML = `${click}`;

    var conquistasDesbloqueadas = JSON.parse(localStorage.getItem('conquistas')) || {};

    function addConquista(text) {
        const paragraphe = document.createElement('p');
        paragraphe.style.backgroundColor = '#999999';
        paragraphe.style.padding = '4px';
        paragraphe.innerHTML = text;
        consquista.appendChild(paragraphe);
    }

    function reaplicarConquistasSalvas() {
        if (conquistasDesbloqueadas["50"]) addConquista('"Primeira Conquista!" (50 cliques) <br>');
        if (conquistasDesbloqueadas["100"]) addConquista('"100 muito fácil" (100 cliques) <br>');
        if (conquistasDesbloqueadas["250"]) addConquista('"250, tá de sacanagem?" (250 cliques) <br>');
        if (conquistasDesbloqueadas["500"]) addConquista('"Roubo Louco" (500 cliques - Sadi Porera) <br>');
        if (conquistasDesbloqueadas["666"]) {
            addConquista('"O número da besta..." (666 cliques) <br>');
            button.style.backgroundColor = '#001';
            btnTXT.style.color = '#ff0000';
            btnTXT.innerText = 'PARE DE CLICAR';
        }
        if (conquistasDesbloqueadas["700"]) {
            addConquista('"O normal?" (700 cliques) <br>');
            button.style.backgroundColor = '#d81111';
            btnTXT.style.color = '#001';
            btnTXT.innerText = 'Clique aqui!';
        }
        if (conquistasDesbloqueadas["1000"]) addConquista('"Pra quê?" (1.000 cliques) <br>');
        if (conquistasDesbloqueadas["1350"]) addConquista('"Dúvivo (1.350 cliques)" <br>');
        if (conquistasDesbloqueadas["1500"]) addConquista('... (1.500 cliques) <br>');
        if (conquistasDesbloqueadas["3000"]) addConquista('CHEGA! (3.000 cliques) <br>');
    }

    reaplicarConquistasSalvas();

    function clique() {
        click += 1;
        clickTXT.innerHTML = `${click}`;
        localStorage.setItem('clicks', click);

        if (click === 50 && !conquistasDesbloqueadas["50"]) {
            alert('Muito bem, você conseguiu sua primeira conquista. "Primeira Conquista!"');
            addConquista('"Primeira Conquista!" (50 cliques) <br>');
            conquistasDesbloqueadas["50"] = true;
        }

        if (click === 100 && !conquistasDesbloqueadas["100"]) {
            alert('Parabéns, você desbloqueou a conquista. "100 muito fácil"');
            addConquista('"100 muito fácil" (100 cliques) <br>');
            conquistasDesbloqueadas["100"] = true;
        }

        if (click === 250 && !conquistasDesbloqueadas["250"]) {
            alert('Boaa, você desbloqueou a conquista. "250, tá de sacanagem?"');
            addConquista('"250, tá de sacanagem?" (250 cliques) <br>');
            alert('Agora você tem clique automático com 4 segundos!');
            autoClick();
            conquistasDesbloqueadas["250"] = true;
        }

        if (click === 500 && !conquistasDesbloqueadas["500"]) {
            alert('Parabéns, você descobriu seu primeiro EASTEREGG. "Roubo Louco"');
            addConquista('"Roubo Louco" (500 cliques - Sadi Porera) <br>');
            conquistasDesbloqueadas["500"] = true;
        }

        if (click === 666 && !conquistasDesbloqueadas["666"]) {
            alert('Você descobriu demais! "O número da besta"');
            addConquista('"O número da besta..." (666 cliques) <br>');
            button.style.backgroundColor = '#001';
            btnTXT.style.color = '#ff0000';
            btnTXT.innerText = 'PARE DE CLICAR';
            conquistasDesbloqueadas["666"] = true;
        }

        if (click === 700 && !conquistasDesbloqueadas["700"]) {
            alert('Voltou ao normal? "O normal?"');
            addConquista('"O normal?" (700 cliques) <br>');
            button.style.backgroundColor = '#d81111';
            btnTXT.style.color = '#001';
            btnTXT.innerText = 'Clique aqui!';
            autoClickv2();
            conquistasDesbloqueadas["700"] = true;
        }

        if (click === 1000 && !conquistasDesbloqueadas["1000"]) {
            alert('Por quê, você ainda continua clicando? "Pra quê?"');
            addConquista('"Pra quê?" (1.000 cliques) <br>');
            conquistasDesbloqueadas["1000"] = true;
        }

        if (click === 1350 && !conquistasDesbloqueadas["1350"]) {
            alert('Dúvido você clicar mais que 1.500 vezes! "Dúvivo"');
            addConquista('Dúvivo (1.350 cliques) <br>')
            conquistasDesbloqueadas["1350"] = true;
        }

        if (click === 1500 && !conquistasDesbloqueadas["1500"]) {
            alert('...');
            addConquista('... (1.500 cliques) <br>')
            conquistasDesbloqueadas["1500"] = true;
            autoClickv3();
        }

        if (click === 3000 && !conquistasDesbloqueadas["3000"]) {
            alert('CHEGA!')
            addConquista('CHEGA! (3.000 cliques) <br>')
            conquistasDesbloqueadas["3000"] = true;
            autoClickv4();
        }

        if (click === 10000 && !conquistasDesbloqueadas["10000"]) {
            alert('Você venceu!')
            addConquista('Você venceu! (10.000 cliques) <br>')
            conquistasDesbloqueadas["10000"] = true;
            autoClickStarted = false;
            autoClickStarted2 = false;
            autoClickStarted3 = false;
            autoClickStarted4 = false;
            win();
        }

        localStorage.setItem('conquistas', JSON.stringify(conquistasDesbloqueadas));
    }

    function autoClick() {
        if (!autoClickStarted) {
            autoClickStarted = true;
            setInterval(clique, 4000, click > 250);
        }
    }

    function autoClickv2() {
        if (!autoClickStarted2) {
            autoClickStarted2 = true;
            setInterval(() => {
                clique();
                clique();
            }, 300, click > 700);
        }
    }

    function autoClickv3() {
        if (!autoClickStarted3) {
            autoClickStarted3 = true;
            setInterval(() => {
                clique();
                clique();
                clique();
            }, 100);
        }
    }

    function autoClickv4() {
        if (!autoClickStarted4) {
            autoClickStarted4 = true;
            setInterval(() => {
                clique();
                clique();
                clique();
                clique();
                clique();
                clique();
                clique();
                clique();
                clique();
                clique();
                clique();
                clique();
                clique();
                clique();
            }, 10);
        }
    }

    function reset() {
        if (confirm("Tem certeza que quer resetar o progresso?")) {
            localStorage.clear();
            location.reload();
        }
    }

    function win() {
        localStorage.clear();
        location.reload();
    }