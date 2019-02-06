//Menu
let navbarLinks = document.querySelector(".navbar-links");
let navbarSocial = document.querySelector(".navbar-social");


//Contact
let contactDiv = document.querySelector(".contact");
//Links and Buttons
let menu = document.getElementById("menu");
let contact = document.querySelector(".contact-btn");

menu.addEventListener("click",function(){
    if(navbarLinks.classList){
        navbarLinks.classList.toggle("pop-in");
        navbarSocial.classList.toggle("pop-out");
    }
});

contact.addEventListener("click",function(){
    if(contactDiv.classList){
        contactDiv.classList.toggle("contact-in");
    }
});