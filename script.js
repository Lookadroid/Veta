const btn = document.getElementById("supportBtn");
const message = document.getElementById("message");
const personBlock = document.getElementById("personBlock");
const personName = document.getElementById("personName").textContent;

const starts = [
    "Ты",
    "Помни, ты",
    "Знай, ты",
    "Даже если тяжело, ты",
    "Несмотря ни на что, ты"
];

const qualities = [
    "сильная",
    "невероятная",
    "важная",
    "особенная",
    "ценная",
    "смелая"
];

const endings = [
    `и ${personName} всегда рядом 💙`,
    `и ${personName} верит в тебя`,
    `и для ${personName}a ты целый мир`,
    `и ${personName} гордится тобой`,
    `и ${personName} любит твою улыбку`
];

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateMessage() {
    return `${randomItem(starts)} ${randomItem(qualities)} ${randomItem(endings)}`;
}

btn.addEventListener("click", () => {
    personBlock.classList.remove("hidden");
    personBlock.classList.add("show");

    message.style.opacity = 0;

    setTimeout(() => {
        message.textContent = generateMessage();
        message.style.opacity = 1;
    }, 300);
});