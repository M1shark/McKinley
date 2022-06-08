const burger = (btn, nav) => {
    const toggl = document.querySelector(btn);
    const menu = document.querySelector(nav);
    toggl.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}
burger(".header-toggler", ".header-nav");
//Swiper 
$(document).ready(function(){
    $('.swiper-body').slick({
        slidesToShow: 1,
        Infinity:true,
    });
});