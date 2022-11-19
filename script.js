let menu = document.querySelector(".menu");
let overlay = document.querySelector(".menu-overlay");
let menu_button = document.querySelector(".menu-icon");
let close_button = document.querySelector(".close-icon");

if (window.innerWidth < 600) {
    menu.style.display="none";
}

menu_button.addEventListener('click', ()=>{
    overlay.style.display="block";
    menu.style.display="flex";
})

close_button.addEventListener('click', ()=>{
    overlay.style.display="none";
    menu.style.display="none";
})
