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
    
    // Obtener el servicio y la información correspondiente
    const infoElement = document.getElementById(infoId);
    const serviceElement = document.getElementById(infoId.replace('info', 'E'));

    // Si la información no está visible, mostrarla y ocultar el resto de los servicios
    if (!infoElement.classList.contains('show')) {
        // Ocultar todos los servicios y mostrar solo el seleccionado
        allServices.forEach(service => {
            if (service !== serviceElement) {
                service.style.display = 'none'; // Ocultar los otros servicios
            }
        });

        // Mostrar la información correspondiente
        infoElement.style.display = 'block'; // Aseguramos que se muestre
        setTimeout(() => {
            infoElement.classList.add('show'); // Aplicamos la transición con la clase 'show'
        }, 10); // Retardamos para que la transición se vea

        // Activar el brillo del servicio seleccionado
        serviceElement.classList.add('active');
    } else {
        // Si la información ya está visible, ocultarla y volver a mostrar los servicios
        infoElement.classList.remove('show');
        setTimeout(() => {
            infoElement.style.display = 'none'; // Escondemos con display 'none' después de la transición
        }, 500);

        // Volver a mostrar todos los servicios
        allServices.forEach(service => {
            service.style.display = 'inline-block'; // Mostrar todos los servicios
        });

        // Desactivar el brillo del servicio
        serviceElement.classList.remove('active');
    }
}

// Guardar el email del usuario después del registro
function guardarEmailUsuario(email) {
    localStorage.setItem("usuario_email", email);
}

// Llamar a esta función cuando el usuario envíe el formulario de registro
document.getElementById("formularioRegistro").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que recargue la página
    let email = document.getElementById("email").value;
    guardarEmailUsuario(email);
});
