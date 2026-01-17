/* ---------- Typing ---------- */
const text = "OSINT Specialist • Python Developer";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i++);
        setTimeout(typeEffect, 60);
    }
}
typeEffect();

/* ---------- 3D Card ---------- */
const card = document.getElementById("card");

document.addEventListener("mousemove", e => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

/* ---------- Parallax ---------- */
document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    document.querySelectorAll(".parallax").forEach((layer, index) => {
        const depth = (index + 1) * 8;
        layer.style.transform = `translate(${x / depth}px, ${y / depth}px)`;
    });
});

/* ---------- Modals ---------- */
function bindModal(btnId, modalId) {
    const btn = document.getElementById(btnId);
    const modal = document.getElementById(modalId);
    const close = modal.querySelector(".modal-close");

    btn.onclick = () => modal.classList.add("show");
    close.onclick = () => modal.classList.remove("show");

    modal.onclick = e => {
        if (e.target === modal) modal.classList.remove("show");
    };
}

bindModal("bombers-btn", "bombers-modal");
bindModal("tutorials-btn", "tutorials-modal");
