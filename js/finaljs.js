/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 window.onscroll = function () {
    stickFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
    if($(window).width()<600){
        navbar.classList.add("sticky");
    }
}

function loadSnippet(fileName){
        $("#content").load("html/"+fileName+".html");
}
loadSnippet("about");

 