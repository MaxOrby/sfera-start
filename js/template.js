console.log('connect');


$(window).on("scroll touchmove", function() {

    if ($(document).scrollTop() >= $("#two").position().top) {
        $('.header').addClass('header-activ');
        
    } else {
      $('.header').removeClass('header-activ');
    };

    let scrolled_val = $(document).scrollTop().valueOf();
    scrolled_val = ((scrolled_val++) / 10)*2;
    
    $('.hero').css('background-color', 'rgba(0,0,0, .' + scrolled_val + ')');
   // console.log(scrolled_val);


});


$(document).ready(function(){
    $('.tab-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.tab-nav'
    });

    $('.tab-nav').slick({
        slidesToShow: 8,
        slidesToScroll: 7,
        asNavFor: '.tab-content',
        infinite: false,
        verticalSwiping: true,
        vertical: true,
        focusOnSelect: true
      });


  /*
$('a[data-slide]').click(function(e) {
   e.preventDefault();
    var slideno = $(this).data('slide');
    console.log(slideno);
 //  $('.tab-content').slick(slideno - 1);
    $('.tab-nav').slick('slickGoTo', slideno - 1)
});
*/
    

    
$('.work-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots:false,
    arrows:true,
    appendArrows: '.work-slider_nav',
    prevArrow:'<button type = "button" class = "slick-prev"> <svg class="icon slick-prev_icon"> <use xlink:href="#shevron"></use> </svg> </button>',
    nextArrow:'<button type = "button" class = "slick-next"> <svg class="icon slick-next_icon"> <use xlink:href="#shevron"></use> </svg> </button>'

});
    

});