function createStars(num) {
    const starsContainer = document.querySelector('.stars');
    // Primero aseguramos que no existan estrellas previas
    starsContainer.innerHTML = ''; 

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
const videoSources = ["Video1.mp4", "Video2.mp4", "Video3.mp4", "Video4.mp4"]; // Lista de videos
let currentVideoIndex = 0;
const videoPlayer = document.getElementById("videoPlayer");

// Ajustar tamaño del video para mantener diseño uniforme
videoPlayer.style.width = "100%";
videoPlayer.style.height = "auto";
videoPlayer.style.maxHeight = "400px"; // Altura máxima fija para evitar cambios en la página

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


// Función para alternar la visibilidad de la información del servicio
function toggleInfo(infoId) {
    const allInfos = document.querySelectorAll('.service-info');
    allInfos.forEach(info => {
        if (info.id !== infoId) {
            info.style.display = 'none'; // Ocultar los otros
        }
    });

    const infoElement = document.getElementById(infoId);
    if (infoElement.style.display === 'none' || infoElement.style.display === '') {
        infoElement.style.display = 'block'; // Mostrar la información seleccionada
    } else {
        infoElement.style.display = 'none'; // Ocultar la información si ya está visible
    }
}

function toggleInfo(infoId) {
    const allInfos = document.querySelectorAll('.service-info');
    const allServices = document.querySelectorAll('.service');
    
    // Ocultar la información de los otros servicios
    allInfos.forEach(info => {
        if (info.id !== infoId) {
            info.classList.remove('show'); // Eliminar la clase 'show' para esconder la info
            setTimeout(() => {
                info.style.display = 'none'; // Escondemos con display 'none' después de la transición
            }, 500); // Este tiempo debe coincidir con la duración de la transición
        }
    });

    const infoElement = document.getElementById(infoId);
    const serviceElement = document.getElementById(infoId.replace('info', 'E')); // Obtener el div de servicio correspondiente
    
    // Alternar la visibilidad de la información
    if (!infoElement.classList.contains('show')) {
        infoElement.style.display = 'block'; // Aseguramos que se muestre
        setTimeout(() => {
            infoElement.classList.add('show'); // Aplicamos la transición con la clase 'show'
        }, 10); // Retardamos para que la transición se vea
        // Añadir el brillo solo al servicio seleccionado
        allServices.forEach(service => {
            service.classList.remove('active'); // Eliminar brillo de todos los demás
        });
        serviceElement.classList.add('active'); // Aplicar el brillo al servicio actual
    } else {
        infoElement.classList.remove('show'); // Eliminar la clase 'show' para que se oculte
        setTimeout(() => {
            infoElement.style.display = 'none'; // Escondemos con display 'none' después de la transición
        }, 500); // Este tiempo debe coincidir con la duración de la transición
        serviceElement.classList.remove('active'); // Eliminar el brillo del servicio
    }
}
