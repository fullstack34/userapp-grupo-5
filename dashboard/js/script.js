import MenuHtml from "../components/MenuHtml.js";

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('menu').innerHTML = MenuHtml();
    inicializandoModoEscuro();
});

function inicializandoModoEscuro() {
    const body = document.querySelector("body"),
        modeSwitch = body.querySelector(".toggle-switch"),
        modeText = body.querySelector(".mode-text");

    modeSwitch.addEventListener('click', () => {
        console.log("Switch clicked");
        body.classList.toggle("dark");
        if (body.classList.contains("dark")) {
            modeText.innerHTML = "Modo claro";
        } else {
            modeText.innerHTML = "Modo escuro";
        }
    });
}
