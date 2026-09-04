// ==============================
// TYPING EFFECT
// ==============================

const typingText =
    "Wishing you a day filled with love, laughter and beautiful memories... 💖";

const typingElement =
    document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index < typingText.length) {

        typingElement.textContent +=
            typingText.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

typeWriter();


// ==============================
// FLOATING HEARTS
// ==============================

const heartSymbols = [
    "❤️",
    "💕",
    "💖",
    "💗",
    "💓",
    "💘",
    "🌸",
    "✨"
];


function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() * heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    heart.style.setProperty(
        "--move",
        (Math.random() * 200 - 100) + "px"
    );

    document.body.appendChild(heart);


    setTimeout(() => {
        heart.remove();
    }, 10000);

}


setInterval(createHeart, 350);


// ==============================
// SURPRISE POPUP
// ==============================

const surpriseBtn =
    document.getElementById("surpriseBtn");

const popup =
    document.getElementById("popup");

const closeBtn =
    document.getElementById("closeBtn");


surpriseBtn.addEventListener("click", () => {

    popup.classList.add("active");

    // Extra hearts
    for (let i = 0; i < 30; i++) {

        setTimeout(() => {
            createHeart();
        }, i * 80);

    }

});


closeBtn.addEventListener("click", () => {

    popup.classList.remove("active");

});


popup.addEventListener("click", (event) => {

    if (event.target === popup) {
        popup.classList.remove("active");
    }

});


// ==============================
// CLICK HEART EFFECT
// ==============================

document.addEventListener("click", (event) => {

    const heart = document.createElement("div");

    heart.textContent = "💖";

    heart.style.position = "fixed";

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    heart.style.pointerEvents = "none";

    heart.style.fontSize = "25px";

    heart.style.zIndex = "999";

    heart.style.animation =
        "clickHeart 1s ease forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);

});


// Add click animation dynamically

const style = document.createElement("style");

style.innerHTML = `

@keyframes clickHeart {

    0% {
        transform: translate(-50%, -50%) scale(.5);
        opacity: 1;
    }

    100% {
        transform:
            translate(-50%, -150px)
            scale(1.8);
        opacity: 0;
    }

}`;

document.head.appendChild(style);
