$('.product_item').slick({
    prevArrow: '<i class="fa-solid fa-angle-left icon_one"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right icon_two"></i>',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
responsive: [
{
breakpoint: 1024,
settings: {
slidesToShow: 3,
slidesToScroll: 3,
infinite: true,
dots: false
}
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2
}
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
}
}
// You can unslick at a given breakpoint now by adding:
// settings: "unslick"
// instead of a settings object
]
});
    
