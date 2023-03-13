// Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// menubar show when clicked
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
// menubar hide when clicked
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
// MenuBar Remove When Mobile Screen Is Display
const navLink = document.querySelectorAll('.nav_link');


/** 
* @function  linkAction
* @description  this function is triggered, which removes the show-menu 
*               class from the nav-menu element. This is usually done to 
*               hide a navigation menu or other element.
* @params  none
*/
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
