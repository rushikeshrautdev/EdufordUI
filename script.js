let navLinks = document.querySelector(".nav-links")
let crossBtn = document.querySelector("#cross-btn")
let menuBtn = document.querySelector("#menu-btn")

menuBtn.addEventListener("click", function(){
    navLinks.style.right = "0";

})

crossBtn.addEventListener("click", function(){
    navLinks.style.right = "-900px";
})