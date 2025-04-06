const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY>100);
});

let navibar =document.querySelector('.navibar');
let menu =document.querySelector('#menu-icon');

menu.onclick =()=>{

    menu.classList.toggle('bx-x');
    navibar.classList.toggle('open');
};

window.onscroll=()=>{

    menu.classList.remove('bx-x');
    navibar.classList.remove('open');
};
