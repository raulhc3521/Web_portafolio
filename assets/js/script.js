//Función de rotación
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


//Función uncheck
function uncheck() {
    document.getElementById("nav__desplegable").checked = false;
}

//Funciones Modales
var modal1 = document.querySelector('.modal-1');
var modal2 = document.querySelector('.modal-2');
var modal3 = document.querySelector('.modal-3');
var modal4 = document.querySelector('.modal-4');


function open_modal1() {
    modal1.style.visibility = "visible";
    modal1.style.opacity = 0;
    setTimeout(() => {
        modal1.style.opacity = 1;
    }, this.animationDelay + 20); 
}


function close_modal() {
    modal1.style.opacity = 1;
    setTimeout(() => {
        modal1.style.opacity = 0;
    }, this.animationDelay + 20);
    modal1.style.visibility = "hidden";    
}

