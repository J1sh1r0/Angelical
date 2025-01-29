function createStars(num) {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < num; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let delay = Math.random() * 5;
        let size = Math.random() * 1 + 2;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDuration = `${4 + Math.random() * 3}s`;
        star.style.animationDelay = `${delay}s`;

        starsContainer.appendChild(star);
    }
}

createStars(120);

// Video player navigation
const videoSources = ["video1.mp4", "video2.mp4", "video3.mp4"]; // Lista de videos
let currentVideoIndex = 0;
const videoPlayer = document.getElementById("videoPlayer");

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoSources.length) % videoSources.length;
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
}