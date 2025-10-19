document.addEventListener('DOMContentLoaded', () => {

    // 1. Lógica del Menú Hamburguesa (Responsive Navbar)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active'); // Opcional: para cambiar el ícono
        });

        // Ocultar menú al hacer clic en un enlace (en móvil)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });
    }
  const items = document.querySelectorAll('.carousel-item');
let currentItem = 0;
const totalItems = items.length;

function nextSlide() {
  if (items.length === 0) return;

  // Pausar video actual si lo hay
  const currentVideo = items[currentItem].querySelector('video');
  if (currentVideo) {
    currentVideo.pause();
    currentVideo.currentTime = 0;
  }

  // Quitar 'active' del actual
  items[currentItem].classList.remove('active');

  // Pasar al siguiente
  currentItem = (currentItem + 1) % totalItems;

  // Activar siguiente slide
  items[currentItem].classList.add('active');

  // Reproducir video si lo hay
  const nextVideo = items[currentItem].querySelector('video');
  if (nextVideo) {
    nextVideo.play();
  }
 }

    // Cambiar cada 4.5 segundos
    if (totalItems > 1) {
  setInterval(nextSlide, 4500);
   }

   
    // 3. Animación de Productos al hacer Scroll (Scroll Reveal)
    const productCards = document.querySelectorAll('.product-card');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Añade la clase 'visible' para la animación (definida en CSS)
                    entry.target.classList.add('visible');
                    // Deja de observar el elemento una vez animado
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            // Activar cuando el 15% del elemento es visible
            threshold: 0.15, 
        });

        productCards.forEach(card => {
            observer.observe(card);
        });
    } else {
        // Fallback simple para navegadores antiguos
        productCards.forEach(card => card.classList.add('visible'));
    }

    
});