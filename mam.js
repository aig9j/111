let clickCount = 0;
const maxClicks = 10;
const gift = document.getElementById("gift");
const message = document.getElementById("message");
const heart = document.getElementById("heart");

function moveGift() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    gift.style.left = x + "px";
    gift.style.top = y + "px";
}

gift.addEventListener("click", () => {
    clickCount++;
    if (clickCount >= maxClicks) {
        gift.classList.add("hidden");
        message.classList.remove("hidden");
        heart.classList.remove("hidden"); // Показываем сердце
    } else {
        moveGift();
    }
});

moveGift(); // Перемещение в первый раз