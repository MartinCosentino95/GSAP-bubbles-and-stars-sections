const bubbleContainer = document.querySelector(".bubble-container");
const starContainer = document.querySelector(".star-container");

function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    let size = Math.random() * 40 + 10;
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";
    bubble.style.left = Math.random() * window.innerWidth + "px";

    bubbleContainer.appendChild(bubble);

    gsap.to(bubble, {
        duration: Math.random() * 5 + 3,
        y: -window.innerHeight - size,
        opacity: 0,
        ease: "power1.out",
        onComplete: () => {
            bubble.remove();
            createBubble();
        },
    });
}

function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    let size = Math.random() * 4 + 2; // Estrellas más pequeñas
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    starContainer.appendChild(star);

    gsap.to(star, {
        duration: Math.random() * 3 + 2,
        opacity: Math.random() * 0.5 + 0.5, // Parpadeo aleatorio
        repeat: -1,
        yoyo: true, // Hace que el parpadeo vaya y vuelva
        ease: "power1.inOut",
    });
}

for (let i = 0; i < 20; i++) {
    setTimeout(createBubble, i * 400);
}

for (let i = 0; i < 50; i++) {
    // Más estrellas
    createStar();
}