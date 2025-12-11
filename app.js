/* ---------- Typing text ---------- */
const text = "OSINT Specialist • Python Developer";
const speed = 60;
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, speed);
    }
}
typeEffect();

/* ---------- 3D-Tilt карточки ---------- */
const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;

    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* ---------- Параллакс движение ---------- */
document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    document.querySelectorAll(".parallax").forEach((layer, index) => {
        const depth = (index + 1) * 8;
        layer.style.transform = `translate(${x / depth}px, ${y / depth}px)`;
    });
});

