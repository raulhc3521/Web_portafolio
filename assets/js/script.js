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

function device() {
    window.mobileAndTabletCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      };
}


//Funciones Modales
function open_modal1() {
    var modal1 = document.querySelector('.modal-1');
    var body = document.querySelector('body');
    var modal = document.querySelector('.modal--overflow1');

    modal1.style.cssText = "opacity: 0; visibility: visible;";
    setTimeout(() => {
        modal1.style.opacity = 1;
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