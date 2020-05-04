var humbeger = document.getElementsByClassName('hamberger ')[0];
var overlay = document.getElementsByClassName('overlay')[0];
humbeger.addEventListener('click',showmenu);

function showmenu(){
    document.getElementsByClassName('menu-left')[0].classList.toggle('show');

    overlay.classList.add('hide');
}
window.onclick = function(e){
    if(e.target == this.overlay){
        this.overlay.classList.remove('hide');
        document.getElementsByClassName('menu-left')[0].classList.remove('show');
    }
}
