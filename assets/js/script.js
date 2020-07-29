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
var body = document.querySelector('body');


function open_modal1() {
    modal1.style.visibility = "visible";
    modal1.style.opacity = 0;
    setTimeout(() => {
        modal1.style.opacity = 1;
    }, this.animationDelay + 20);
    body.style.overflow = "hidden";
    body.style.margin = "0 6px 0 0"; 
}
function open_modal2() {
    modal2.style.visibility = "visible";
    modal2.style.opacity = 0;
    setTimeout(() => {
        modal2.style.opacity = 1;
    }, this.animationDelay + 20);
    body.style.overflow = "hidden";
    body.style.margin = "0 6px 0 0";  
}
function open_modal3() {
    modal3.style.visibility = "visible";
    modal3.style.opacity = 0;
    setTimeout(() => {
        modal3.style.opacity = 1;
    }, this.animationDelay + 20);
    body.style.overflow = "hidden";
    body.style.margin = "0 6px 0 0"; 
}
function open_modal4() {
    modal4.style.visibility = "visible";
    modal4.style.opacity = 0;
    setTimeout(() => {
        modal4.style.opacity = 1;
    }, this.animationDelay + 20);
    body.style.overflow = "hidden";
    body.style.margin = "0 6px 0 0";  
}


function close_modal() {
    body.style.overflow = "auto";
    body.style.margin = "0 0 0 0"; 
    modal1.style.opacity = 1;
    modal2.style.opacity = 1;
    modal3.style.opacity = 1;
    modal4.style.opacity = 1;
    setTimeout(() => {
        modal1.style.opacity = 0;
        modal2.style.opacity = 0;
        modal3.style.opacity = 0;
        modal4.style.opacity = 0;
    }, this.animationDelay + 20);
    modal1.style.visibility = "hidden";
    modal2.style.visibility = "hidden";
    modal3.style.visibility = "hidden";
    modal4.style.visibility = "hidden";
}

