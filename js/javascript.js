// Función para desplazarse al inicio de la página
function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Mostrar u ocultar el botón en función del desplazamiento vertical
  window.onscroll = function() {
    var btn = document.getElementById('btn-goto-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  };