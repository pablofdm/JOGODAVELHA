// iniciar variáveis 

let tab = ['', '', '', '', '', '', '', '', ''];
let playervez = 0;
let simbolos = ['o', 'x'];
let gameOver = false;


// Tratando do caso de vitória (Game over = true )


function Movimento(posicao) {
    
    if (gameOver) {
        return ;
    }

    if (tab[posicao] == '') {
        tab[posicao] = simbolos[playervez];

        gameOver = vcGanhou();

        if (gameOver == false) {
            if (playervez == 0) {
                playervez = 1;
            } else {
                playervez = 0;
            }
        }
    }

    return gameOver;
}

// verificando se as posições dos escudos estão em posição de um caso de vitória

function vcGanhou() {
    let posiGanhou = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < posiGanhou.length; i++) {
        let seq = posiGanhou[i];
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (tab[pos1] == tab[pos2] && tab[pos1] == tab[pos3] && tab[pos1] != '') {
            return true;
        }

    }
    return false;
}

