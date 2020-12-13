/* Inicialización wow */
new WOW().init();


/* Inicialización multislider */
$('#exampleSlider').multislider({
    interval:5000,
});


/* Scroll suave */
$('header a').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;
    $('html, body').animate({ 
        scrollTop: targetOffset - 100
    }, 500);
});


/* Botón enviar del formulario*/
function enviar() {
    var texto = document.getElementById("mensaje").innerHTML = `Este formulario es un ejemplo. Si te quieres incribir al curso, debes ponerte en contacto con <a href="https://www.balmesinnova.com/cursos/confeccion-publicacion-paginas-web/" target="_blank"><b>Balmes Innova</b></a>.`;

    texto = document.getElementById('mensaje').style.display;
    
    if (texto == 'block') {
        texto = 'none';
    } else {
        texto = 'block';
    }
    document.getElementById('mensaje').style.display = texto;
}