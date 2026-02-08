const text = [
    ">> WARNING: He is Too dangerous...",
    ">> All actions are logged...",
    ">> Proceed only if you know what you are doing..."
];

let line = 0;
let char = 0;
const speed = 40;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
    if (line < text.length) {
        if (char < text[line].length) {
            typewriter.innerHTML += text[line].charAt(char);
            char++;
            setTimeout(typeEffect, speed);
        } else {
            typewriter.innerHTML += "<br>";
            char = 0;
            line++;
            setTimeout(typeEffect, 600);
        }
    }
}

typeEffect();

function acknowledgeWarning() {
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "access.html";
    }, 1200);
}


