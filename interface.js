document.addEventListener('DOMContentLoaded', () => {

    let quadrados = document.querySelectorAll(".quadrado");
    quadrados.forEach((quadrados) => {
        quadrados.addEventListener('click', segurarClique);
    })

})

function segurarClique(event) {

    let square = event.target;
    let posicao = square.id;

    if (Movimento(posicao)) {

        setTimeout(() => {
            if (playervez == 0) {
                alert(" O jogo acabou, você ganhou Cruzereinse!");
            } if (playervez == 1) {
                alert(" O jogo acabou, você ganhou Atléticano!");
            }


        }, 10);

    };
    updateQuadrados();
}

function updateQuadrados() {

    let quadrados = document.querySelectorAll(".quadrado");

    quadrados.forEach((square) => {
        let posicao = square.id;
        let simbolos = tab[posicao];

        if (simbolos != '') {
            square.innerHTML = `<div class='${simbolos}'></div>`
        }

    })
}

function resetar(){
    window.location.reload();
}