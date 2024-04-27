document.addEventListener('DOMContentLoaded', function () {
    var botaoJogar = document.getElementById('botaoJogar');
    var dado1 = document.getElementById('dado1');
    var dado2 = document.getElementById('dado2');
    var resultadoDisplay = document.getElementById('resultado');

    botaoJogar.addEventListener('click', jogarDados);

    function jogarDados() {
        var resultadoDado1 = Math.floor(Math.random() * 6) + 1; 
        var resultadoDado2 = Math.floor(Math.random() * 6) + 1; 

        dado1.innerText = resultadoDado1;
        dado2.innerText = resultadoDado2;

        var total = resultadoDado1 + resultadoDado2;

        if (total === 7) {
            resultadoDisplay.innerText = "Você venceu!";
            resultadoDisplay.style.color = "#bfd200"; // verde
        } else {
            resultadoDisplay.innerText = "Você perdeu!";
            resultadoDisplay.style.color = "#ba181b"; // vermelho
        }
    }
});
