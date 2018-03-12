$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            clickable: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
        },
    });
    var loaderbox = document.getElementsByClassName('loaderbox')[0];
    loaderbox.style.display = 'none';

});