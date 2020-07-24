//Función de rotacion
function rotate() {
    var avatar = document.querySelector('.descripcion__avatar');
    var scrollup = document.querySelector('.scroll');
    var navbar = document.querySelector('.navbar');

    if(this.scrollY > 10){
        avatar.classList.add("rotate_avatar");
        scrollup.classList.add("rotate_scrollup");
        navbar.classList.add("nav_scroll");
    } else {
        avatar.classList.remove("rotate_avatar");
        scrollup.classList.remove("rotate_scrollup");
        navbar.classList.remove("nav_scroll");
    }
}

window.addEventListener("scroll", rotate);