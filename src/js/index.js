

const BotaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")


BotaoAlterarTema.addEventListener("click", () => {
    const ModoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (ModoEscuroEstaAtivo) {
        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});

