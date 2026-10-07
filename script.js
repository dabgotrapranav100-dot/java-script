/* =========================
   TYPEWRITER MESSAGE
========================= */

const typingText = document.getElementById("typingText");

const message =
    "I don't really know where to start, so I'll just be honest... I'm sorry for hurting you.";

let index = 0;
let typingStarted = false;


function typeMessage() {

    if (index < message.length) {

        typingText.textContent += message.charAt(index);

        index++;

        setTimeout(typeMessage, 45);

    }

}


/* =========================
   OPEN LETTER
========================= */

function openLetter() {

    const letter =
        document.getElementById("letter");

    letter.scrollIntoView({
        behavior: "smooth"
    });

    if (!typingStarted) {

        typingStarted = true;

        setTimeout(() => {
            typeMessage();
        }, 700);

    }

}


/* =========================
   SURPRISE MESSAGE
========================= */

function showSurprise() {

    const message =
        document.getElementById("surpriseMessage");

    message.classList.toggle("show");

    createHearts(25);

}


/* =========================
   FLOATING HEARTS
========================= */

function createHearts(number = 8) {

    const symbols = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "♡"
    ];

    for (let i = 0; i < number; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 8000);

    }

}


/* =========================
   AUTOMATIC BACKGROUND HEARTS
========================= */

setInterval(() => {

    createHearts(1);

}, 2500);


/* =========================
   MUSIC BUTTON
========================= */

const musicBtn =
    document.getElementById("musicBtn");

const music =
    document.getElementById("backgroundMusic");

let musicPlaying = false;


musicBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play()
            .then(() => {

                musicPlaying = true;

                musicBtn.textContent = "🔊";

            })
            .catch(() => {

                alert(
                    "Add a file named music.mp3 to your project folder first."
                );

            });

    } else {

        music.pause();

        musicPlaying = false;

        musicBtn.textContent = "🎵";

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const sections =
    document.querySelectorAll(
        ".memory-card, .reason, .promise-box"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.animation =
                        "fadeUp 0.8s ease forwards";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


sections.forEach(section => {

    section.style.opacity = "0";

    observer.observe(section);

});