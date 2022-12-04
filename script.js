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
        let chars = area1.split('');

        for (let i = 0; i < chars.length; i++) {
            if (chars[i] == "a" || chars[i] == "A") { response += "%"; }
            else if (chars[i] == "b" || chars[i] == "B") { response += "#"; }
            else if (chars[i] == "c" || chars[i] == "C") { response += ")"; }
            else if (chars[i] == "d" || chars[i] == "D") { response += "="; }
            else if (chars[i] == "e" || chars[i] == "E") { response += "¿"; }
            else if (chars[i] == "f" || chars[i] == "F") { response += "/"; }
            else if (chars[i] == "g" || chars[i] == "G") { response += "$"; }
            else if (chars[i] == "h" || chars[i] == "H") { response += "'"; }
            else if (chars[i] == "i" || chars[i] == "I") { response += "}"; }
            else if (chars[i] == "j" || chars[i] == "J") { response += "-"; }
            else if (chars[i] == "k" || chars[i] == "K") { response += "."; }
            else if (chars[i] == "l" || chars[i] == "L") { response += ","; }
            else if (chars[i] == "m" || chars[i] == "M") { response += "!"; }
            else if (chars[i] == "n" || chars[i] == "N") { response += "]"; }
            else if (chars[i] == "ñ" || chars[i] == "Ñ") { response += "°"; }
            else if (chars[i] == "o" || chars[i] == "O") { response += "|"; }
            else if (chars[i] == "p" || chars[i] == "P") { response += "_"; }
            else if (chars[i] == "q" || chars[i] == "Q") { response += ";"; }
            else if (chars[i] == "r" || chars[i] == "R") { response += "+"; }
            else if (chars[i] == "s" || chars[i] == "S") { response += "<"; }
            else if (chars[i] == "t" || chars[i] == "T") { response += ">"; }
            else if (chars[i] == "u" || chars[i] == "U") { response += "?"; }
            else if (chars[i] == "v" || chars[i] == "V") { response += "¡"; }
            else if (chars[i] == "w" || chars[i] == "W") { response += '"'; }
            else if (chars[i] == "x" || chars[i] == "X") { response += '{'; }
            else if (chars[i] == "y" || chars[i] == "Y") { response += '['; }
            else if (chars[i] == "z" || chars[i] == "Z") { response += '('; }

            else if (chars[i] == "¿") { response += '1'; }
            else if (chars[i] == "?") { response += '2'; }
            else if (chars[i] == "¡") { response += '3'; }
            else if (chars[i] == "!") { response += '4'; }
            else if (chars[i] == "(") { response += '5'; }
            else if (chars[i] == ")") { response += '6'; }
            else if (chars[i] == ",") { response += '7'; }
            else if (chars[i] == ".") { response += '8'; }
            else if (chars[i] == ":") { response += '9'; }
            else if (chars[i] == ";") { response += '0'; }
            else if (chars[i] == "+") { response += 'p'; }
            else if (chars[i] == "-") { response += 'm'; }
            else if (chars[i] == '"') { response += 'c'; }
            else if (chars[i] == '/') { response += 'd'; }
            else if (chars[i] == '*') { response += 'a'; }

            else if (chars[i] == " " || chars[i] == " ") { response += " "; }
        }

        console.log(response);
        area2.textContent = response;
    }else if (sourceLang.value == "Encriptado") {
        let chars = area1.split('');

        for (let i = 0; i < chars.length; i++) {
            if (chars[i] == "%") { response += "a"; }
            else if (chars[i] == "#") { response += "b"; }
            else if (chars[i] == ")") { response += "c"; }
            else if (chars[i] == "=") { response += "d"; }
            else if (chars[i] == "¿") { response += "e"; }
            else if (chars[i] == "/") { response += "f"; }
            else if (chars[i] == "$") { response += "g"; }
            else if (chars[i] == "'") { response += "h"; }
            else if (chars[i] == "}") { response += "i"; }
            else if (chars[i] == "-") { response += "j"; }
            else if (chars[i] == ".") { response += "k"; }
            else if (chars[i] == ",") { response += "l"; }
            else if (chars[i] == "!") { response += "m"; }
            else if (chars[i] == "]") { response += "n"; }
            else if (chars[i] == "°") { response += "ñ"; }
            else if (chars[i] == "|") { response += "o"; }
            else if (chars[i] == "_") { response += "p"; }
            else if (chars[i] == ";") { response += "q"; }
            else if (chars[i] == "+") { response += "r"; }
            else if (chars[i] == "<") { response += "s"; }
            else if (chars[i] == ">") { response += "t"; }
            else if (chars[i] == "?") { response += "u"; }
            else if (chars[i] == "¡") { response += "v"; }
            else if (chars[i] == '"') { response += "w"; }
            else if (chars[i] == "{") { response += 'x'; }
            else if (chars[i] == "[") { response += 'y'; }
            else if (chars[i] == "(") { response += 'z'; }

            else if (chars[i] == "1") { response += '¿'; }
            else if (chars[i] == "2") { response += '?'; }
            else if (chars[i] == "3") { response += '¡'; }
            else if (chars[i] == "4") { response += '!'; }
            else if (chars[i] == "5") { response += '('; }
            else if (chars[i] == "6") { response += ')'; }
            else if (chars[i] == "7") { response += ','; }
            else if (chars[i] == "8") { response += '.'; }
            else if (chars[i] == "9") { response += ':'; }
            else if (chars[i] == "0") { response += ';'; }
            else if (chars[i] == "p") { response += '+'; }
            else if (chars[i] == "m") { response += '-'; }
            else if (chars[i] == 'c') { response += '"'; }
            else if (chars[i] == 'd') { response += '/'; }
            else if (chars[i] == 'a') { response += '*'; }
            
            else if (chars[i] == " " || chars[i] == " ") { response += " "; }
        }

        console.log(response);
        area2.textContent = response;
    }
}