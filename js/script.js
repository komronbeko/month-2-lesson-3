let body = document.querySelector("body");
let modeBtn = document.querySelector(".nav__div-right__btn-change");

modeBtn.addEventListener("click", function(){
    body.classList.toggle("body-dark")
})
