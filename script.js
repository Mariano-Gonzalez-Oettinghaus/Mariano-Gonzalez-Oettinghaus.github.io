// Obtén todos los elementos span dentro de la clase "bubbles"
const spanElements = document.querySelectorAll('.bubbles span');

// Calcula la mitad de la longitud de los elementos span
const halfLength = Math.ceil(spanElements.length / 2);

// Función para ocultar la mitad de los elementos span
function hideHalfSpans() {
  for (let i = 0; i < halfLength; i++) {
    spanElements[i].style.display = 'none';
  }
}

// Verifica el ancho de la ventana cuando se carga la página
if (window.innerWidth < 450) {
  hideHalfSpans();
}

// Agrega una oreja de evento para cambiar el estilo cuando se cambie el tamaño de la ventana
window.addEventListener('resize', () => {
  if (window.innerWidth < 450) {
    hideHalfSpans();
  } else {
    for (let i = 0; i < spanElements.length; i++) {
      spanElements[i].style.display = 'block';
    }
  }
});












//sin terminar

// ============ SCRIPT LIBRERIA TYPED.JS ==========
// const typed = new Typed('#typed', {
//     strings: ['Desarrollador Front-End', 'Estudiante de Ing. Sistemas'],
//     typeSpeed: 75,
//     startDelay: 300,
//     backSpeed: 65,
//     backDelay: 2500,
//     loop: true
// })


// // ============ SCRIPT LIBRERIA TYPED.JS ==========
// const sr= ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 1500,
//     delay: 400,
// })

// sr.reveal('.titulo',{origin: 'bottom', delay: 0})
// sr.reveal('.mensaje',{origin: 'bottom', delay: 300})

