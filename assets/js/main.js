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


// Home Section Swiper Slider
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
})


// New Arrivals Section Swiper Slider
let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
});


/** 
* @description  its adds smooth scrolling behavior to all anchor links on the page 
*               that link to a specific section of the website. When one of these links 
*               is clicked, the script scrolls smoothly to the target section of the 
*               page rather than jumping directly.
*
* @params  anchor(fetch clicked anchor tag)
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});