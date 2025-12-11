

const LANG = {
    en: {
        typing: "OSINT Specialist • Python Developer",
        bio: "Cybersecurity researcher focusing on malware behavior, data-exfiltration techniques, and analysis of offensive tools for educational and defensive purposes.",
        skills_title: "Skills",
        skills: ["OSINT Software", "Python Development", "Security Research", "Pentest Utilities"],
        contacts_title: "Contacts",
        discord: "Discord",
        email: "Email"
    },
    ru: {
        typing: "OSINT специалист • Python разработчик",
        bio: "Исследователь кибербезопасности, изучающий поведение вредоносного ПО, методы эксфильтрации данных и анализ наступательных инструментов для образовательных и защитных целей.",
        skills_title: "Навыки",
        skills: ["OSINT инструменты", "Python разработка", "Исследование безопасности", "Инструменты пентеста"],
        contacts_title: "Контакты",
        discord: "Дискорд",
        email: "Почта"
    }
};



let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    document.querySelector("[data-text='bio']").innerHTML = LANG[lang].bio;
    document.querySelector("[data-text='skills_title']").innerHTML = LANG[lang].skills_title;
    document.querySelector("[data-text='contacts_title']").innerHTML = LANG[lang].contacts_title;
    document.querySelector("[data-text='discord']").innerHTML = LANG[lang].discord;
    document.querySelector("[data-text='email']").innerHTML = LANG[lang].email;

    const skillsList = document.getElementById("skills-list");
    skillsList.innerHTML = "";
    LANG[lang].skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    i = 0;
    document.getElementById("typing").innerHTML = "";
    typeEffect();
}

const langBtn = document.getElementById("lang-btn");
const langMenu = document.getElementById("lang-menu");

langBtn.addEventListener("click", () => {
    langMenu.classList.toggle("hidden");
});

document.querySelectorAll("#lang-menu div").forEach(el => {
    el.addEventListener("click", () => {
        applyLanguage(el.dataset.lang);
        langMenu.classList.add("hidden");
    });
});



let i = 0;
function typeEffect() {
    let txt = LANG[currentLang].typing;
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeEffect, 60);
    }
}



const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});



document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    document.querySelectorAll(".parallax").forEach((layer, index) => {
        const depth = (index + 1) * 8;
        layer.style.transform = `translate(${x / depth}px, ${y / depth}px)`;
    });
});



applyLanguage(currentLang);
