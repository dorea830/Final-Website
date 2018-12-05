// image slideshow 

$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      3000);
});

// fade for elements while scrolling

$(window).scroll( function(){
    $('.fade').each( function(i){
            
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
            
          if( bottom_of_window > bottom_of_element ){
             $(this).animate({'opacity':'1'},500);
        }
            
    }); 
});


// navbar links jump to position on page when clicked

$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
    $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

window.onload = () => {
  $('#aboutlink').on('click', anchorjump);
  $('#loclink').on('click', anchorjump);
}

 function anchorjump(e) {
    e.preventDefault(); 
    let y = $(e.target.getAttribute('href'))[0].offsetTop; 
    window.scrollTo(0, y - 300); 
}