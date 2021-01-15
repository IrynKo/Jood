$(document).ready(function(){
$('.slider').slick({
    arrow: true,
    dots: true,
    variableWidth: true,
    
});
});


$(document).ready(function(){
    $('.menu-burger').click(function(event) {
    $('.menu-burger, .navigation__menu').toggleClass('active');
    });
})