// Variables

let sourceLang = document.getElementById("source-lang");
let targetLang = document.getElementById("target-lang");
let actionBtn = document.getElementById("action-btn")

let area1 = document.getElementById("area1");
let area2 = document.getElementById("area2");

let swapLangsBtn = document.getElementById("swap-lang");

// Listeners

swapLangsBtn.addEventListener('click', () => {
    if (sourceLang.value == "Encriptado") { targetLang.value = "Encriptado";sourceLang.value = "No encriptado" }
    else if (targetLang.value == "Encriptado") { sourceLang.value = "Encriptado";targetLang.value = "No encriptado" }
});

actionBtn.addEventListener('click', () => {
    encrypt();
});

function encrypt() {
    let response = "";
    area1 = document.getElementById("area1").value;
    area2 = document.getElementById("area2");

    

    if (sourceLang.value == "No encriptado") {
        area2.textContent = btoa(area1);
    }else if (sourceLang.value == "Encriptado") {
        area2.textContent = atob(area1);
    }
}