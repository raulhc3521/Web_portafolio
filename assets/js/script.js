//Función de rotación
function rotate() {
    var avatar = document.querySelector('.descripcion__avatar');
    var scrollup = document.querySelector('.scroll');
    var navbar = document.querySelector('.navbar');

    if(this.scrollY > 10){
        setTimeout(() => {
            avatar.classList.add("rotate_avatar");
            scrollup.classList.add("rotate_scrollup");
            navbar.classList.add("nav_scroll");
        }, 100);
        
    } else {
        setTimeout(() => {
            avatar.classList.remove("rotate_avatar");
            scrollup.classList.remove("rotate_scrollup");
            navbar.classList.remove("nav_scroll");
        }, 100);
        
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
    var pro_des = document.querySelector('.prototype-desktop');
    var pro_mob = document.querySelector('.prototype-mobile');

    modal1.style.cssText = "opacity: 0; visibility: visible;";
    setTimeout(() => {
        modal1.style.opacity = 1;
    }, 20);

    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        body.style.overflow = "hidden";
        pro_mob.style.display = "block";
    }
    else {
        modal.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0";
        body.style.overflow = "hidden";
        pro_des.style.display = "block";
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
    }, 20);
    
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        body.style.overflow = "hidden";
    }
    else {
        modal.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0";
        body.style.overflow = "hidden";
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
    }, 20);
    
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        body.style.overflow = "hidden";
    }
    else {
        modal.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0";
        body.style.overflow = "hidden";
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
    }, 20);
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        body.style.overflow = "hidden";
    }
    else {
        modal.style.margin = "10px 10px 10px 4px";
        body.style.margin = "0 6px 0 0";
        body.style.overflow = "hidden";
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
        body.style.margin = "0 0 0 0"; 
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
    }, 20);
}