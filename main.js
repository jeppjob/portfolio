//Menu
var navbarLinks = document.querySelector(".navbar-links");
var navbarSocial = document.querySelector(".navbar-social");


//Contact
var contactDiv = document.querySelector(".contact");
//Links and Buttons
var menu = document.getElementById("menu");
var contact = document.querySelector(".contact-btn");
var close = document.querySelector(".close");
//Wrapper
var wrapper = document.getElementById("wrapper");


//functions
menu.addEventListener("click",function(){
    if(navbarLinks.classList){
        navbarLinks.classList.toggle("pop-in");
        navbarSocial.classList.toggle("pop-out");
    }
});

contact.addEventListener("click",function(){
    if(contactDiv.classList){
        contactDiv.classList.toggle("contact-in");
        wrapper.classList.toggle("blur");
    }
});

close.addEventListener("click",function(){
    if(contactDiv.classList){
        contactDiv.classList.toggle("contact-in");
        wrapper.classList.toggle("blur");
    }
});