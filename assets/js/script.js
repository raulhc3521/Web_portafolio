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
function open_modal1() {
    var modal1 = document.querySelector('.modal-1');
    var body = document.querySelector('body');
    var modal = document.querySelector('.modal--overflow1');

    modal1.style.cssText = "opacity: 0; visibility: visible;";
    setTimeout(() => {
        modal1.style.opacity = 1;
    }, this.animationDelay + 20);
    if (screen.width > 1200) {
        modal.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0"; 
    }    
    body.style.overflow = "hidden";
    
    
}
function open_modal2() {
    var modal2 = document.querySelector('.modal-2');
    var body = document.querySelector('body');
    var modal = document.querySelector('.modal--overflow2');

    modal2.style.cssText = "opacity: 0; visibility: visible;";
    setTimeout(() => {
        modal2.style.opacity = 1;
    }, this.animationDelay + 20);
    if (screen.width > 1200) {
        modal.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0"; 
    }    
    body.style.overflow = "hidden"; 
}
function open_modal3() {
    var modal3 = document.querySelector('.modal-3');
    var body = document.querySelector('body');
    var modal = document.querySelector('.modal--overflow3');

    modal3.style.cssText = "opacity: 0; visibility: visible;";
    setTimeout(() => {
        modal3.style.opacity = 1;
    }, this.animationDelay + 20);
    if (screen.width > 1200) {
        modal.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0"; 
    }    
    body.style.overflow = "hidden";
}
function open_modal4() {
    var modal4 = document.querySelector('.modal-4');
    var body = document.querySelector('body');
    var modal = document.querySelector('.modal--overflow4');

    modal4.style.cssText = "opacity: 0; visibility: visible;";
    setTimeout(() => {
        modal4.style.opacity = 1;
    }, this.animationDelay + 20);
    if (screen.width > 1200) {
        modal.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0"; 
    }    
    body.style.overflow = "hidden";
}

function close_modal() {
    var modal1 = document.querySelector('.modal-1');
    var modal2 = document.querySelector('.modal-2');
    var modal3 = document.querySelector('.modal-3');
    var modal4 = document.querySelector('.modal-4');
    var body = document.querySelector('body');
    var modalo1 = document.querySelector('.modal--overflow1');
    var modalo2 = document.querySelector('.modal--overflow2');
    var modalo3 = document.querySelector('.modal--overflow3');
    var modalo4 = document.querySelector('.modal--overflow4');

    body.style.overflow = "auto"; 
    if (screen.width > 1200) {
        modalo1.style.margin = "10px 10px 10px 10px";
        modalo2.style.margin = "10px 10px 10px 10px";
        modalo3.style.margin = "10px 10px 10px 10px";
        modalo4.style.margin = "10px 10px 10px 10px";
        body.style.margin = "0 0px 0 0"; 
    }
    modal1.style.opacity = 1;
    modal2.style.opacity = 1;
    modal3.style.opacity = 1;
    modal4.style.opacity = 1;
    setTimeout(() => {
        modal1.style.cssText = "opacity: 0; visibility: hidden;";
        modal2.style.cssText = "opacity: 0; visibility: hidden;";
        modal3.style.cssText = "opacity: 0; visibility: hidden;";
        modal4.style.cssText = "opacity: 0; visibility: hidden;";
    }, this.animationDelay + 20);
}