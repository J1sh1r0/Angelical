let videos = ['video1.mp4', 'video2.mp4', 'video3.mp4'];
let currentVideoIndex = 0;
const videoPlayer = document.getElementById('videoPlayer');

function prevVideo() {
    currentVideoIndex = (currentVideoIndex === 0) ? videos.length - 1 : currentVideoIndex - 1;
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex === videos.length - 1) ? 0 : currentVideoIndex + 1;
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
}
